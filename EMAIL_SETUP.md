# Email Setup Instructions

## 1. Gmail App Password Setup

To send emails from the contact form, you need to set up a Gmail App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password

## 2. Environment Variables

Create a `.env` file in the root directory with:

```
EMAIL_USER=sahebiramazan@gmail.com
EMAIL_PASS=your-app-password-here
PORT=3001
```

Replace `your-app-password-here` with the app password you generated.

## 3. Install Dependencies

```bash
npm install express nodemailer cors
```

## 4. Start the Server

```bash
npm run build
npm start
```

## 5. Test the Contact Form

1. Navigate to your website
2. Go to the contact page
3. Fill out the form and submit
4. Check sahebiramazan@gmail.com for the email

## Notes

- The server runs on port 3001 by default
- Make sure to build the React app before starting the server
- The contact form will send emails to sahebiramazan@gmail.com
- All form submissions will be formatted as HTML emails
