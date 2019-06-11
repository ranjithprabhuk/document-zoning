const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/dist'));
app.set('views', __dirname + '/dist/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/*', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => {
  console.info(`Document Zoning listening on port ${PORT}!`);
});