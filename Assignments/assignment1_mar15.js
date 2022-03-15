const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.get('/', function (req, res) {
    const fullPath = path.join(__dirname, 'RegistrationForm.html');
    res.sendFile(fullPath);
});
app.post('/displayInfo', function (req, res) {
    console.log(req.body);
    res.send(`<style>body{background-color:cyan}table{border:4px solid red; margin:auto;padding:30px}td{border:1px solid blue;padding:15px}th{border:1px solid black;padding:15px}</style><h1 style="text-align:center" >Displaying your inputs</h1><table><tr><th>Username</th><th>Email</th><th>Password</th><th>Date of Birth</th><th>City</th><th>Country</th></tr>
    <tr><td>${req.body.username}</td><td>${req.body.email}</td><td>${req.body.password}</td><td>${req.body.dob}</td><td>${req.body.city}</td><td>${req.body.country}</td>
    </tr>
    </table>
    `);
});
app.listen(3001);
console.log('Running on 3001 port');
