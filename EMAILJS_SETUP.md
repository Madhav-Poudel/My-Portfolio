# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Note your **Service ID**

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello Madhav,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Save and note your **Template ID**

## Step 4: Get Public Key
1. Go to Account > General
2. Find your **Public Key** (starts with user_)

## Step 5: Update Environment Variables
1. Create a `.env` file in your project root
2. Add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the message
4. Verify the form shows success/error messages

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Madhav Poudel)
- `{{reply_to}}` - Sender's email for replies

## Free Plan Limits:
- 200 emails per month
- Perfect for a portfolio contact form

## Security Note:
- Public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose your private key in frontend code
