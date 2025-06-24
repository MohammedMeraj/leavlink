'use client';

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

      <ul className="grid grid-cols-2  gap-8">
        {files.map((file, idx) => (
          <li key={idx}>
            <a
              href={`/files/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline w-[80%]"
            >
              {file}
            </a>
          </li>
        ))}
      </ul>

      
    </div>
  );
}
