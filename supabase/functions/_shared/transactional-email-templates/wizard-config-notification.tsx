import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "CJL Websites"

interface WizardConfigProps {
  industry?: string
  tasks?: string[]
  tools?: string[]
}

const WizardConfigNotificationEmail = ({ industry, tasks = [], tools = [] }: WizardConfigProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New AI Employee wizard config — {industry || 'Unknown industry'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New AI Employee Configuration</Heading>
        <Text style={text}>Someone just completed the "Build Your AI Employee" wizard on {SITE_NAME}.</Text>
        <Hr style={hr} />
        <Section style={detailSection}>
          <Text style={label}>Industry</Text>
          <Text style={value}>{industry || 'Not selected'}</Text>
          <Text style={label}>Tasks Selected ({tasks.length})</Text>
          <Text style={value}>{tasks.length > 0 ? tasks.join(', ') : 'None selected'}</Text>
          <Text style={label}>Tools Selected ({tools.length})</Text>
          <Text style={value}>{tools.length > 0 ? tools.join(', ') : 'None selected'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>This email was sent from the {SITE_NAME} AI Employee wizard.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: WizardConfigNotificationEmail,
  subject: (data: Record<string, any>) => `New AI Employee Config — ${data.industry || 'Unknown'}`,
  to: 'chase.simpson@cjlwebsites.com',
  displayName: 'Wizard config notification',
  previewData: { industry: 'Real Estate', tasks: ['Respond to new leads instantly', 'Schedule appointments'], tools: ['Google Calendar', 'HubSpot'] },
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
