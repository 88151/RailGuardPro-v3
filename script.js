function generateReport(){

const trainNo=document.getElementById("trainNo").value;
const trainName=document.getElementById("trainName").value;
const date=document.getElementById("date").value;
const section=document.getElementById("section").value;
const origin=document.getElementById("origin").value;
const destination=document.getElementById("destination").value;
const locoNo=document.getElementById("locoNo").value;
const locoType=document.getElementById("locoType").value;
const load=document.getElementById("load").value;
const coaches=document.getElementById("coaches").value;
const departureTime=document.getElementById("departureTime").value;
const arrivalTime=document.getElementById("arrivalTime").value;
const distance=document.getElementById("distance").value;
const detention=document.getElementById("detention").value;
const reason=document.getElementById("reason").value;
const remarks=document.getElementById("remarks").value;

document.getElementById("reportOutput").innerHTML=`
<h3>Running Report</h3>

<p><b>Train No:</b> ${trainNo}</p>
<p><b>Train Name:</b> ${trainName}</p>
<p><b>Date:</b> ${date}</p>
<p><b>Section:</b> ${section}</p>
<p><b>Origin:</b> ${origin}</p>
<p><b>Destination:</b> ${destination}</p>
<p><b>Loco:</b> ${locoNo} (${locoType})</p>
<p><b>Load:</b> ${load} Tonnes</p>
<p><b>Coaches:</b> ${coaches}</p>
<p><b>Departure:</b> ${departureTime}</p>
<p><b>Arrival:</b> ${arrivalTime}</p>
<p><b>Distance:</b> ${distance} KM</p>
<p><b>Detention:</b> ${detention} Minutes</p>
<p><b>Reason:</b> ${reason}</p>
<p><b>Remarks:</b> ${remarks}</p>
`;
}
