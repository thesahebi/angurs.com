# Azure Static Web Apps Deployment Guide

## 🚀 Contact Form Setup for Azure Static Web Apps

### Prerequisites
- Azure account with Static Web Apps service
- GitHub repository connected to Azure
- Gmail account with App Password

### Step 1: Set up Gmail App Password

1. **Go to Google Account Security**: https://myaccount.google.com/security
2. **Enable 2-Step Verification** (if not already enabled)
3. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "Zivara Website" as the name
   - **Copy the 16-character password** (format: `abcd efgh ijkl mnop`)

### Step 2: Configure Azure Function App Settings

1. **Go to Azure Portal**: https://portal.azure.com
2. **Navigate to your Static Web App**
3. **Go to Functions** → **Application Settings**
4. **Add these environment variables**:
   ```
   EMAIL_USER = sahebiramazan@gmail.com
   EMAIL_PASS = YOUR_16_CHARACTER_APP_PASSWORD
   ```

### Step 3: Deploy to Azure

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Azure Functions for contact form"
   git push origin master
   ```

2. **Azure will automatically deploy** when you push to the main branch

### Step 4: Test the Contact Form

1. **Visit your live website**
2. **Go to the Contact page**
3. **Fill out and submit the form**
4. **Check your email** (support@Zivara.io) for the message

### File Structure for Azure Functions

```
api/
├── send-email/
│   ├── index.js          # Azure Function code
│   ├── function.json     # Function configuration
│   └── package.json      # Dependencies
staticwebapp.config.json  # Azure Static Web Apps config
```

### Troubleshooting

#### If emails are not being sent:
1. **Check Azure Function logs** in the Azure Portal
2. **Verify Gmail App Password** is correct
3. **Ensure 2-Step Verification** is enabled on Gmail
4. **Check spam folder** for test emails

#### If the form shows errors:
1. **Check browser console** for JavaScript errors
2. **Verify API endpoint** is accessible
3. **Check Azure Function status** in the portal

### Alternative Solutions

If Azure Functions don't work, consider these alternatives:

1. **Formspree**: https://formspree.io
2. **Netlify Forms**: If using Netlify
3. **EmailJS**: Client-side email service
4. **Third-party form services**: Typeform, Google Forms

### Security Notes

- Never commit Gmail passwords to Git
- Use Azure Key Vault for sensitive data in production
- Enable HTTPS for all communications
- Validate and sanitize form inputs
