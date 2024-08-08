const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Howdy, partner!',
        user: 'Test User: Cowboy Guy 1',
        added: new Date()
    },
    {
        text: 'Well howdy there stranger!',
        user: 'Test User: Cowboy Guy 2',
        added: new Date()
    }
];

router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Messaging Web App', messages: messages });
});

router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
    messages.push({
        text: req.body.msgTxt,
        user: req.body.usrName,
        added: new Date(),
    });
    res.redirect('/');
});

module.exports = router;