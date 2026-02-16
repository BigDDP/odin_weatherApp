import "./styles.css"
import fetchAPIData from "./weather_api.js"

const loader = document.querySelector(".loader");
const container = document.querySelector(".container")
const form = document.querySelector("form");

async function getWeather(location, date1, date2) {
    try {
        const data = await fetchAPIData(`${location}`, `${date1}`, `${date2}`);
        console.log(data);
        updatePage(data);
        loader.classList.remove("yes-loader");
    } catch (err) {
        console.log(err);
        alert(err);
        loader.classList.remove("yes-loader");
    };
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let location = e.target.location.value;

    console.log(location);
    getWeather(location, "2026-02-01", "2026-02-07");
});

function updatePage(data) {
    console.log("Updating Data");
    container.innerHTML= "";

    objectLoop(data, container, 0);
};

function objectLoop(data, parent, indent) {
    for (let key in data) {
        const value = data[key];

        const cell = document.createElement("div");
        cell.classList.add("data_cell")

        const fh = document.createElement("h4");
        fh.textContent = `${key}:`;

        cell.appendChild(fh)
        parent.appendChild(cell)

        if (typeof data[key] !== "object") {

            const fb = document.createElement("p");
            fb.textContent = `${value}`;

            cell.appendChild(fb);

        } else {
            cell.classList.add("indent")
            const newContainer = document.createElement("div")
            newContainer.classList.add("new_item"+indent);

            cell.appendChild(newContainer);

            objectLoop(data[key], newContainer, indent++);
        };
    };
};


function createItemCell([key, value], parent) {      
    
};