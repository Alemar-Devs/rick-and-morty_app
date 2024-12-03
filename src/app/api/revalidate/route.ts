import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { tag } = await request.json();

    if (!tag) {
      return NextResponse.json(
        { message: 'Missing tag parameter' },
        { status: 400 }
      );
    }

    // Revalidate the cache for the tag
    revalidateTag(tag);

    return NextResponse.json(
      { revalidated: true, message: `Cache revalidated for tag: ${tag}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating cache', error },
      { status: 500 }
    );
  }
}
