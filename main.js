
$(function () {



  var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];


  function plutoCheckbox() {
    if ($('#remove-pluto').is(":checked")) {
      $('#planets').empty();
      planets.shift();
    } else {
      $('#planets').empty();
      planets.unshift(['Pluto', 0.06]);
    }

    addPlanetsToSelect(planets);
  }

  function addPlanetButton() {
    $('#new-planet-button').click(function () {
      if ($('#new-planet').val() == false || $('#new-weight').val() == false) {
        alert("Please enter both a 'New Planet' name and a 'New Planet Multiplier'");
      } else {
        $('#planets').empty();
        planets.push([$('#new-planet').val(), parseFloat($('#new-weight').val())]);
        addPlanetsToSelect(planets);
      }
      $('#new-planet').val('');
      $('#new-weight').val('');
    })
  }
  addPlanetButton();

  // function planetPreventDefault() {
  //   $('#new-planet-button').click(function(click) {
  //     click.preventDefault();
  //     addPlanetButton();
  //   });
  // }
  // planetPreventDefault();

  function addPlanetsToSelect(planets) {
    for (var i = planets.length - 1; i >= 0; i--)
      $('#planets').append('<option>' + planets[i][0] + '</option>')
  };
  addPlanetsToSelect(planets);

  function plutoPreventDefault() {
    $('#remove-pluto').change(function (change) {
      change.preventDefault();
      plutoCheckbox();
    })
  }
  plutoPreventDefault();

  function calculateWeight(weight, planetName) {
    weight = $('#user-weight').val();
    planetName = $('#planets option:selected').text();

    for (var i = 0; i <= planets.length; i++)
      if (planetName == planets[i][0])
        return (weight * planets[i][1]).toFixed(2);
  }
  calculateWeight();

  function calcWeightButton() {
    var weight = $('#user-weight').val();
    var planetName = $('#planets option:selected').text();
    var result = calculateWeight(weight, planetName);

    $('#output').text(" ");
    $('#output').text('If you were on ' + planetName + ', you would weigh ' + result + 'lbs!')
  }
  function weightPreventDefault() {
    $('#calculate-button').click(function (click) {
      click.preventDefault();
      calcWeightButton();
    });
  }
  weightPreventDefault();

})