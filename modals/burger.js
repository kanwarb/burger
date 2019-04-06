var orm = require("../config/orm");

var burger = {

    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    update: function(devoured, condition, cb){
        orm.update("burgers", devoured,condition,function(res){
            cb(res);
        });
    },
    create: function(cols,vals,cb){
        orm.insert("burgers", cols,vals, function(res){
            cb(res);
        });
    }
}

module.exports = burger;
