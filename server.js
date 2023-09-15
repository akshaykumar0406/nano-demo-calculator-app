const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    console.log(parseInt(req.body.raw.first)+parseInt(req.body.raw.second))
    res.status(200)
    res.json({ "result": parseInt(req.body.raw.first)+parseInt(req.body.raw.second) });
});


baseRouter.post('/subtract', (req, res) => {
    console.log(parseInt(req.body.raw.first)-parseInt(req.body.raw.second));
    res.status(200)
    res.json({ "result": parseInt(req.body.raw.first)-parseInt(req.body.raw.second)  });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});