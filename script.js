// ======================================
// RailGuardPro v3.1 Professional Edition
// ======================================

console.log("RailGuardPro v3.1 Loaded");

// ----------------------------
// Dark Mode
// ----------------------------

let darkMode = false;

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

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        alert("Welcome to RailGuardPro v3.1");

    });

}

// ----------------------------
// Train Search
// ----------------------------

function searchTrain() {

    const trainNo = document.getElementById("trainSearch").value.trim();

    if (trainNo === "") {

        alert("Please Enter Train Number");

        return;

    }

    alert("Searching Train No: " + trainNo);

}// ======================================
// Running Report
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
        actDeparture: document.getElementById("actDeparture").value,
        detention: document.getElementById("detention").value
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

    const report = localStorage.getItem("RailGuard_Report");

    if (!report) {
        alert("No Saved Report Found");
        return;
    }

    const data = JSON.parse(report);

    document.getElementById("trainNo").value = data.trainNo || "";
    document.getElementById("trainName").value = data.trainName || "";
    document.getElementById("date").value = data.date || "";
    document.getElementById("section").value = data.section || "";
    document.getElementById("origin").value = data.origin || "";
    document.getElementById("destination").value = data.destination || "";
    document.getElementById("schArrival").value = data.schArrival || "";
    document.getElementById("actArrival").value = data.actArrival || "";
    document.getElementById("schDeparture").value = data.schDeparture || "";
    document.getElementById("actDeparture").value = data.actDeparture || "";
    document.getElementById("detention").value = data.detention || "";

    alert("Saved Report Loaded");
}

// ======================================
// Delete Report
// ======================================

function clearReport() {

    localStorage.removeItem("RailGuard_Report");

    alert("Saved Report Deleted");
}// ======================================
// Auto Detention Calculator
// ======================================

function calculateDetention() {

    const schArrival = document.getElementById("schArrival").value;
    const actArrival = document.getElementById("actArrival").value;

    if (!schArrival || !actArrival) {
        document.getElementById("detention").value = "";
        return;
    }

    const sch = new Date("2000-01-01T" + schArrival);
    const act = new Date("2000-01-01T" + actArrival);

    let diff = (act - sch) / 60000;

    if (diff < 0) {
        diff = 0;
    }

    document.getElementById("detention").value = diff + " Minutes";
}

// ======================================
// PDF Export
// ======================================

function exportPDF() {

    alert("PDF Export feature will be available in the next update.");

}

// ======================================
// Crew Module
// ======================================

function openCrew() {

    alert("Crew Module Coming Soon");

}

// ======================================
// Defect Report
// ======================================

function openDefect() {

    alert("Defect Report Module Coming Soon");

}

// ======================================
// AI Assistant
// ======================================

function openAI() {

    alert("RailGuard AI Assistant Coming Soon");
// ======================================
// Future WTT Database
// ======================================

const WTTDatabase = [];

// Search train from WTT Database
function searchFromWTT(trainNo) {

    const train = WTTDatabase.find(
        t => t.trainNo === trainNo
    );

    if (train) {

        document.getElementById("trainName").value = train.trainName || "";
        document.getElementById("origin").value = train.origin || "";
        document.getElementById("destination").value = train.destination || "";

        alert("Train Data Loaded");

    } else {

        alert("Train Not Found in WTT Database");

    }
}

// ======================================
// App Startup
// ======================================

window.onload = function () {

    console.log("RailGuardPro v3.1 Started Successfully");

    const detention = document.getElementById("detention");

    if (detention) {
        detention.readOnly = true;
    }

};
}
