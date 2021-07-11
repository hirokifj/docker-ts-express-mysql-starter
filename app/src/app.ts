import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.get('/', function (req, res) {
  res.send('hello world.');
});

export { app };
