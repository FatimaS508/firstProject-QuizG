// Goals:

// 1. Create the data structure for the questions and answers and choices (Array of objects)

// 2. make it so when the user clicks the "Start play" button it should call the start function and shows the first question

// create variables for the states: correct answers, time, user clicked choice
const questions = [{
    question: 'What id the <head> used to?',
    choice1: 'Holds behind-the-scenes info like the page title or links to CSS and JavaScript.',
    choice2: 'Tells the browser this is an HTML5 page.',
    choice3: 'The main container for everything else.',
    choice4: 'Where all the visible stuff goes, like text, images, or links'
},
{
    question: 'What’s the <img> tag for?',
    choice1: 'puts pictures on your web page',
    choice2: 'Tells the browser where to find the image file',
    choice3: 'Gives a description of the image for accessibility (like for people using screen readers) or if the image doesn’t load.',
    choice4: 'for links'
},
{
    question: 'What does the <br> tag do',
    choice1: 'adding a horizantel line',
    choice2: 'add applies bold font weight to entire row',
    choice3: 'adds a line break, moving content to the next line',
    choice4: 'it forces the browser to re-render and clear the CSS cache for the current paragraph'
},
{
    question: 'How do you make an email link?',
    choice1: 'by <email href="gmail.com">',
    choice2: '<a href="gmail.com"> ',
    choice3: '<link target="gmail.com"',
    choice4: '<a mailto="gmail.com"'

},
{
    question: 'How do you add a JavaScript file?',
    choice1: '<link src="app.js"> ',
    choice2: '<script href="app.js"</script>',
    choice3: '<script src="app.js"></script>',
    choice3: '<javaScript file="app.js"'
}
]

function showQuestion(){

}

function start(){

}