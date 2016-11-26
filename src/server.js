import { Server } from 'http';
import express from 'express';

// Initialize server & configuration.
const app = express();
const server = new Server(app);

// Define directory for static assets.
// NOTE: THIS IS WRONG!!!!!!
app.use(express.static('build'));

const port = process.env.PORT || 3000;

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port}`);
});
