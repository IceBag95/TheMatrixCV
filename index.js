/* 
                        ============================
                            ΡΥΘΜΊΣΕΙΣ ΓΙΑ ΣΩΣΤΉ
                              ΕΜΦΑΝΙΣΗ ΒΙΝΤΕΟ
                        ============================

*/


const videowidth = document.getElementById("video-background");

function resizeVideo() {
    videowidth.style.width = window.innerWidth + "px";
    videowidth.style.height = window.innerHeight + "px";
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
const userInfo = document.getElementById("Info-Box");
const greenCursor = document.getElementById("cursor");
const screenText = document.getElementById("specifics");
const myspan= document.querySelector('.myspan');
const buttonsSection = document.getElementById("buttonSection");
const buttons = document.querySelectorAll('.buttons');
const myImage = document.getElementById("eikona");
const myInfo = document.getElementById("Infolist");
const listItems = userInfo.querySelectorAll('p');
const exitingApp = document.getElementById("exitingStage");
const loadingBar = document.getElementById("loadingBar");
const SignOutMessage  = document.getElementById("SignOut");
const thankyou = document.getElementById("Thanks");
let counttime;

welcomeBtn.addEventListener('click', async function() {
    whiteSrn.style.display = "flex";
    
    await FadeOut(whiteSrn, 1000, "white").finished;
    
    whiteSrn.style.display = "none";
    
    FadeIn(welcomescreen, 1000, `${welcomescreen.style.backgroundColor}`, 3000);
    
    
    const firstBox = setTimeout(async function(){
        welcomescreen.style.display = "none";
        detailsBox.style.display = "inline-block";
        console.log(`starting width ${detailsBox.getBoundingClientRect().width}`);
        console.log(`starting height ${detailsBox.getBoundingClientRect().height}`);
        detailsBox.style.top = "320px";
        
        
        setTimeout(async function(){
            await MoveLeft(detailsBox, 300).finished;
            detailsBox.style.left = "20px";         
        }, 300);
        
        setTimeout(async function(){
            await MoveTop(detailsBox, 300).finished; 
        }, 600);
        
        setTimeout(async function(){
            ChangeDimensions(detailsBox, 60, 80, 200).finished;
            console.log("ending stage");
            console.log("cursor is on");
            console.log(`ending width ${detailsBox.getBoundingClientRect().width}`);
            console.log(`ending height ${detailsBox.getBoundingClientRect().height}`);        
        }, 800);
        
        
        setTimeout(async function(){
            let newString = screenText.innerHTML;
            screenText.innerHTML = "";
            screenText.style.display = "inline";
            keimenon.style.display = "flex";
            greenCursor.style.display = "inline-block"; 
            setTimeout(async function(){
                greenCursor.style.display = "none"; 
                console.log("cursor is gone");
                myspan.style.display = "inline-block";
                animateText(screenText, newString);
                counttime = newString.length * 20;
                await RevealButtons(buttons, counttime);
            },1100)
        }, 1000);
        
    }, 1500)

    firstBox;

    const secondBox = setTimeout(async function(){
        userInfo.style.display = "flex";
        console.log(`starting width ${userInfo.getBoundingClientRect().width}`);
        console.log(`starting height ${userInfo.getBoundingClientRect().height}`);
        userInfo.style.top = "320px";
        
        setTimeout(async function(){
            await MoveRight(userInfo, 200).finished;
            userInfo.style.right = "20px";
        },200);
        
        setTimeout(async function(){
            await MoveTop(userInfo, 300).finished; 
            
        },500);

        setTimeout(async function(){
            await ChangeDimensions(userInfo, 35, 80, 200).finished;
            console.log("ending stage");
            console.log(`ending width ${userInfo.getBoundingClientRect().width}`);
            console.log(`ending height ${userInfo.getBoundingClientRect().height}`);
        },800);

        setTimeout(async function(){
            myImage.style.display = "flex";
            myInfo.style.display = "flex";
        }, 1000);

    }, 1500);

    secondBox;
});






/* 
               
                                ============================
                                    ΛΟΓΙΚΗ ΚΑΙ ANIMATIONS
                                           ΓΙΑ TEXT
                                ============================

*/


/*
const ekpaideusi = ["Αριστούχος Απόφοιτος Λυκείου με βαθμό απολυτηρίου 18.1   (2013)", 
                    "Απόφοιτος Τμήματος Μαθηματικών Αθήνας   (2020)", 
                    " Δευτεροετής Φοιτητής Μεταπτυχιακού Προγράμματος Πληροφορικής του ΕΑΠ με τίτλο «Εξειδίκευση στα πληροφοριακά συστήματα»   (2022 - )"];
*/

const ekpaideusi =  "\n§ ΕΚΠΑΙΔΕΥΣΗ §\n\n\nΑριστούχος Απόφοιτος Λυκείου με βαθμό απολυτηρίου 18.1   (2013)\n\nΑπόφοιτος Τμήματος Μαθηματικών Αθήνας   (2020)\n\nΔευτεροετής Φοιτητής Μεταπτυχιακού Προγράμματος Πληροφορικής του ΕΑΠ με τίτλο «Εξειδίκευση στα πληροφοριακά συστήματα»   (2022 - )\n\n\n\n§ ΞΕΝΕΣ ΓΛΩΣΣΕΣ §\n\n\nΑγγλικά   (First Certificate)\n\nΓερμανικά   (Πτυχίο Β1)\n";

const empeiria = "\n§ ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ §\n\n\nΚαθηγητής Μαθηματικών στο φροντιστήριο «Ρόμβος»   (2014 - 2015)\n\nΚαθηγητής Μαθηματικών και Πληροφορικής Γυμνασίου, Γενικού Λυκείου και ΕΠΑΛ στον όμιλο «Πουκαμισάς»   (2021 - 2023)\n\nΚαθηγητής Μαθηματικών και Πληροφορικής Γυμνασίου, Γενικού Λυκείου και ΕΠΑΛ στο φροντιστήριο «Βολίδης»   (2023 - )\n\nΚαθηγητής Πληροφορικής Γενικού Λυκείου και ΕΠΑΛ στο φροντιστήριο «Μαργαρώνης»   (2023 - )\n\nΠαράδοση ιδιαιτέρων μαθημάτων Mαθηματικών και Πληροφορικής σε μαθητές Γυμνασίου και Λυκείου (2014 - )\n";

const drastiriotites = "\n§ ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ – ΕΘΕΛΟΝΤΙΣΜΟΣ §\n\n\nΚαθηγητής Μαθηματικών στο «Κοινωνικό Φροντιστήριο Δήμου Δάφνης»   (2017 - 2019)\n\nΟμαδάρχης στην κατασκήνωση «Summer Fun»   (2015)\n";

const prosonta = "\n§ ΔΕΞΙΟΤΗΤΕΣ - ΠΡΟΣΟΝΤΑ §\n\n\nΠροθυμία, γρήγορη προσαρμογή και ευελιξία στις εκάστοτε εργασιακές απαιτήσεις με μεγάλη απόδοση και αποτελεσματικότητα\n\nΕυγένεια και μεγάλη ευχέρεια στην επικοινωνία\n";

const quitingApp = "\n § ΕΞΟΔΟΣ § \n\n\nΜεταφέρεστε εκτός Matrix CV..."


buttons[1].addEventListener('click', async () => {
    let newString = ekpaideusi;
    screenText.innerHTML = "";
    greenCursor.style.display = "inline-block";
    setTimeout(async function(){
        greenCursor.style.display = "none"; 
        console.log("cursor is gone");
        myspan.style.display = "inline-block";
        animateText(screenText, newString, 10);
    },1100)
})


buttons[2].addEventListener('click', async () => {
    let newString = empeiria;
    screenText.innerHTML = "";
    greenCursor.style.display = "inline-block";
    setTimeout(async function(){
        greenCursor.style.display = "none"; 
        console.log("cursor is gone");
        myspan.style.display = "inline-block";
        animateText(screenText, newString, 10);
    },1100)
})

buttons[3].addEventListener('click', async () => {
    let newString = drastiriotites;
    screenText.innerHTML = "";
    greenCursor.style.display = "inline-block";
    setTimeout(async function(){
        greenCursor.style.display = "none"; 
        console.log("cursor is gone");
        myspan.style.display = "inline-block";
        animateText(screenText, newString, 10);
    },1100)
})

buttons[4].addEventListener('click', async () => {
    let newString = prosonta;
    screenText.innerHTML = "";
    greenCursor.style.display = "inline-block";
    setTimeout(async function(){
        greenCursor.style.display = "none"; 
        console.log("cursor is gone");
        myspan.style.display = "inline-block";
        animateText(screenText, newString, 10);
    },1100)
})

buttons[5].addEventListener('click', async () => {
    let newString = quitingApp;
    screenText.innerHTML = "";
    greenCursor.style.display = "inline-block";
    setTimeout(async function(){
        greenCursor.style.display = "none"; 
        console.log("cursor is gone");
        myspan.style.display = "inline-block";
        counttime = newString.length * 10 + 1000;
        animateText(screenText, newString, 10);
        setTimeout(async function(){
            detailsBox.style.display = "none";
            userInfo.style.display = "none";
            buttonsSection.style.display = "none";
            exitingApp.style.display = "flex";
            SignOutMessage.innerHTML = SignOutMessage.innerHTML.slice(0, -3);
            animateTextWithoutCursor("...", 500, SignOutMessage.innerHTML);
            await LoadBar(loadingBar).finished;
            setTimeout(async function(){
                thankyou.style.color = "white";
            }, 2000);
        }, counttime);
    },1100)
})



/* 

ΞΕΝΕΣ ΓΛΩΣΣΕΣ\n\nΑγγλικά   (First Certificate)\nΓερμανικά   (Πτυχίο Β1)



*/




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


async function ChangeDimensions(element, width, height, time=1000){
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

async function Reveal(element, time, delaytime){
    return element.animate([
        {opacity: 0},
        {opacity: 1}
    ],{
        duration: time,
        delay: delaytime,
        iterations: 1,
        fill: 'forwards'
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
//userInfo.style.right = "20px"         

function MoveRight(element, time){
    const rect = element.getBoundingClientRect();
    return element.animate([
        {transform: `translateX(${0}px)`},
        {transform: `translateX(${rect.right - 300}px)`}
    ],{
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    });
}


function animateText(element, text, delayBetweenLetters = 20, initialText = "") {
    element.innerHTML = initialText // Καθαρίστε το κείμενο
    myspan.innerHTML = " ";
    element.appendChild(myspan);
    let index = 0;


    function addNextChar() {
        if (index < text.length) {
            element.removeChild(myspan);
            if (text[index] === '\n') {
                element.innerHTML += '<br>'; // Προσθέστε <br> για αλλαγή γραμμής
            } else {
                element.innerHTML += text[index] ;
            }
            index++;
            setTimeout(addNextChar, delayBetweenLetters); // Καλέστε τη συνάρτηση ξανά μετά από το χρονικό διάστημα
        }
        element.appendChild(myspan);
    }

    addNextChar(); // Εκκίνηση του animation
}



function animateTextWithoutCursor(text, delayBetweenLetters = 20, initialText = "") {
    SignOutMessage.innerHTML = initialText // Καθαρίστε το κείμενο
    let index = 0;


    function addNextChar() {
        if (index < text.length) {
            if (text[index] === '\n') {
                SignOutMessage.innerHTML += '<br>'; // Προσθέστε <br> για αλλαγή γραμμής
            } else {
                SignOutMessage.innerHTML += text[index] ;
            }
            index++;
            setTimeout(addNextChar, delayBetweenLetters); // Καλέστε τη συνάρτηση ξανά μετά από το χρονικό διάστημα
        }
    }

    addNextChar(); // Εκκίνηση του animation
}


async function RevealButtons(buttons, startingtime){
    let time = startingtime;
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.display = "flex";
        await Reveal(buttons[i], 200, time).finished;
        time += 200;
    }

}

async function LoadBar(element, time=1500){
    return element.animate([
        {width: "0%"},
        {width: "100%"}
    ],{
        duration: time,
        easing: "ease-in-out",
        delay: 0,
        iterations: 1,
        fill: 'forwards'
    })
}



