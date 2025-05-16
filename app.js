const awsServerlessExpress = require('aws-serverless-express');
const express = require('express');
const app = express();

app.use(express.json());
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Lambda!', timestamp: new Date().toISOString() });
});
app.options('/hello', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
    'Access-Control-Max-Age': '3600'
  }).send();
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
