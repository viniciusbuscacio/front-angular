# front-angular



This repository includes an example script demonstrating how to send a POST request where the body contains a `Resquest` object with `groupId` and `artifactId` fields.

To build the TypeScript source and run the script:

```bash
npm run build
npm start
```

An additional example, `src/download-zip.ts`, shows how to request a binary
file from an API and save it locally. Build it in the same way and run using

```bash
node dist/download-zip.js
```

This project exposes a small proxy endpoint for development.

## Usage

Install dependencies and start the server:

```bash
npm install
node server.js
```

The server starts on port `3000` by default. It provides a POST endpoint
`/archetype` which forwards any request body to
`http://localhost:8080/archetype` by default. You can change the target
URL by setting the `TARGET_URL` environment variable.

