const express = require('express');
const bodyParser = require('body-parser');
const musicalRoutes = require('./routes/musicalRoutes');

const app = express();
app.set('view wngine', './views');
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static('public'));

app.use('/', musicalRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});