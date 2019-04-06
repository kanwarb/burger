$(function() {
    $(".eat-this").on("click", function(event) {
      var id = $(this).data("id");
      var burgerDev = $(this).data("devoured");
      console.log(burgerDev);
      var newburgerState = {
        devoured: burgerDev
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newburgerState
      }).then(
        function() {
          console.log("Burger Devoured", burgerDev);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $("#burger-form").on("submit", function(){
        var addBurger = { 
           burger_name: "'" + $("#add-burger").val().trim() +"'" ,
           devoured: false
          };

        $.ajax("/api/burger", {
            method: "POST",
            data: addBurger
        }).then(function(response){
            console.log(response.data);
            location.reload();
        })
    })
});
