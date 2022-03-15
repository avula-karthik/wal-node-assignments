const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    let fullPath = path.join(__dirname, '/Calc.html');
    res.sendFile(fullPath);
});
app.post('/action', function (req, res) {
    console.log(req.body);
    if (req.body.operator == 'mul') {
        const result = parseInt(req.body.input1) * parseInt(req.body.input2);
        res.send(`
            <div>
                <h3>
                    Multiplication of ${req.body.input1} and ${req.body.input2} is ${result}
                </h3>
            </div>`);
    }
    if (req.body.operator == 'add') {
        const result = parseInt(req.body.input1) + parseInt(req.body.input2);
        res.send(`
            <div>
                <h3>
                    Addition of ${req.body.input1} and ${req.body.input2} is ${result}
                </h3>
            </div>`);
    }
    if (req.body.operator == 'sub') {
        const result = parseInt(req.body.input1) - parseInt(req.body.input2);
        res.send(`
            <div>
                <h3>
                    Subtraction of ${req.body.input1} and ${req.body.input2} is ${result}
                </h3>
            </div>`);
    }
    if (req.body.operator == 'div') {
        const result = parseInt(req.body.input1) / parseInt(req.body.input2);
        res.send(`
            <div>
                <h3>
                    Division of ${req.body.input1} and ${req.body.input2} is ${result}
                </h3>
            </div>`);
    } else {
        res.send('Something went wrong');
    }
});
app.listen(3001);
console.log('Activated 3001 port');
