$(document).ready(function() {

  //create an array of strings related to topic
  var topics = ["Jon Snow", "Daenerys Targaryen", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister", "Arya Stark", "Sansa Stark"];

  // use a function to make a button for each of the characters within the topic variable
  function displayButtons() {
    $(".buttons").empty(); // removes old buttons for no repetition
    for (var i = 0; i < topics.length; i++) {
      var charButton = $("<button>");
      charButton.addClass("btn-warning");
      charButton.attr("data-person", topics[i]);
      charButton.text(topics[i]);
      $(".buttons").append(charButton);
    }
  }

  // create a function that adds a new button when typed into the search button
  $("#add-gif").on("click", function(event) {
    event.preventDefault();
    var gifSearch = $("#gif-input").val().trim();
    topics.push(gifSearch);
    displayButtons();
  });

  // create on click function to grab 10 non-animated gif images from the GIPHY API and displays them on the page
  function loadData() {
    $("button").on("click", function() {

      // clear the div from previous gifs
      $(".display").empty();

      // create variable to hold giphy URL
      var name = $(this).attr("data-person");
      // console.log(this);
      // console.log("Searching Giphy for: " + name);
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=mAuau4GXKo9SjuYYPFLo7OsO5KfWXHAb&limit=10"; // the addition of &limit=10 limits the serach parameter to 10 gifs

      // create the AJAX call
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        console.log(response);

        // create variables for needed info
        var results = response.data;

        // for loop that will go through searchResults and add the gifs to gifDisplay
        for (var k = 0; k < results.length; k++) {
          var gifDiv = $("<div class='item'>"); // creates div for each of the ratings and gifs
          var rating = results[k].rating; // store the rating of the gif
          var p = $("<p>").text("Rating: " + rating); // creates a paragraph with rating attached
          var gifImage = $("<img>"); // creates an image tag for the gif result to go into

          // add a class and attributes for image animation
          gifImage.addClass("gif");
          gifImage.attr("src", results[k].images.fixed_height_still.url);
          gifImage.attr("data-state","still");
          gifImage.attr("data-still", results[k].images.fixed_height_still.url);
          gifImage.attr("data-animate", results[k].images.fixed_height.url);

          // appends paragraph and gif to the gifDiv
          gifDiv.append(p);
          gifDiv.append(gifImage);

          // prepends the gifDiv to the original div from the html
          $(".display").prepend(gifDiv);
        };

      });

    });

  };

  // on click function that changes the gif to animate when clicked and opposite
  $(".display").on("click", ".gif", function () {
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

  });

  // call the functions
  displayButtons();
  loadData();

});
