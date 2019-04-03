var express = require("express");

var router = express.router();

var burger = require("../modals/burger");

router.get("/", function(req,res){
    burger.all(function(data){
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
    
    
})