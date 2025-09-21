const nodemailer = require('nodemailer');

module.exports = async function (context, req) {
    // Enable CORS
    context.res = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Content-Type': 'application/json'
        }
    };

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        context.res.status = 200;
        return;
    }

    context.log('Processing email request');

    try {
        const { email, subject, message } = req.body;

        // Validate required fields
        if (!email || !subject || !message) {
            context.res.status = 400;
            context.res.body = {
                success: false,
                message: 'All fields are required'
            };
            return;
        }

        // Email configuration
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'sahebiramazan@gmail.com',
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER || 'sahebiramazan@gmail.com',
            to: 'support@Zivara.io',
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>From:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3B82F6;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <p style="color: #666; font-size: 12px;">
                        This message was sent from the Zivara website contact form.
                    </p>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        context.res.status = 200;
        context.res.body = {
            success: true,
            message: 'Message sent successfully!'
        };

    } catch (error) {
        context.log.error('Error sending email:', error);
        
        context.res.status = 500;
        context.res.body = {
            success: false,
            message: 'Failed to send message. Please try again later.'
        };
    }
};
