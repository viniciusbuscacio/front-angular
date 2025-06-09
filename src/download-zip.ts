import { writeFile } from 'fs/promises';

export async function downloadZip(): Promise<void> {
  const response = await fetch('https://example.com/file.zip');

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile('downloaded.zip', buffer);
  console.log('File saved as downloaded.zip');
}

downloadZip().catch(err => console.error(err));
