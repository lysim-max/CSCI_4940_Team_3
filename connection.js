var mysql2 = require('mysql2');

var myconnection = mysql2.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "CSCI4400",
    database: "capstone_project",

});

myconnection.connect(function(err){
    if(err) {
        console.error('Error connecting:' + err.stack);
        return;
    }
    console.log("connected!");
});


module.exports={myconnection};