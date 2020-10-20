let url = "https://www.dnd5eapi.co/api/";
let dataReturn;
let playerCharacter = {}

function callApi(query) {
    let callResult
    $.get({
        url: url + query,
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
        racesSelector += `<option value="${race.index}" name="${race.name}">${race.name}</option>`
    });
    $('#characterRaceSelector').html(racesSelector)
}

function createSelectorClasses(classes) {
    let classesSelector = '<option selected>Choose here a class</option>';
    classes.forEach((classKey) => {
        classesSelector += `<option value="${classKey.index}" name="${classKey.name}">${classKey.name}</option>`
    });
    $('#characterClassSelector').html(classesSelector)
}

$(document).ready(() => {
    let races = callApi('races');
    createSelectorRace(races);

    $('#characterRaceSelector').change(() => {
        let selectorValue = $('#characterRaceSelector').val();
        if(selectorValue !== 'Choose here a race'){
            let raceName = $('#characterRaceSelector').find('option:selected').attr("name");
            $('#raceSelected').html(raceName);
            let classes = callApi('classes');
            createSelectorClasses(classes);
            $('#collapseTwo').collapse('toggle');
            $('#collapseOne').collapse('toggle');
        }
    });
    $('#characterClassSelector').change(() => {
        let selectorValue = $('#characterClassSelector').val();
        if(selectorValue !== 'Choose here a class'){
            let className = $('#characterClassSelector').find('option:selected').attr("name");
            $('#classSelected').html(className);
            $('#collapseTwo').collapse('toggle');
        }
    });

})