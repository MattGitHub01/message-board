const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/mainRoute.js');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', mainRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));