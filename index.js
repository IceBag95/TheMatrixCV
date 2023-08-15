/* 
                        ============================
                            ΡΥΘΜΊΣΕΙΣ ΓΙΑ ΣΩΣΤΉ
                              ΕΜΦΑΝΙΣΗ ΒΙΝΤΕΟ
                        ============================

*/


const videowidth = document.getElementById("video-background");

function resizeVideo() {
    videowidth.style.width = window.innerWidth + 100 + "px";
    videowidth.style.height = window.innerHeight + 100 + "px";
}

// Καλείται την πρώτη φορά για να ρυθμίσει το μέγεθος του βίντεο
resizeVideo();

// Προσθέτει έναν ακροατή για το γεγονός "resize" του παραθύρου
window.addEventListener("resize", resizeVideo);




/* 
                        ==========================
                            ΛΟΓΙΚΗ ΓΙΑ EΙΣΟΔΟ 
                                ΣΤΟ MATRIX
                        ==========================

*/



const pagebody = document.querySelector('body');
const welcomescreen = document.getElementById("Welcome");
const welcomeBtn = document.getElementById("WelcomeButton");
const whiteSrn = document.getElementById("whitescreen");
const detailsBox = document.getElementById("details-Box");
const keimenon = document.getElementById("keimeno");

welcomeBtn.addEventListener('click', async function() {
    whiteSrn.style.display = "flex";
    
    await FadeOut(whiteSrn, 1000, "white").finished;
    
    whiteSrn.style.display = "none";
    
    FadeIn(welcomescreen, 1000, `${welcomescreen.style.backgroundColor}`, 3000);
    
    
    const nextStep = setTimeout(async function(){
        welcomescreen.style.display = "none";
        detailsBox.style.display = "flex";
        keimenon.style.display = "flex";
        console.log(`starting width ${detailsBox.getBoundingClientRect().width}`);
        console.log(`starting height ${detailsBox.getBoundingClientRect().height}`);

        
        await MoveLeft(detailsBox, 350).finished;
        
        detailsBox.style.left = "20px";         
        
        await MoveTop(detailsBox, 300).finished; 
        
        detailsBox.style.top = "34vmin";
        await ChangeDimensions(detailsBox, 60, 70, 200).finished;
        console.log("ending stage");

        console.log(`ending width ${detailsBox.getBoundingClientRect().width}`);
        console.log(`ending height ${detailsBox.getBoundingClientRect().height}`);
        
        
    }, 1500)
    nextStep;
});



/* 
                       --------------------------------
                        §  Συναρτήσεις / Animations  § 
                       --------------------------------

*/


function FadeOut(element, time, color){ 
    return element.animate([ //εκτελείται ασύγχρονα χρειάζεται και το setTimout() για να λειτουργήσει σωστά ή το await
        {backgroundColor: `${color}`, opacity: 1},
        {backgroundColor: `${color}`, opacity: 0}
    ], {
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'both'
    });
}

function ScaleUp(element, time, tranfromOr = 'center', initialScale = "1", endScale = "5"){
    return element.animate([
        {transform: `scale(${initialScale})`, transformOrigin: tranfromOr},
        {transform: `scale(${endScale})`, transformOrigin: tranfromOr}
    ],{
        duration: time,
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    })
}

function ChangeWidth(element, width, time=1000){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {width: `${element.style.width}%`},
        {width: `${width}%`}
    ],{
        duration: time,
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    })
}

function ChangeHeight(element, height, time=1000){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {height: `${element.style.height}%`},
        {height: `${height}%`}
    ],{
        duration: time,
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    })
}


function ChangeDimensions(element, width, height, time=1000){
    const widthAnimation = ChangeWidth(element, width, time);
    const heightAnimation = ChangeHeight(element, height, time);
    Promise.all([widthAnimation.finished, heightAnimation.finished]).then(() => {

    }).catch((error) =>{
        console.error("An error occurred:", error);
    });
}


function FadeIn(element, fadeTime, fadecolor, sclaetime){
    ScaleUp(element, sclaetime);
    FadeOut(element,fadeTime, fadecolor);
    Promise.all([FadeOut.finished, ScaleUp.finished])
        .then(() => {
            // Οι δύο animations ολοκληρώθηκαν
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}


function MoveTop(element, time){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {transform: `translateY(0)`},
        {transform: `translateY(-${rect.top - 20 }px)`}
    ],{
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    });
}

function MoveLeft(element, time){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {transform: `translateX(0)`},
        {transform: `translateX(-${rect.left - 20}px)`}
    ],{
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    });
}

function MoveRight(element, time){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {transform: `translateX(0)`},
        {transform: `translateX(${rect.right - rect.width})`}
    ],{
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    });
}


