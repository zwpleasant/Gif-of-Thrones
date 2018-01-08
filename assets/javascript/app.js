$(document).ready(function() {

  //create an array of strings related to topic
  var topics = ["Jon Snow", "Daenerys Targaryen", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister", "Arya Stark", "Sansa Stark"]

  // make a button for each of the characters within the topic variable
  for (var i = 0; i < topics.length; i++) {
    var charButton = $("<button>");
    charButton.addClass("btn-warning");
    charButton.attr("data-name", topics[i]);
    charButton.text(topics[i]);
    $(".buttons").append(charButton);
  }
  // create on click function to grab 10 non-animated gif images from the GIPHY API and displays them on the page
  $(".buttons").on("click", function() {
    // clear the div from previous Gifs
    $(".gifDisplay").empty();

    // create variable to hold gifphy URL
    var character = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=mAuau4GXKo9SjuYYPFLo7OsO5KfWXHAb";

    // create the AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });

  });

});
