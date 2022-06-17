//getting the id of the two score boards (home and guest)

let homeScore = document.getElementById("homeScore");
// console.log(homeScore)
let guestScore = document.getElementById("guestScore");
// console.log(guestScore)

//Assigning values to two variables home and guest
let home = 0;
let guest = 0;

//  +1 home button
const addPlus1ToHome = () => {
    home += 1;
    homeScore.textContent = home;
    highlightResultStatus()
}

//+2 home button
const addPlus2ToHome = () => {
    home += 2;
    homeScore.textContent = home;
    highlightResultStatus()
}

//+3 home button
const addPlus3ToHome = () => {
    home += 3;
    homeScore.textContent = home;
    highlightResultStatus()
}

//+1 guest button
const addPlus1ToGuest = () => {
    guest += 1;
    guestScore.textContent = guest;
    highlightResultStatus()
}

//+2 guest button
const addPlus2ToGuest = () => {
    guest += 2;
    guestScore.textContent = guest;
    highlightResultStatus()
}

//+3 guest button
const addPlus3ToGuest = () => {
    guest += 3;
    guestScore.textContent = guest;
    highlightResultStatus()
}


// Creating a function that highlights which team is winning, losing or at draw 

const highlightResultStatus = () => {
    if(home > guest) {
        homeScore.classList.remove("losing", "draw");
        guestScore.classList.remove("winning", "draw");
        homeScore.classList.add("winning");
        guestScore.classList.add("losing");
        
    } else if(home < guest) {
        homeScore.classList.remove("winning", "draw");
        guestScore.classList.remove("losing", "draw");
        homeScore.classList.add("losing");
        guestScore.classList.add("winning");
        
    } else if(home == 0 && guest == 0) {
        homeScore.classList.remove("losing", "draw", "winning");
        guestScore.classList.remove("winning", "draw", "losing");
       
    } else {
        homeScore.classList.remove("losing", "winning");
        guestScore.classList.remove("winning", "losing");
        homeScore.classList.add("draw");
        guestScore.classList.add("draw");
    }
        
    
    
    
}
 
const resetGame = () => {
    home = 0;
    guest = 0;
    homeScore.textContent = home;
    guestScore.textContent = guest;
    homeScore.classList.remove("losing", "winning", "draw");
    guestScore.classList.remove("winning", "losing", "draw");
}