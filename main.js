const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"
const sentence = `Hi.My name is${name}, and I'm ${age} years old.
They say that makes me a ${generationStereotype}. In${timeSpan} years 
I'll be ${age+ timeSpan}! I I guess that means I'll be a milleni-old then. Ha ha!`
console.log(sentence)


//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

const myfavoriteFoods = (array) => {
    let newArray = []
    for(let index = 0; index < array.length; index++) {
        const elements = array[index];
    
        if(elements.startsWith("a") || elements.startsWith ("t")) {
            newArray.push(elements)
        }
    }
    return newArray
}
 console.log(myfavoriteFoods(foodArray));



 // loop though the numbers in the 'listOfNumbers' array (using a for.. of loop)
// write a conditional statement that checks whether the number is even or odd
// if it is even print "2 is even" (plug in the current #)
// if it is odd print "3 is even" (plug in the current #)
let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10]
for (const singleNum of listOfNumbers) {
    if(singleNum % 2 === 0) {
        console.log(`${singleNum}is even`)
    } else
    { console.log(`${singleNum}is odd`)
    
}
    
//Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"
const eyeColor = "green"
const hairColor = "purple"
const height = "2ft"
if (eyeColor ==="blue" && hairColor ==="red" && height ==="6ft") {
    console.log(`${hairColor} hair, ${eyeColor} eyes, and ${height} tall`)
} else {
    console.log("not a match")
}
}
