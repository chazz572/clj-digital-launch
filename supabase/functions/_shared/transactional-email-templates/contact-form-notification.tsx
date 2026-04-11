import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "CJL Websites"

interface ContactFormNotificationProps {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const ContactFormNotificationEmail = ({ name, email, phone, message }: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'a visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>You've received a new message through {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || 'Not provided'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || 'Not provided'}</Text>
          <Text style={label}>Phone</Text>
          <Text style={value}>{phone || 'Not provided'}</Text>
          <Text style={label}>Message</Text>
          <Text style={value}>{message || 'No message'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} contact form.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `New Contact Form Submission from ${data.name || 'a visitor'}`,
  to: 'chase.simpson@cjlwebsites.com',
  displayName: 'Contact form notification',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', phone: '555-1234', message: 'I need a website for my business.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Inter', Arial, sans-serif" }
const container = { padding: '32px 24px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: '700' as const, color: '#0f2a4a', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const detailSection = { margin: '0' }
const label = { fontSize: '12px', fontWeight: '600' as const, color: '#0f2a4a', textTransform: 'uppercase' as const, letterSpacing: '0.05em', margin: '0 0 4px' }
const value = { fontSize: '14px', color: '#334155', lineHeight: '1.5', margin: '0 0 16px' }
const footer = { fontSize: '12px', color: '#94a3b8', margin: '0' }
