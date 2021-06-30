// variables
const alertBanner = document.getElementById("alert");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const form = document.getElementById("form");
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

///// localStorage //////

const emailCheck = document.getElementById("emailSetting");
const switchCheck = document.getElementById("publicSetting");
const timeZone = document.getElementById("timezone");

if(localStorage.length != 0){
    localStorage.getItem('emailNotificationsOn') === "false"?
        emailCheck.checked = false:
        emailCheck.checked = true;
    
    localStorage.getItem('profilePublic') === "false"?
        switchCheck.checked = false:
        switchCheck.checked = true;
   
   timeZone.value = localStorage.timeZone    
}