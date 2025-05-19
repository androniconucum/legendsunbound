import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  console.log('File upload route started');
  try {
    const formData = await request.formData();
    const proof = formData.get('proof') as File;
    const email = formData.get('email') as string;

    if (!proof || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically upload the file to a storage service
    // For now, we'll just acknowledge receipt
    console.log('File received:', {
      name: proof.name,
      size: proof.size,
      type: proof.type,
      email: email
    });

    return NextResponse.json({ 
      success: true,
      message: 'File received successfully'
    });
  } catch (error) {
    console.error('File upload error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to upload file'
      },
      { status: 500 }
    );
  }
} 