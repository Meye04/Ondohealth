function recommend() {
  // Get the user input
  var location = document.getElementById("location").value;
  var symptoms = document.getElementById("symptoms").value;
  var consultant = document.getElementById("consultant").value;

  // Make a data-driven recommendation
  var recommendations = [
    { name: "Hospital A", distance: 5, availability: "Yes" },
    { name: "Hospital B", distance: 7, availability: "No" },
    { name: "Hospital C", distance: 3, availability: "Yes" },
    { name: "Hospital D", distance: 10, availability: "Yes" },
  ];

  var filteredRecommendations = recommendations.filter(function(hospital) {
    return hospital.availability === consultant;
  });

  filteredRecommendations.sort(function(a, b) {
    return a.distance - b.distance;
  });

  // Display the recommendations
  var recommendationsDiv = document.getElementById("recommendations");
  recommendationsDiv.innerHTML = "";
  if (filteredRecommendations.length > 0) {
    var heading = document.createElement("h2");
    heading.innerHTML = "Recommendations";
    recommendationsDiv.appendChild(heading);

    var ul = document.createElement("ul");
    filteredRecommendations.forEach(function(hospital) {
      var li = document.createElement("li");
      li.innerHTML = hospital.name + " (Distance: " + hospital.distance + " km)";
      ul.appendChild
(li);
});
recommendationsDiv.appendChild(ul);
} else {
var message = document.createElement("p");
message.innerHTML = "No hospitals found that meet your criteria.";
recommendationsDiv.appendChild(message);
}
}


