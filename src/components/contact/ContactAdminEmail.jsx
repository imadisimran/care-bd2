import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Preview,
} from '@react-email/components';
import * as React from 'react';

export const ContactAdminEmail = ({fullName,email,phone,service,message}) => {
  const previewText = `New contact request from ${fullName} regarding ${service}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new message from your website's contact page.
          </Text>
          
          <Hr style={hr} />

          <Section style={section}>
            <Text style={field}>
              <strong>Name:</strong> {fullName}
            </Text>
            <Text style={field}>
              <strong>Email:</strong> <a href={`mailto:${email}`} style={link}>{email}</a>
            </Text>
            <Text style={field}>
              <strong>Phone:</strong> <a href={`tel:${phone}`} style={link}>{phone}</a>
            </Text>
            <Text style={field}>
              <strong>Service Requested:</strong> {service}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={messageSection}>
            <Text style={messageLabel}><strong>Message:</strong></Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
          
          <Text style={footer}>
            This email was automatically generated from your website's contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactAdminEmail;

// --- Styles ---

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  maxWidth: '600px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.5',
  margin: '0 0 16px',
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 24px',
};

const section = {
  padding: '16px 0',
};

const field = {
  fontSize: '16px',
  color: '#333',
  margin: '8px 0',
  lineHeight: '1.5',
};

const link = {
  color: '#0070f3',
  textDecoration: 'none',
};

const hr = {
  borderColor: '#eaeaea',
  margin: '24px 0',
};

const messageSection = {
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '6px',
  border: '1px solid #eaeaea',
};

const messageLabel = {
  fontSize: '16px',
  color: '#333',
  margin: '0 0 8px',
};

const messageContent = {
  fontSize: '16px',
  color: '#555',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap', 
};

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  marginTop: '32px',
  textAlign: 'center',
};