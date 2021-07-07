// variables
const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const form = document.getElementById("form");
const trafficNav = document.querySelector(".traffic-nav");
const popup = document.getElementById("popup");
const bellDot = document.getElementById("bellDot");


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
form.addEventListener('submit', e => {
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

//create alert messages - shown when clicked
let messageShown;

function createMessages(){
    if(popup.childNodes.length==0 && bellDot.style.display !== "none"){
        for(let i=0; i<2; i++){
            let message = document.createElement('div');
        message.className = "popup-message";
        message.innerHTML =
        `
        <p>You have a message from Dawn</p>
        <p class="message-close">X</p>   
        `;
        popup.appendChild(message);
        }
    }
    popup.style.display = "none";
}
createMessages();

notifications.addEventListener('click', e =>{
    const element = e.target;
    //delete dot, when messages show for first time
    bellDot.style.display = "none";
    //only clicking on messages or bell should hide/show messages
    if(element.className!=="message-close"){
        if(!messageShown){
            popup.style.display = "block";
            messageShown=true;
        }
        else{
            popup.style.display = "none";
            messageShown= false;
        }
            
    }
});

popup.addEventListener('click', e =>{
    const element = e.target;
    
    if(element.classList.contains("message-close")){
        const parent = element.parentNode;
        parent.parentNode.removeChild(parent);
    }
});

//change between traffic data on click
trafficNav.addEventListener('click', e =>{
    const element = e.target;  
    const datatype = element.textContent;    
    if(element.className ===  "traffic-nav-link" || element.className ===  "traffic-nav-link active"){
        //change active button to inactive button
        let list = document.querySelectorAll(".traffic-nav-link");
        for(let i=0; i<list.length; i++){
            let activeButton = list[i];

            if(activeButton.className==="traffic-nav-link active"){
                activeButton.className="traffic-nav-link"
            }
        }

        //change clicked button to active
        if(element.className === "traffic-nav-link"){
         element.className = "traffic-nav-link active";
        }
      
        //change graph
            changeTrafficData(datatype);
            updateChart(trafficChart, trafficData);
        }
    }  
);

///// localStorage for user settings, timezone, save, cancel//////

const emailCheck = document.getElementById("emailSetting");
const publicCheck = document.getElementById("publicSetting");
const timeZone = document.getElementById("timezone");
const saveButton = document.getElementById('save');
const cancelButton = document.getElementById('cancel');


if(localStorage.length != 0){ 
    localStorage.getItem('emailOn') === "false"? //get email settings
        emailCheck.checked = false:
        emailCheck.checked = true;

    localStorage.getItem('publicOn') === "false"? //get public settings
        publicCheck.checked = false:
        publicCheck.checked = true;

    timeZone.value = localStorage.timeZone //get timeZone settings
}

//store settings when saveButton clicked
saveButton.addEventListener('click', e => {
    localStorage.setItem( 'emailOn', emailCheck.checked );
    localStorage.setItem( 'publicOn', publicCheck.checked );
    localStorage.setItem( 'timeZone', timeZone.value );
});

//clear settings when cancelButton clicked
cancelButton.addEventListener('click', e => {
    emailCheck.checked = false;
    publicCheck.checked =  false;
    timeZone.value = 'default';
    localStorage.clear();
    location.reload();
});
