var express = require("express");

var router = express.Router();

var burger = require("../modals/burger");

router.get("/", function(req,res){
    burger.all(function(data){
        var burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
    });
    
});

router.put("/api/burger/:id", function(req,res){
    var condition = " id = " + req.params.id;
    console.log(req.body.devoured);
    burger.update({
        devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      }
    });
});

router.post("/api/burger", function(req,res){
  burger.create(
     ["burger_name", "devoured"],
     [req.body.burger_name, req.body.devoured]
  , function(result){
          res.json({ id: result.id });
      });
})

module.exports = router;