interface Resquest {
  groupId: string;
  artifactId: string;
}

export async function sendRequest(): Promise<void> {
  const payload: Resquest = {
    groupId: 'example.group',
    artifactId: 'example-artifact'
  };

  const response = await fetch('https://example.com/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  console.log('Response:', data);
}

sendRequest().catch(err => console.error(err));
