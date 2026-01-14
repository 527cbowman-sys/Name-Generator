function generateName() {
    const nameInput = document.getElementById("firstName").value;
    const age = document.getElementById("age").value;
    const birthstone = document.getElementById("birthstone").value;
    const music = document.getElementById("music").value;
    const town = document.getElementById("town").value;
    const male = document.getElementById("genderMale").checked;
    const female = document.getElementById("genderFemale").checked;

    getPrefix(male, female, age);
    getFirstName(nameInput, male, female);
    getMiddleName(birthstone);
    getLastName(music);
    getSuffix(town);

    let royalName = `<span class="end"> <b>Your royal name is:</b>${prefix} ${firstName} ${middleName} ${lastName} of ${suffix}</span>`;

    document.getElementById("output").innerHTML = royalName;
    document.getElementById("formArea").style.display = "none";
    document.getElementById("againBtn").style.display = "inline-block";
}

function resetForm() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("formArea").style.display = "block";
    document.getElementById("againBtn").style.display = "none";
    document.getElementById("royalForm").reset();

    prefix = "";
    firstName = "";
    middleName = "";
    lastName = "";
    suffix = "";
}

function getPrefix(male, female, age) {
    if (female && age < 30) prefix = "Princess";
    else if (female && age >= 30) prefix = "Queen";
    else if (male && age < 30) prefix = "Prince";
    else if (male && age >= 30) prefix = "King";
}

function getFirstName(nameInput, male, female) {
    let firstLetter = nameInput.charAt(0).toUpperCase();

    if (female) {
        switch (firstLetter) {
            case "A": firstName = "Aurora"; break;
            case "B": firstName = "Brielle"; break;
            case "C": firstName = "Celestia"; break;
            case "D": firstName = "Delphine"; break;
            case "E": firstName = "Eliana"; break;
            case "F": firstName = "Fiona"; break;
            case "G": firstName = "Genevieve"; break;
            case "H": firstName = "Helena"; break;
            case "I": firstName = "Isabella"; break;
            case "J": firstName = "Juliette"; break;
            case "K": firstName = "Keya"; break;
            case "L": firstName = "Liliana"; break;
            case "M": firstName = "Mirabelle"; break;
            case "N": firstName = "Nicolette"; break;
            case "O": firstName = "Octavia"; break;
            case "P": firstName = "Penelope"; break;
            case "R": firstName = "Rosalie"; break;
            case "S": firstName = "Seraphina"; break;
            case "T": firstName = "Talia"; break;
            case "V": firstName = "Valeria"; break;
            case "W": firstName = "Willow"; break;
            default: firstName = "Elizabeth";
        }
    }

    if (male) {
        switch (firstLetter) {
            case "A": firstName = "Alaric"; break;
            case "B": firstName = "Benedict"; break;
            case "C": firstName = "Cassian"; break;
            case "D": firstName = "Dorian"; break;
            case "E": firstName = "Elias"; break;
            case "F": firstName = "Felix"; break;
            case "G": firstName = "Gideon"; break;
            case "H": firstName = "Hadrian"; break;
            case "I": firstName = "Iskander"; break;
            case "J": firstName = "Julian"; break;
            case "K": firstName = "Kaelan"; break;
            case "L": firstName = "Lucien"; break;
            case "M": firstName = "Matthias"; break;
            case "N": firstName = "Nikolai"; break;
            case "O": firstName = "Orion"; break;
            case "P": firstName = "Percival"; break;
            case "R": firstName = "Rowan"; break;
            case "S": firstName = "Sebastian"; break;
            case "T": firstName = "Theodore"; break;
            case "V": firstName = "Valentin"; break;
            case "W": firstName = "William"; break;
            default: firstName = "Henry";
        }
    }
}

function getMiddleName(birthstone) {
    middleName = birthstone.charAt(0).toUpperCase() + birthstone.slice(1);
}

function getLastName(music) {
    switch (music) {
        case "rock": lastName = "Blackthorne"; break;
        case "pop": lastName = "Starling"; break;
        case "country": lastName = "Hawthorne"; break;
        case "rap": lastName = "Noblehart"; break;
        case "classical": lastName = "Montclair"; break;
        default: lastName = "Silverlake";
    }
}

function getSuffix(town) {
    suffix = town;
}