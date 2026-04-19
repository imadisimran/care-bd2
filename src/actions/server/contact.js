"use server"
import nodemailer from "nodemailer";
import { render } from "@react-email/components";
import ContactAdminEmail from "@/components/contact/ContactAdminEmail";
import CustomerConfirmationEmail from "@/components/contact/CustomerConfirmationEmail";

export async function sendEmail(data) {
    try {
        const { fullName, email, service } = data;

        // Configure your SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_PORT == "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Render the email templates to HTML strings concurrently
        const [adminEmailHtml, customerEmailHtml] = await Promise.all([
            render(<ContactAdminEmail {...data} />),
            render(<CustomerConfirmationEmail {...data} />)
        ]);

        const adminMailOptions = {
            from:`Care BD <${process.env.SMTP_USER}>`, // Sender address
            to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // The admin's email address
            replyTo: email, // Reply to the user's email
            subject: `New Contact Request: ${service} - ${fullName}`,
            html: adminEmailHtml,
        };

        const customerMailOptions={
            from:`Care BD <${process.env.SMTP_USER}>`, // Sender address
            to: email, // The admin's email address
            replyTo: "no-reply@mail.com",
            subject: `New Contact Request: ${service} - ${fullName}`,
            html: customerEmailHtml,
        }

        // Send the emails concurrently
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(customerMailOptions)
        ]);

        return {
            success: true,
            message: "Message sent successfully"
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message: "Failed to send email. Please try again later."
        };
    }
}