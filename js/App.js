let url = "https://www.dnd5eapi.co/api/";
let dataReturn;
let playerCharacter = {}

function callRaces() {
    let callResult
    $.get({
        url: url + 'races',
        async: false
    })
        .done(function (data) {
            dataReturn = data;
            callResult = data.results;
        })
        .fail(function () {
            alert("error");
        });
    return callResult;
}

function createSelectorRace(races) {
    let racesSelector = '<option selected>Choose here a race</option>';
    races.forEach((race) => {
        racesSelector += `<option value="${race.index}">${race.name}</option>`
    });
    $('#characterRaceSelector').html(racesSelector)
}

function createSelectorClasses(classes) {

}

$(document).ready(() => {
    $('#characterRaceSelector').change(() => {
        let selectorValue = $('#characterRaceSelector').val();
        if(selectorValue !== 'Choose here a race'){
            console.log(selectorValue);
            $('#collapseTwo').collapse('toggle');
            $('#collapseOne').collapse('toggle');
        }
    })
    let races = callRaces();
    createSelectorRace(races);
})