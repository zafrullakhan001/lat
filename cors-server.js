// cors-server.js

const host = "0.0.0.0";
const port = 8080;

const cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, function () {
    console.log(`CORS Anywhere server is running on http://${host}:${port}`);
  });
