const races = ["Elf", "Halfling", "Orc", "Human"];

const raceSelect = document.getElementById("raceSelect");

const classSelect = document.getElementById("classSelect");

raceSelect.addEventListener("change", updateClassDropdown)

function updateClassDropdown() {
    removeAll(classSelect);

    let newClassResult = new Option('Select a Class', '');
    classSelect.add(newClassResult, undefined);

    if (raceSelect.value === "Elf") {
        let elfClass = new Option("Ranger", "Ranger");
        classSelect.add(elfClass, undefined);
    }
    if (raceSelect.value === "Orc") {
        let orcClass = new Option("Warrior", "Warrior");
        classSelect.add(orcClass, undefined);
    }
    if (raceSelect.value === "Halfling") {
        let halflingClass = new Option("Healer", "Healer");
        classSelect.add(halflingClass, undefined);
    }
    if (raceSelect.value === "Human") {
        let humanClass = new Option("Mage", "Mage");
        classSelect.add(humanClass, undefined);

        // classSelect.add(new Option("Mage", "Mage"), undefined);

        // let humanClasses = ["mage", "warrior", "paladin"];

        // for(let classss of humanClasses) {
        //     let option = new Option(classs, classss);
        //     classSelect.add(option, undefined);
        // }
    }
    if (raceSelect.value === "") {
        classSelect.disabled = true;
    }
    else {
        classSelect.disabled = false;
    }
    console.log(raceSelect.value)
}

function removeAll(selectBox) {
    while (selectBox.options.length > 0) {
        selectBox.remove(0);
    }
}
