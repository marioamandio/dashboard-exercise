const express = require('express');
const mysql = require('mysql');
const path = require('path')

const databaseConfig = require('./database/config')


const app = express()
port = process.env.PORT || 3001;


//DATABASE SETUP
const connection = mysql.createConnection(databaseConfig);

app.get('/weekly', async (req, res) => {
    connection.query("SELECT * FROM weekly", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    });
})

app.get('/top', async (req, res) => {
    connection.query("SELECT * FROM top", (err, result, fields) => {
        if (err) throw err;
        res.send(result)
    });
})

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}


app.listen(port, () => {
    console.log('Server listening on Port ' + port);
})