var mysql= require("mysql");

var connection = mysql.createConnection({
    host: "fnx6frzmhxw45qcb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "v7fglgmcj9ucu889",
    password: "ucoz4igohn878whc",
    database: "f9shnj24g6hkyuxr"
});

connection.connect(function(err){
    if(err){
        console.log("Error connecting to mySql " + err)
    }
    console.log("Connected to mySql " + connection.threadId);
});

module.exports = connection;