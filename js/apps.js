// variables
const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const trafficNav = document.getElementById("traffic-nav");

// alert banner - html
alertBanner.innerHTML =
`<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`
// alert banner - click 
alertBanner.addEventListener('click', e => {
    const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none"
        }  
}); 

//messaging section
send.addEventListener('submit', e => {
    // check if user and message fields are empty
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
        e.preventDefault();
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
        e.preventDefault();
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
        e.preventDefault();
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

//traffic
trafficNav.addEventListener('click', e => {
    const element = e.target;  
    const datatype = element.textContent;   

    if(element.className ===  "traffic-nav-link" || element.className ===  "traffic-nav-link active"){
        //change active button to inactive
        let lis = document.querySelectorAll(".traffic-nav-link");
        for(let i=0; i<lis.length; i++){
            let activeButton = lis[i];
            if(activeButton.className==="traffic-nav-link active"){
                activeButton.className="traffic-nav-link"
            }
        }
        //change active button to active
        if(element.className==="traffic-nav-link"){
            element.className = "traffic-nav-link active";
        }
        
        //change graph
            updateTrafficData(datatype);
            updateChart(trafficChart, trafficData);
        }
    }  
);


///// localStorage //////
