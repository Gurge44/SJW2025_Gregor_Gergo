import gyumolcsok from "./data.js"; // ok import doesnt work but the code is good

document.addEventListener("DOMContentLoaded", () => {
    const selectGyumolcs = document.getElementById("gyumolcs");
    const uzenet = document.getElementById("uzenet");
    const szamitGomb = document.getElementById("szamit");
    const visszaallitGomb = document.getElementById("visszaallit");

    gyumolcsok.forEach(gyumolcs => {
        let option = document.createElement("option");
        option.value = gyumolcs.name;
        option.textContent = gyumolcs.name;
        selectGyumolcs.appendChild(option);
    });

    szamitGomb.addEventListener("click", () => {
        let kivalasztott = selectGyumolcs.value;
        
        if (kivalasztott === "") {
            uzenet.textContent = "Kérlek, válassz egy gyümölcsöt!";
            uzenet.style.color = "red";
            return;
        } else {
            uzenet.textContent = "";
        }

        let gyumolcs = gyumolcsok.find(g => g.name === kivalasztott);
        
        document.getElementById("kaloria").textContent = gyumolcs.calory.toFixed(1) + " kcal";
        document.getElementById("feherje").textContent = gyumolcs.protein.toFixed(1) + " g";
        document.getElementById("szenhidrat").textContent = gyumolcs.carbohydrate.toFixed(1) + " g";
        document.getElementById("rost").textContent = gyumolcs.fiber.toFixed(1) + " g";
        document.getElementById("zsir").textContent = gyumolcs.fat.toFixed(1) + " g";
    });

    visszaallitGomb.addEventListener("click", () => {
        selectGyumolcs.value = "";
        uzenet.textContent = "";
        document.getElementById("kaloria").textContent = "";
        document.getElementById("feherje").textContent = "";
        document.getElementById("szenhidrat").textContent = "";
        document.getElementById("rost").textContent = "";
        document.getElementById("zsir").textContent = "";
    });
});
