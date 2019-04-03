var connection  = require("./connection");

var orm = {

    selectAll: function(tableOne, cb){
        connection.query("select * from ??", [tableOne], function(err, data){
            if(err) throw err;

           cb(data);
        });
    }

}

module.exports = orm;