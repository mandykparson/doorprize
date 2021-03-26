const button = index.html.getElementById("btn")

function itWorks() {
    alert('I work!')
}

button.addEventListener('click', itWorks)
//const input = document.getElementById('input');

//function randomNumber() {
    //let randomlyGenNum = Math.floor((Math.random() * 5) + 1);
    //console.log(randomlyGenNum)
    //alert(`Your number is ${randomlyGenNum}`)
//}

//input.addEventListener('click', randomNumber); 

 // the number generated when a use clicks on the Take a Number button
 const eneteredNumber = "" // the number inputed (may not be takeANumber) by user
 const prizes = [
     "a puppy", 
     "a company mug", 
     "a discounted christmas sweater from Walmart", 
     "the CD: Now That's What I Call Music 14", 
     "Kazaam on DVD/BlueRay", 
     "a computer virus",
     "the iMac rainbow wheel",
 
 ]
 
 function selectPrize(){
     console.log(`Congratulations! You won ${prizes[takeaNumber]}!`)
 }
 
 
 function randomNumber() {
     let randomlyGenNum = Math.floor((Math.random() * 5) + 1);
     console.log(randomlyGenNum)
     alert('I was clicked!')
 }