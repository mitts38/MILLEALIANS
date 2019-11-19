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