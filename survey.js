//
// LHL - survey.js
// https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/392?journey_step=32&workbook=7
// 2022-07-23 
//



// GLOBAL console.log color and style variables
// 
const conColorCyan = "\x1b[36m", conColorRed = '\x1b[91m', conColorGreen = '\x1b[92m', 
      conColorGrey = '\x1b[90m', conColorReset = "\x1b[0m";
const conColorBright = "\x1b[1m", conColorDim = "\x1b[2m", conColorItalics = "\x1b[3m", conColorReverse = "\x1b[7m";
const consoleLine = '-'.repeat(process.stdout.columns);
const consoleHalfLine = '-'.repeat((process.stdout.columns)/2);

// header & borderColor is color in our library
function drawHeaderBox(headerText,headerColor,borderColor) {
  return (`${borderColor}${'-'.repeat(headerText.length+4)}${conColorReset}${borderColor}\n| ${headerColor}${headerText} ${borderColor}|${conColorReset}\n${borderColor}${'-'.repeat(headerText.length+4)}${conColorReset}`);
}

// lineColor is variable in our library // lineLength as % of console width // borderColor as variable in library
function drawDivideLine(lineColor,lineLength,lineMessage) { 
  if(lineMessage) {
    lineMessage = '--[ ' + lineMessage + ' ]';
  } else { lineMessage = '';}
  const consoleLine = '-'.repeat((process.stdout.columns)*((lineLength/100))-((lineMessage.length)));
  return (`${lineColor}${lineMessage}${consoleLine}${conColorReset}`);
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/


rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});