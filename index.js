const prizes = [
    "a puppy", 
    "a company mug", 
    "a discounted christmas sweater from Walmart", 
    "the CD: Now That's What I Call Music 14", 
    "Kazaam on DVD/BlueRay", 
    "a computer virus",
    "the iMac rainbow wheel",
]

const prizePics = [ // L X w
    'puppy.jpeg', // 400 X 200
    'company_mug.jpg', // 200 X 200
    'sweater.jpeg', // 200 X 200
    'cd.jpg', // 200 X 200
    'kazaam.jpg', // 400 X 200
    'virus.webp', // 200 X 300
    'rainbow_wheel.webp' // 400 X 200
]

const button = document.getElementById("btn")
let newPrize = document.getElementById("empty")
let newPrizePic = document.getElementById("emptyPic")

function generatePrize() {
    const randomlyGenNum = Math.floor((Math.random() * 7) + 0);
    const prize = prizes[randomlyGenNum]
    const picture = prizePics[randomlyGenNum]
    newPrize.innerText = `Congratulations! You won ${prize}!`
    newPrizePic.src = `images/${prizePics[randomlyGenNum]}`
    console.log(randomlyGenNum)
    
 }

button.addEventListener('click', generatePrize)
