const clients = [
{
name:"Amit Sharma",
phone:"9876543210",
status:"Active"
},
{
name:"Priya Verma",
phone:"9123456780",
status:"Active"
},
{
name:"Rahul Singh",
phone:"9988776655",
status:"Closed"
}
];

const cases = [
{
title:"Property Dispute",
client:"Amit Sharma",
status:"Ongoing"
},
{
title:"Cheque Bounce",
client:"Rahul Singh",
status:"Closed"
},
{
title:"Divorce Petition",
client:"Priya Verma",
status:"Pending"
}
];

const appointments = [
{
client:"Amit Sharma",
date:"20 Jul 2026",
purpose:"Document Review"
},
{
client:"Priya Verma",
date:"21 Jul 2026",
purpose:"Legal Advice"
}
];

const hearings = [
{
case:"Property Dispute",
date:"25 Jul 2026",
court:"Delhi High Court"
},
{
case:"Divorce Petition",
date:"28 Jul 2026",
court:"Family Court"
}
];

const files = [
{
name:"Sale Deed.pdf",
case:"Property Dispute",
type:"Evidence"
},
{
name:"Marriage Certificate.pdf",
case:"Divorce Petition",
type:"Proof"
}
];

function badge(status){

if(status==="Active")
return `<span class="status green">${status}</span>`;

if(status==="Closed")
return `<span class="status red">${status}</span>`;

return `<span class="status orange">${status}</span>`;

}

function load(){

clientCount.innerText=clients.length;

caseCount.innerText=cases.length;

appointmentCount.innerText=appointments.length;

hearingCount.innerText=hearings.length;

clientTable.innerHTML=clients.map(c=>`

<tr>

<td>${c.name}</td>

<td>${c.phone}</td>

<td>${badge(c.status)}</td>

</tr>

`).join("");

caseTable.innerHTML=cases.map(c=>`

<tr>

<td>${c.title}</td>

<td>${c.client}</td>

<td>${badge(c.status)}</td>

</tr>

`).join("");

appointmentTable.innerHTML=appointments.map(a=>`

<tr>

<td>${a.client}</td>

<td>${a.date}</td>

<td>${a.purpose}</td>

</tr>

`).join("");

hearingTable.innerHTML=hearings.map(h=>`

<tr>

<td>${h.case}</td>

<td>${h.date}</td>

<td>${h.court}</td>

</tr>

`).join("");

fileTable.innerHTML=files.map(f=>`

<tr>

<td>${f.name}</td>

<td>${f.case}</td>

<td>${f.type}</td>

</tr>

`).join("");

}

function show(id){

document.querySelectorAll(".section").forEach(s=>{

s.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

function searchData(){

const value=document
.getElementById("search")
.value
.toLowerCase();

document.querySelectorAll("tbody tr").forEach(row=>{

row.style.display=row.innerText.toLowerCase().includes(value)
?""
:"none";

});

}

load();