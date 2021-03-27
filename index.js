const prizes = [
    "a puppy", 
    "a company mug", 
    "a discounted christmas sweater from Walmart", 
    "the CD: Now That's What I Call Music 14", 
    "Kazaam on DVD/BlueRay", 
    "a computer virus",
    "the iMac rainbow wheel",
]

const newPrizes = [
    {
        name: "a puppy",
        imgUrl: https://www.akcpetinsurance.com/res/akc/blog/2018/new-puppy-essentials/header_puppy_checklist.jpg
    }
    
]

const button = document.getElementById("btn")
let newPrize = document.getElementById("empty")

function generatePrize() {
    const randomlyGenNum = Math.floor((Math.random() * 8) + 0);
    const prize = newPrizes[randomlyGenNum].name
    const prizePic = newPrizes[randomlyGenNum].imgUrl
    newPrize.innerText = `Congratulations! You won ${prize}! ${prizePic}`
 }

button.addEventListener('click', generatePrize)
 
 
function randomNumber() {
    let randomlyGenNum = Math.floor((Math.random() * 5) + 1);
    console.log(randomlyGenNum)
    alert('I was clicked!')
}
