import * as http from 'http';
import * as url from 'url';
import 'dotenv/config';
import { readFile, writeFile } from 'fs/promises';

let books = [];

async function loadData(filename) {
  try {
    const data = await readFile(filename, { encoding: 'utf8' });
    books = JSON.parse(data);
  } catch (err) {
    books = [];
  }
}

const headerFields = { 
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Origin': '*'
};
  
async function basicServer(request, response) {
  const parsedURL = url.parse(request.url, true);
  const options = parsedURL.query;
  const pathname = parsedURL.pathname;
  const method = request.method;

  if (method == 'GET' && pathname.startsWith('/books')) {
    await loadData(process.env.DATABASE_URL);
    response.writeHead(200, headerFields);
    response.write(JSON.stringify(books));
    response.end();
  } 
}

// Start the server on port 3000.
http.createServer(basicServer).listen(3000, () => {
  console.log('Server started on port 3000');
});
