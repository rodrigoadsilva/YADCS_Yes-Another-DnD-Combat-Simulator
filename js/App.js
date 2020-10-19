let url = "https://www.dnd5eapi.co/api/races";
let dataReturn;

function callRaces(){
  let callResult;
  $.ajax({url, async: false})
  .done(function(data) {
    dataReturn = data.results;
    callResult = data.results;
  })
  .fail(function() {
    alert( "error" );
  });
  return callResult;
}

function createSelectorRace(races){
  let racesSelector = '<option selected>Choose here a race</option>';
  races.forEach((race) => {
    racesSelector += `<option value="${race.index}">${race.name}</option>`
    console.log(race)
  });
  $('#characterRaceSelector').html(racesSelector)
}

function createSelectorClasses(classes){

}

$(document).ready(() => {
  let races = callRaces();
  console.log(races)
  createSelectorClasses(races);
  
})