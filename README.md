# Care BD - Medical & Care Services Platform

[![Live Link](https://img.shields.io/badge/Live-Demo-brightgreen)](https://care-bd.vercel.app/)

Care BD is a modern, comprehensive medical and care service booking platform built with Next.js. It allows users to browse medical services, specialized care courses, and book appointments seamlessly. The application features a robust authentication system, real-time database integration, and a beautiful, responsive UI.


## 🚀 Features

- **User Authentication**: Secure Login and Registration integrated with Firebase (`next-firebase-auth-edge`).
- **Service Booking System**: End-to-end booking flow allowing users to schedule medical and care services.
- **User Dashboard (My Bookings)**: A dedicated section for users to track and manage their service bookings.
- **Dynamic Content**: Service catalogs and specialized course offerings.
- **Contact & Notifications**: Built-in contact forms and automated email confirmations using Nodemailer and React Email.
- **Modern UI/UX**: Designed with a glassmorphism aesthetic and smooth animations using Tailwind CSS v4 and DaisyUI v5.
- **Responsive Design**: Fully optimized for seamless use on all device sizes (mobile, tablet, desktop).

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose/Native Driver)
- **Authentication**: [Firebase](https://firebase.google.com/) via `next-firebase-auth-edge`
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/)
- **Emailing**: [Nodemailer](https://nodemailer.com/) & [React Email](https://react.email/)
- **Alerts**: [SweetAlert2](https://sweetalert2.github.io/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm/yarn/pnpm installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/care-bd.git
cd care-bd
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` or `.env.local` file in the root directory and add the following keys. Make sure to replace them with your actual configuration values:

```env
# Firebase Client Configuration
NEXT_PUBLIC_apiKey="your_api_key"
NEXT_PUBLIC_authDomain="your_project_id.firebaseapp.com"
NEXT_PUBLIC_projectId="your_project_id"
NEXT_PUBLIC_storageBucket="your_project_id.appspot.com"
NEXT_PUBLIC_messagingSenderId="your_sender_id"
NEXT_PUBLIC_appId="your_app_id"

# Firebase Admin Configuration (Required for Server-Side Auth)
FIREBASE_PROJECT_ID="your_project_id"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-xxx@your_project_id.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\n-----END PRIVATE KEY-----\n"

# JWT Secret
COOKIE_SECRET_KEY="your_secure_random_string_here"

# MongoDB Database Variables
MONGO_URI="your-mongodb-uri"
DB_NAME="yourdbname"

# SMTP Settings for Nodemailer
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your_email@gmail.com"
SMTP_PASSWORD="your_app_password"
CONTACT_EMAIL="receiver_email@gmail.com"
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
📦 src
 ┣ 📂 app               # Next.js App Router root
 ┃ ┣ 📂 (auth)          # Authentication routes (login, register)
 ┃ ┗ 📂 (main)          # Main application routes (services, booking, about, contact)
 ┣ 📂 components        # Reusable React components
 ┃ ┣ 📂 button
 ┃ ┣ 📂 contact         # Contact form & Email templates
 ┃ ┣ 📂 courses
 ┃ ┗ 📂 service-detail
 ┣ 📜 proxy.js          # Internal proxies or handlers
 ┗ 📜 ...               # Config files, globals
```

## 🤝 Contributing

Contributions are always welcome! Please follow standard Git workflow protocols: branch off, commit specific changes, and submit a well-documented Pull Request.
