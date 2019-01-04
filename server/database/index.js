

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'sains'
});

connection.connect()

const getWeeklyData = async () => {
    connection.query("SELECT * FROM weekly", (err, result, fields) => {
        if (err) throw err;
        return result

    });
}