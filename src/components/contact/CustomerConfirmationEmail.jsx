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

export const CustomerConfirmationEmail =({fullName,email,phone,service,message}) => {
  const previewText = `We've received your message, ${fullName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank you for reaching out!</Heading>
          
          <Text style={text}>Hi {fullName},</Text>
          
          <Text style={text}>
            We have successfully received your message regarding <strong>{service}</strong>. 
            Our team is reviewing your inquiry and will get back to you as soon as possible.
          </Text>

          <Text style={text}>
            Below is a summary of the information you submitted for your records:
          </Text>
          
          <Hr style={hr} />

          <Section style={section}>
            <Text style={field}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={field}>
              <strong>Phone:</strong> {phone}
            </Text>
          </Section>

          <Section style={messageSection}>
            <Text style={messageLabel}><strong>Your Message:</strong></Text>
            <Text style={messageContent}>{message}</Text>
          </Section>
          
          <Hr style={hr} />

          <Text style={text}>
            If you need to add any additional information, feel free to reply directly to this email.
          </Text>

          <Text style={signOff}>
            Best regards,<br />
            <strong>Your Website Team</strong>
          </Text>

          <Text style={footer}>
            Please do not share sensitive information (like credit card numbers) in this email thread.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default CustomerConfirmationEmail;

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
  margin: '0 0 24px',
};

const text = {
  color: '#555',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const section = {
  padding: '8px 0 16px',
};

const field = {
  fontSize: '15px',
  color: '#444',
  margin: '4px 0',
  lineHeight: '1.5',
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
  marginTop: '8px',
};

const messageLabel = {
  fontSize: '15px',
  color: '#333',
  margin: '0 0 8px',
};

const messageContent = {
  fontSize: '15px',
  color: '#555',
  lineHeight: '1.6',
  margin: '0',
  whiteSpace: 'pre-wrap', 
  fontStyle: 'italic',
};

const signOff = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '32px',
  textAlign: 'center',
};