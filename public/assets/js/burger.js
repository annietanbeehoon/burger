$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
      var burgerID = { id: id};
      var nowDevoured = true;
  
      var nowDevouredState = {
        id: burgerID,
        devoured: nowDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: nowDevouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurger = { burgerName: $("#addBurger").val().trim()};
      if (newBurger.burgerName.length > 0){
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() { 
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
    });
  
  });