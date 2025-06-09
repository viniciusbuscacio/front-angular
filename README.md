# front-angular

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
