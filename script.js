// ======================================
// RailGuardPro v3
// Professional Railway Smart Assistant
// ======================================

let darkMode = false;

// ----------------------------
// Dark Mode
// ----------------------------
function toggleTheme() {

    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

// ----------------------------
// Login
// ----------------------------
document.getElementById("loginBtn").addEventListener("click", function () {

    alert("Login Module Coming Soon");

});

// ----------------------------
// AI Assistant
// ----------------------------
function openAI() {

    alert("RailGuard AI Assistant Coming Soon");

}

// ----------------------------
// Crew Module
// ----------------------------
function openCrew() {

    alert("Crew Module");

}

// ----------------------------
// Defect Module
// ----------------------------
function openDefect() {

    alert("Defect Report Module");

}

// ----------------------------
// WTT Upload
// ----------------------------
function uploadWTT() {

    const file = document.getElementById("wttPdf").files[0];

    if (!file) {

        alert("Please Select WTT PDF");

        return;

    }

    alert(file.name + " Uploaded Successfully");

}// ======================================
// Train Search
// ======================================

function searchTrain() {

    let trainNo = document.getElementById("trainSearch").value.trim();

    if (trainNo === "") {

        alert("Please Enter Train Number");

        return;

    }

    alert("Searching Train : " + trainNo);

}

// ======================================
// Generate Running Report
// ======================================

function generateReport() {

    const report = {

        trainNo: document.getElementById("trainNo").value,

        trainName: document.getElementById("trainName").value,

        date: document.getElementById("date").value,

        section: document.getElementById("section").value,

        origin: document.getElementById("origin").value,

        destination: document.getElementById("destination").value,

        schArrival: document.getElementById("schArrival").value,

        actArrival: document.getElementById("actArrival").value,

        schDeparture: document.getElementById("schDeparture").value,

        actDeparture: document.getElementById("actDeparture").value

    };

    localStorage.setItem(
        "RailGuard_Report",
        JSON.stringify(report)
    );

    alert("Running Report Saved Successfully");

}

// ======================================
// View Saved Report
// ======================================

function viewSavedReport() {

    let report = localStorage.getItem("RailGuard_Report");

    if (!report) {

        alert("No Saved Report");

        return;

    }

    console.log(JSON.parse(report));

    alert("Saved Report Loaded");

}

// ======================================
// Clear Report
// ======================================

function clearReport() {

    localStorage.removeItem("RailGuard_Report");

    alert("Report Deleted");

}// ======================================
// PDF Export (Framework)
// ======================================

function exportPDF() {

    alert("PDF Export Feature will be available in next update.");

}

// ======================================
// Language Change
// ======================================

const language = document.getElementById("language");

if (language) {

    language.addEventListener("change", function () {

        if (this.value === "hi") {

            alert("हिन्दी भाषा चुनी गई");

        } else {

            alert("English Language Selected");

        }

    });

}

// ======================================
// Auto Fill Train Details (Future WTT)
// ======================================

function autoFillTrain(trainData) {

    document.getElementById("trainName").value =
        trainData.trainName || "";

    document.getElementById("origin").value =
        trainData.origin || "";

    document.getElementById("destination").value =
        trainData.destination || "";

    document.getElementById("schArrival").value =
        trainData.arrival || "";

    document.getElementById("schDeparture").value =
        trainData.departure || "";

}

// ======================================
// WTT Database (Future)
// ======================================

let WTTDatabase = [];

// ======================================
// Future AI Search
// ======================================

function searchFromWTT(trainNo) {

    let train = WTTDatabase.find(
        t => t.trainNo === trainNo
    );

    if (train) {

        autoFillTrain(train);

        alert("Train Data Loaded");

    } else {

        alert("Train Not Found");

    }

}

// ======================================
// App Loaded
// ======================================

window.onload = function () {

    console.log("RailGuardPro v3 Loaded Successfully");

};// ======================================
// Auto Detention Calculator
// ======================================

function calculateDetention() {

    const schArrival = document.getElementById("schArrival").value;
    const actArrival = document.getElementById("actArrival").value;

    if (!schArrival || !actArrival) {
        return;
    }

    const sch = new Date("2000-01-01T" + schArrival);
    const act = new Date("2000-01-01T" + actArrival);

    let diff = (act - sch) / 60000;

    if (diff < 0) {
        diff = 0;
    }

    const detention = document.getElementById("detention");

    if (detention) {
        detention.value = diff + " Minutes";
    }
}
