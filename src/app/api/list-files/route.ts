import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filesDir = path.join(process.cwd(), 'public/files');

  // Read all PDF files
  const files = fs.readdirSync(filesDir).filter(file => file.endsWith('.pdf'));

  return NextResponse.json({ files });
}
