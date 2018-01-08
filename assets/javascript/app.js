$(document).ready(function() {

  //create an array of strings related to topic
  var topics = ["Jon Snow", "Daenerys Targaryen", "Cersei Lannister", "Jaime Lannister", "Tyrion Lannister", "Arya Stark", "Sansa Stark"]

  // make a button for each of the characters within the topic variable
  for (var i = 0; i < topics.length; i++) {
    var charButton = $("<button>");
    charButton.addClass("btn-warning");
    charButton.attr("data-character", topics[i]);
    charButton.text(topics[i]);
    $(".buttons").append(charButton);
  }

});
