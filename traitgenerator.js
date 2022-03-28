const races = ["Elf", "Halfling", "Orc", "Human"];

const raceSelect = document.getElementById("raceSelect");

const classSelect = document.getElementById("classSelect");

const generateAbilitiesButton = document.getElementById("generateAbilities");

raceSelect.addEventListener("change", updateClassDropdown);

classSelect.addEventListener("change", updateGenerateAbilitiesButton);

generateAbilitiesButton.addEventListener("click", displayAbilityResults);


// let newClassResult = new Option('Select a Class', '');
// classSelect.add(newClassResult, undefined);

function updateClassDropdown() {
    if (classSelect.value !== "") {
        generateAbilitiesButton.disabled = true;
    }

    removeAll(classSelect);

    let classesOption;

    if (raceSelect.value === "") {
        classesOption.disabled = true;
    }

    if (raceSelect.value === "Elf") {
        classesOption = ["Select an Option", "Mage", "Druid", "Ranger", "Thief", "Bard"];
    }

    if (raceSelect.value === "Human") {
        classesOption = ["Select an option", "Thief", "Berserker", "Knight", "Bard", "Priest"];
    }

    if (raceSelect.value === "Halfling") {
        classesOption = ["Select an option", "Mage", "Druid", "Ranger", "Priest"];
    }

    if (raceSelect.value === "Orc") {
        classesOption = ["Select an option", "Mage", "Ranger", "Berserker", "Knight", "Priest"];
    }

    for (let choice of classesOption) {
        const node = document.createElement("option");
        const textnode = document.createTextNode(choice);
        node.value = choice;
        node.appendChild(textnode);
        classSelect.appendChild(node);
    }

    if (raceSelect.value === "") {
        classSelect.disabled = true;
    }
    else {
        classSelect.disabled = false;
    }

}

function updateGenerateAbilitiesButton() {
    if (classSelect.value === "") {
        generateAbilitiesButton.disabled = true;
    }
    else {
        generateAbilitiesButton.disabled = false;
    }

    // generateAbilitiesButton.disabled = classSelect.value === ""; these are Booleans :)
}

function displayAbilityResults() {
    let abilityArray;

    if (classSelect.value === "Ranger") {
        abilityArray = ["Athletics", "Nature", "Perception", "Stealth", "Survival"];
    }

    if (classSelect.value === "Knight") {
        abilityArray = ["Athletics", "Healing", "Intimidation", "Religion", "Survival"];
    }

    if (classSelect.value === "Mage") {
        abilityArray = ["Arcana", "Deception", "Healing", "Lore", "Nature", "Perception"];
    }

    if (classSelect.value === "Druid") {
        abilityArray = ["Arcana", "Healing", "Nature", "Religion", "Survival"];
    }

    if (classSelect.value === "Priest") {
        abilityArray = ["Endurace", "Healing", "Lore", "Perception", "Persuasion", "Religion"];
    }

    if (classSelect.value === "Berserker") {
        abilityArray = ["Athletics", "Endurance", "Intimidation", "Nature", "Survival"];
    }

    if (classSelect.value === "Thief") {
        abilityArray = ["Acrobatics", "Deception", "Persuasion", "Stealth", "Survival"];
    }

    if (classSelect.value === "Bard") {
        abilityArray = ["Acrobatics", "Arcana", "Deception", "Lore", "Persuasion"];
    }


    shuffle(abilityArray);
    let selectedAbilities = [abilityArray.pop(), abilityArray.pop(), abilityArray.pop()];
    console.log(selectedAbilities);

    let displayAbilities = document.getElementById("abilities");

    displayAbilities.innerHTML = "";

    for (let item of selectedAbilities) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(item);
        node.appendChild(textnode);
        displayAbilities.appendChild(node);
    }

}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        selectBox.remove(0);
    }
}
