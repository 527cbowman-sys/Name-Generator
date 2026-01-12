
const userName = document.getElementById("userName").value;
const age = document.getElementById("age").value;
const genderMale = document.getElementById("genderMale").value;
const genderFemale = document.getElementById("genderFemale").value;
const birthstone = document.getElementById("birthstone").value;
const music = document.getElementById("music").value;
const town = document.getElementById("town").value;


let prefix = "";
let firstName = "";
let middleName = "";
let lastName = "";
let suffix = "";

function generateName() {
    getPrefix(genderMale, genderFemale, age);
    getFirstName(gender, firstName);
    getMiddleName(birthstone);
    getLastName(music);
    getSuffix(town);
    console.log(`Your royal name is: ${Prefix} ${FirstName} ${MiddleName} ${LastName} of ${Suffix}`);
}

function getPrefix(genderMale, genderFemale, age) {

    if (genderFemale === "true" && age < 30) {
        Prefix = "Princess";
    } else if (genderFemale === "true" && age >= 30) {
        Prefix = "Queen";
    } else if (genderMale === "true" && age < 30) {
        Prefix = "Prince";
    } else if (genderMale === "true" && age >= 30) {
        Prefix = "King";
    }

}

function getFirstName() {
    let firstLetter = firstName.charAt(0);

    if (genderFemale === "true") {
        switch (firstLetter) {
            case "B": FirstName = "Brielle"; break;
            case "C": FirstName = "Celestia"; break;
            case "D": FirstName = "Delphine"; break;
            case "A": FirstName = "Aurora"; break;
            case "E": FirstName = "Eliana"; break;
            case "F": FirstName = "Fiona"; break;
            case "G": FirstName = "Genevieve"; break;
            case "H": FirstName = "Helena"; break;
            case "I": FirstName = "Isabella"; break;
            case "J": FirstName = "Juliette"; break;
            case "K": FirstName = "Keya"; break;
            case "L": FirstName = "Liliana"; break;
            case "M": FirstName = "Mirabelle"; break;
            case "N": FirstName = "Nicolette"; break;
            case "O": FirstName = "Octavia"; break;
            case "P": FirstName = "Penelope"; break;
            case "R": FirstName = "Rosalie"; break;
            case "S": FirstName = "Serephina"; break;
            case "T": FirstName = "Talia"; break;
            case "V": FirstName = "Valeria"; break;
            case "W": FirstName = "Willow"; break;
            default: FirstName = "Elizabeth"; break;
        }

    }

    if (genderMale === "true") {
        switch (firstLetter) {
            case "A": FirstName = "Alaric"; break;
            case "B": FirstName = "Benedict"; break;
            case "C": FirstName = "Cassian"; break;
            case "D": FirstName = "Dorian"; break;
            case "E": FirstName = "Elias"; break;
            case "F": FirstName = "Felix"; break;
            case "G": FirstName = "Gideon"; break;
            case "H": FirstName = "Hadrian"; break;
            case "I": FirstName = "Iskander"; break;
            case "J": FirstName = "Julian"; break;
            case "K": FirstName = "Kaelan"; break;
            case "L": FirstName = "Lucien"; break;
            case "M": FirstName = "Matthias"; break;
            case "N": FirstName = "Nikolai"; break;
            case "O": FirstName = "Orion"; break;
            case "P": FirstName = "Percival"; break;
            case "R": FirstName = "Rowan"; break;
            case "S": FirstName = "Sebastian"; break;
            case "T": FirstName = "Theodore"; break;
            case "V": FirstName = "Valentin"; break;
            case "W": FirstName = "William"; break;
            default: FirstName = "Henry"; break;
        }
    }
}


function getLastName(music) {
    switch (music) {
        case "Rock": LastName = "Blackthorne"; break;
        case "Pop": LastName = "Starling"; break;
        case "Country": LastName = "Hawthorne"; break;
        case "Rap": LastName = "Noblehart"; break;
        case "Classical": LastName = "Montclair"; break;
        default: LastName = "Silverlake";
    }
}

function getMiddleName(birthstone) {
    switch (birthstone) {
        case "Garnet": MiddleName = "Garnet"; break;
        case "Amethyst": MiddleName = "Amethyst"; break;
        case "Aquamarine": MiddleName = "Aquamarine"; break;
        case "Diamond": MiddleName = "Diamond"; break;
        case "Emerald": MiddleName = "Emerald"; break;
        case "Pearl": MiddleName = "Pearl"; break;
        case "Ruby": MiddleName = "Ruby"; break;
        case "Peridot": MiddleName = "Peridot"; break;
        case "Sapphire": MiddleName = "Sapphire"; break;
        case "Opal": MiddleName = "Opal"; break;
        case "Topaz": MiddleName = "Topaz"; break;
        case "Turquoise": MiddleName = "Turquoise"; break;
    }
}


    function getSuffix(town) {
        Suffix = town;
    }