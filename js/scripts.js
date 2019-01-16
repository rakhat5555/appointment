$(document).ready(function(){
  $("form#end").submit(function(event) {
    event.preventDefault();
    var string = "Booking Successful!!"
    $("#submit").text(string);

  });
});
