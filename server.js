const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
    // This server does not send Telegram messages, just responds
    res.send('<h1>Thank you!</h1><p>Your name has been submitted.</p>');
});

app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`);
});