# Azure Blob Storage + CDN Deployment Guide

## 🏗️ **Your Current Setup**
- **Frontend**: React app deployed to Azure Blob Storage
- **CDN**: Azure CDN serving the static files
- **CI/CD**: GitHub Actions pushing built files to blob storage

## 🚀 **Contact Form Solutions**

### **Option 1: Standalone Azure Function (Recommended)**

#### **Step 1: Create Azure Function App**
1. **Go to Azure Portal** → **Create a resource** → **Function App**
2. **Configure**:
   - **Name**: `Zivara-contact-function` (or your preferred name)
   - **Runtime**: Node.js
   - **Region**: Same as your blob storage
   - **Plan**: Consumption (serverless)

#### **Step 2: Deploy the Function**
1. **Upload the `azure-function` folder** to your Function App
2. **Set Environment Variables**:
   ```
   EMAIL_USER = sahebiramazan@gmail.com
   EMAIL_PASS = YOUR_GMAIL_APP_PASSWORD
   ```

#### **Step 3: Update Contact Form**
Replace `YOUR_FUNCTION_APP_NAME` in `ContactUs.tsx` with your actual Function App name:
```typescript
const apiUrl = process.env.NODE_ENV === 'production' 
  ? 'https://Zivara-contact-function.azurewebsites.net/api/send-email'
  : 'http://localhost:3001/api/send-email';
```

### **Option 2: Formspree (Easiest)**

#### **Step 1: Sign up for Formspree**
1. **Go to**: https://formspree.io
2. **Create account** and **new form**
3. **Get your form endpoint** (e.g., `https://formspree.io/f/YOUR_FORM_ID`)

#### **Step 2: Update Contact Form**
Replace the fetch logic with Formspree:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('Message sent successfully!');
      setFormData({ email: '', subject: '', message: '' });
    } else {
      setSubmitStatus('Failed to send message. Please try again.');
    }
  } catch (error) {
    setSubmitStatus('An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
```

### **Option 3: EmailJS (Client-side)**

#### **Step 1: Set up EmailJS**
1. **Go to**: https://www.emailjs.com
2. **Create account** and **connect Gmail**
3. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

#### **Step 2: Install EmailJS**
```bash
npm install @emailjs/browser
```

#### **Step 3: Update Contact Form**
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    
    if (result.status === 200) {
      setSubmitStatus('Message sent successfully!');
      setFormData({ email: '', subject: '', message: '' });
    }
  } catch (error) {
    setSubmitStatus('Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🔧 **Current CI/CD Setup**

Your current setup pushes to blob storage. To add the contact form:

### **For Azure Function**:
1. **Deploy Function separately** (not through GitHub)
2. **Update contact form** with Function URL
3. **Push to GitHub** (blob storage deployment continues as normal)

### **For Formspree/EmailJS**:
1. **Update contact form** with new service
2. **Push to GitHub** (blob storage deployment continues as normal)

## 📋 **Recommended Steps**

1. **Choose Option 2 (Formspree)** for quickest setup
2. **Update your contact form** with Formspree endpoint
3. **Test locally** first
4. **Push to GitHub** to deploy to blob storage
5. **Test on live site**

## 🔍 **Testing**

After deployment:
1. **Visit your live site** (CDN URL)
2. **Go to Contact page**
3. **Fill out and submit form**
4. **Check your email** for the message

## 🆘 **Troubleshooting**

- **CORS errors**: Make sure your Function has CORS enabled
- **Form not submitting**: Check browser console for errors
- **Emails not received**: Check spam folder, verify email credentials
