const express = require('express');

const server = express();

const port = 3000;
server.listen(port, function() {
  console.log(`Server listening on port ${port}`)
});