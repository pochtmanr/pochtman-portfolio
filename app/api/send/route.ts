import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const headersList = headers();
  console.log(headersList);
  
  // Add CORS headers
  const responseHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { 
          status: 400,
          headers: responseHeaders
        }
      );
    }

    console.log('Attempting to send email with:', { name, email, subject, message });

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['rpochtman@gmail.com'],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
      `,
    });

    console.log('Resend response:', data);

    return NextResponse.json(
      { success: true, data },
      { headers: responseHeaders }
    );
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { 
        status: 500,
        headers: responseHeaders
      }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: Request) {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    }
  );
} 