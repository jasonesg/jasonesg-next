import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { email } = body;

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 });
  }

  try {
    const supabase = await createClient();
    const insertData = { email, source: 'blog_page' };

    const { error: supabaseError } = await supabase
      .from('subscribers')
      .insert([insertData]);
    
    if (supabaseError) {
      if (supabaseError.code === '23505') {
        // User already exists in Supabase
        return NextResponse.json({ message: 'Success' }, { status: 201 });
      } else {
        console.error('Supabase insert error:', supabaseError);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
      }
    }
    
    return NextResponse.json({ message: 'Success' }, { status: 201 });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
