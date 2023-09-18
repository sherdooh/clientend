const http = require('http');
const httpProxy = require('http-proxy');

// Create a new HTTP proxy server
const proxy = httpProxy.createProxyServer();

// Define a function to handle incoming requests
const handler = (req, res) => {
  // Define the target URL you want to proxy to
  const target = 'http://100.25.204.246:8000/api/blogpost';
  

  // Proxy the modified request to the target URL
proxy.web(req, res, { target });
};

// Create an HTTP server and pass the request handler
const server = http.createServer(handler);

// Start the server on the desired port (e.g., 3000)
server.listen(3000, () => {
  console.log('Proxy server is running on port 3000');
});