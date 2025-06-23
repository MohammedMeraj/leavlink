'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FileListPage() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/list-files')
      .then((res) => res.json())
      .then((data) => setFiles(data.files));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All PDF Files</h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file, idx) => (
          <li key={idx}>
            <a
              href={`/files/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {file}
            </a>
          </li>
        ))}
      </ul>

      <div className='w-full h-fit flex items-center justify-center'>
        <Link className='text-lg ml-20 mt-10 font-bold underline text-gray-800' href="https://chatgpt.com/share/6859aef9-2268-8012-88ae-9e44c7830fc6">GPT Chat : Basic Formulae and EDA Steps</Link>
        </div>
    </div>
  );
}
