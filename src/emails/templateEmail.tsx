import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Section,
  Text,
} from '@react-email/components';

interface GithubAccessTokenEmailProps {
  username?: string;
  message?: string;
  email?: string;
}

const baseUrl = "http://missionarytechsupport.org";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : '';

export const GithubAccessTokenEmail = ({
  username,
  message,
  email,
}: GithubAccessTokenEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/_image?href=%2F_astro%2FlogoMTS.DLzC5v_P.png&w=612&h=568&f=webp`}
          width="32"
          height="32"
          alt="Missionary Tech Support Logo"
        />

        <Text style={title}>
          <strong>Missionary Tech Support</strong>
          <p>Este es un mensaje enviado desde el formulario de contacto.</p>
        </Text>

        <Section style={section}>
          <Text style={text}>
            <strong>Name: </strong> {username} <br />
            <strong>Email: </strong> <a href={`mailto:${email}`}>{email}</a> <br />
            <strong>Message: </strong> {message}
          </Text>
          
        </Section>

        <Text style={footer}>
          <a href="http://missionarytechsupport.org">Missionary Tech Support 2025</a>
        </Text>
      </Container>
    </Body>
  </Html>
);

GithubAccessTokenEmail.PreviewProps = {
  username: 'alanturing',
  message: 'This is a sample message from the contact form.',
  email: 'alanturing@example.com',
} as GithubAccessTokenEmailProps;

export default GithubAccessTokenEmail;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '12px 24px',
};

const links = {
  textAlign: 'center' as const,
};

const link = {
  color: '#0366d6',
  fontSize: '12px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
