let hacker1
let hacker2

//1st iteration

function printName(hacker1, hacker2) {

    console.log(`The driver's name is ${hacker1}`)
    console.log(`The navigator's name is ${hacker2}`)

}

printName('Cris', 'Pedro')

//2nd iteration

function measureNameLength(hacker1, hacker2) {

    if (hacker1.length > hacker2.length) {
        return console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

    } else if (hacker1.length < hacker2.length) {
        return console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
    } else {
        return console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
}

measureNameLength('Cris', 'Pedro')

// 3rd iteration A

function capifyAndSpaceHacker1(hacker1) {

    let hacker1InCaps = hacker1.toUpperCase()
    let hacker1InCapsAndSpaced = ''

    for (let i = 0; i < hacker1.length; i++) {

        if (i < hacker1.length - 1) {
            hacker1InCapsAndSpaced += hacker1InCaps[i] + ' '
        } else hacker1InCapsAndSpaced += hacker1InCaps[i]
    }
    return console.log(hacker1InCapsAndSpaced)
}

capifyAndSpaceHacker1('Cris')

// 3rd iteration B

function reverseNamePrint(hacker2) {
    let hacker2Reversed = ''

    for (let i = hacker2.length - 1; i >= 0; i--) {
        hacker2Reversed += hacker2[i]
    }

    return console.log(hacker2Reversed)
}

reverseNamePrint('Pedro')

// 3rd iteration C

function compareNames(hacker1, hacker2) {

    const comparison = hacker1.localeCompare(hacker2)

    if (comparison === -1) {
        console.log("The driver's name goes first")

    } else if (comparison === 1) {
        console.log("Yo, the navigator goes first, definitely")

    } else if (comparison === 0) {
        console.log("What?! You both have the same name?")

    } else {
        console.log("Invalid name comparison")
    }
}

compareNames("Cris", "Pedro")

// Bonus 1

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo lacinia arcu quis sollicitudin. Suspendisse viverra purus nec odio viverra, ut iaculis lorem ultricies. Etiam bibendum euismod justo vel efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce id turpis sit amet ex ultricies posuere eu sed augue. Vivamus luctus sodales eleifend. Sed non massa ac libero imperdiet venenatis a eget nulla. Phasellus ultrices facilisis nulla, ac ultricies nisi tempus ut. Proin malesuada sit amet nibh ut tempor. Mauris quis vulputate nibh. Morbi accumsan eget justo ut vehicula. Vestibulum aliquam elit vitae leo tristique, eu luctus felis luctus. Integer eu scelerisque quam. Nunc sollicitudin massa eu dui pretium, id lacinia nulla tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse facilisis, ligula a scelerisque cursus, ex odio ornare elit, sit amet semper sem ante non risus. Quisque efficitur pharetra libero et consequat. Praesent venenatis nisi non massa hendrerit dapibus. Donec a dui sed magna interdum varius ut nec mauris. Donec feugiat hendrerit sem, vel rhoncus quam viverra at. Maecenas sapien ante, sagittis quis risus ac, tempor aliquet justo. Duis eu diam commodo, bibendum nisl a, faucibus est. Nunc erat felis, molestie in dui vitae, ultrices vehicula neque. Cras euismod arcu ac odio varius mattis. Aenean sollicitudin mauris quis vulputate accumsan. Sed at varius mi. Nullam consectetur sit amet erat dictum imperdiet. Morbi convallis dolor nisi, non feugiat turpis feugiat nec. Nulla laoreet, ante vel finibus porttitor, eros magna condimentum dolor, in maximus risus eros et urna. Ut eu aliquet neque, ac faucibus mi. Vivamus dapibus accumsan risus id fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam eget augue quis dui malesuada dictum id et purus.'

function wordCounter(text) {

    let words = 0

    for (let i = 0; i < text.length; i++) {

        if (text[i] === ' ' || text[i] !== ' ' && (i === text.length - 1)) {
            words += 1
        }
    }
    return console.log(words)
}

wordCounter(longText)

function etCounter(text) {

    let ets = 0

    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'e' && text[i + 1] === 't' && text[i + 2] === ' ' && text[i - 1] === ' ') {
            ets += 1
        }
    }
    return console.log(ets)
}

etCounter(longText)

// Bonus 2

const phraseToCheck = 'A man, a plan, a canal, Panama!'

function checkPalindrome(string) {

    let reverseString = ''
    let evenedOutString = ''
    let lowerCaseString = string.toLowerCase()

    for (let i = 0; i < lowerCaseString.length; i++) {

        const checkForChars = 'abcdefghijklmnopqrstuvwxyz1234567890'

        if (checkForChars.includes(lowerCaseString[i])) {
            evenedOutString += lowerCaseString[i]
        }
    }

    for (let i = evenedOutString.length - 1; i >= 0; i--) {
        reverseString += evenedOutString[i]
    }

    console.log(evenedOutString, reverseString)

    if (evenedOutString === reverseString) {
        console.log('Is palindrome!')
        return true
    } else {
        console.log("It's not a palindrome!")
        return false
    }
}

checkPalindrome(phraseToCheck)
