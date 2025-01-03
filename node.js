const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.end(data);
    });
  } else if(req.url === '/about.html'){
    fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.end(data);
    }); 
  } else if(req.url === '/contact-me.html'){
    fs.readFile(path.join(__dirname, 'contact-me.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server Error');
        return;
      }
      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.end(data);
    }); 
  } else {
    fs.readFile(path.join(__dirname, '404.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server Error');
        return;
      }else{
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.end(data);
            }
    }); 
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
