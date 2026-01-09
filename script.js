function generateName() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender =
        document.getElementById("genderMale").value;
    document.getElementById("genderFemale").value;
    const birthstone = document.getElementById("birthstone").value;
    const music = document.getElementById("music").value;
    const town = document.getElementById("town").value;
    let Prefix = "";
    let FirstName = "";
    let MiddleName = "";
    let LastName = "";
    let Suffix = "";


    getPrefix(gender, age);
    getFirstName(gender, name);
    getMiddleName(birthstone);
    getLastName(music);
    getSuffix(town);



    document.getElementById("result").innerText = `Your royal name is: ${Prefix} ${FirstName} ${MiddleName} ${LastName} of ${Suffix}`;
}

function getPrefix(gender, age) {

    if (gender === "female" && age < 30) {
        prefix = "Princess";
    } else if (gender === "female" && age >= 30) {
        prefix = "Queen";
    } else if (gender === "male" && age < 30) {
        prefix = "Prince";
    } else if (gender === "male" && age >= 30) {
        prefix = "King";
    }

}

function getFirstName() {
    let firstLetter = Name.charAt(0);

    if (gender === "Girl") {
        switch (firstLetter) {
            case "A": newName = "Aurora"; break;
            case "B": newName = "Brielle"; break;
            case "C": newName = "Celestia"; break;
            case "D": newName = "Delphine"; break;
            case "E": newName = "Eliana"; break;
            case "F": newName = "Fiona"; break;
            case "G": newName = "Genevieve"; break;
            case "H": newName = "Helena"; break;
            case "I": newName = "Isabella"; break;
            case "J": newName = "Juliette"; break;
            case "K": newName = "Keya"; break;
            case "L": newName = "Liliana"; break;
            case "M": newName = "Mirabelle"; break;
            case "N": newName = "Nicolette"; break;
            case "O": newName = "Octavia"; break;
            case "P": newName = "Penelope"; break;
            case "R": newName = "Rosalie"; break;
            case "S": newName = "Serephina"; break;
            case "T": newName = "Talia"; break;
            case "V": newName = "Valeria"; break;
            case "W": newName = "Willow"; break;
            default: newName = "Elizabeth"; break;
        }
    }

    if (gender === "Boy") {
        switch (firstLetter) {
            case "A": newName = "Alaric"; break;
            case "B": newName = "Benedict"; break;
            case "C": newName = "Cassian"; break;
            case "D": newName = "Dorian"; break;
            case "E": newName = "Elias"; break;
            case "F": newName = "Felix"; break;
            case "G": newName = "Gideon"; break;
            case "H": newName = "Hadrian"; break;
            case "I": newName = "Iskander"; break;
            case "J": newName = "Julian"; break;
            case "K": newName = "Kaelan"; break;
            case "L": newName = "Lucien"; break;
            case "M": newName = "Matthias"; break;
            case "N": newName = "Nikolai"; break;
            case "O": newName = "Orion"; break;
            case "P": newName = "Percival"; break;
            case "R": newName = "Rowan"; break;
            case "S": newName = "Sebastian"; break;
            case "T": newName = "Theodore"; break;
            case "V": newName = "Valentin"; break;
            case "W": newName = "William"; break;
            default: newName = "Henry"; break;
        }
    }
}



switch (music) {
    case "Rock":
        middleName = "Blackthorne";
        break;

    case "Pop":
        middleName = "Starling";
        break;

    case "Country":
        middleName = "Hawthorne";
        break;

    case "Rap":
        middleName = "Noblehart";
        break;

    case "Classical":
        middleName = "Montclair";
        break;
}
