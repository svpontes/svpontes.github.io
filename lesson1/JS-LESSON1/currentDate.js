const daynames=[
    "Sunday",
    "Monday",
    "Tusday",
    "Wednesday",
    "Thuisrday",
    "Friday",
    "Saturday"
    ];

const months = [

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonths()];
const year = d.getFullYear();
const fulldate = dayName + "," + monthName + " " + d.getDate() +", "+ year;

document.getElementById("currentdate").textContent = fulldate;

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

//***************** //
try {

    const options = {

        weekday = "long",
        day: "numeric",
        month: "long",
        year:"numeric"
    };
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-US", options); } catch (e) {alert("Error with code or your browser does not support locale")};
};
