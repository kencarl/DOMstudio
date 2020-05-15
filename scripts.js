// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    let takeOffButton = document.getElementById('takeoff');
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let up=document.querySelector("body > div:nth-child(2) > div:nth-child(3) > button:nth-child(1)");
    let down = document.querySelector("body > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)");
    let right = document.querySelector("body > div:nth-child(2) > div:nth-child(3) > button:nth-child(3)");
    let left = document.querySelector("body > div:nth-child(2) > div:nth-child(3) > button:nth-child(4)");
    let rocket = document.querySelector("#shuttleBackground img");
    


    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    takeOffButton.addEventListener("click", function(){
       let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML="Shuttle in flight";
            shuttleBackground.style.backgroundColor="blue";
            shuttleHeight.innerHTML=10000;
        }
    });
    landButton.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        shuttleBackground.style.backgroundColor="green";
        shuttleHeight.innerHTML=0;
        flightStatus.innerHTML="The shuttle has landed."
        rocket.style.transform = "translateY(0px)";
        rocket.style.transform = "translateX(0px)";
    });

    abortButton.addEventListener("click",function(){
        let abort = window.confirm("Confirm that you want to abort the mission.");
        if (abort) {
            flightStatus.innerHTML="Mission Aborted";
            shuttleBackground.style.backgroundColor="green";
            shuttleHeight.innerHTML=0;
            rocket.style.transform = "translateY(0px)";
            rocket.style.transform = "translateX(0px)";
        }

    });
    up.addEventListener("click", function(){
        rocket.style.transform+="translateY(-10px)";
        //height = height + 10000;
        shuttleHeight.innerHTML= Number(shuttleHeight.innerHTML) + 10000;
    });
    down.addEventListener("click", function(){
        rocket.style.transform+="translateY(+10px)";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
    });
    right.addEventListener("click", function() {
        rocket.style.transform+="translateX(+10px)";
    })
    left.addEventListener("click", function(){
        rocket.style.transform+="translateX(-10px)";
    })
});