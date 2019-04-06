var connection  = require("./connection");

function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + " = " + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
var orm = {

    selectAll: function(tableOne, cb){
        connection.query("select * from ??", [tableOne], function(err, data){
            if(err) throw err;

           cb(data);
        });
    },

    update: function(tableName, devoured , condition, cb){
      var queryString = "UPDATE " + tableName;

      queryString += " SET ";
      queryString += objToSql(devoured);
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },

    insert: function(tableName,cols,vals, cb){
        var queryString ="INSERT INTO " + tableName;
        queryString += " (" + cols + ") values (";
        queryString += vals;
        queryString += " )"
        console.log(queryString)
        connection.query(queryString, function(err,result){
          if(err){
            throw err;
          }
          cb(result);
        });
    }

}
module.exports = orm;