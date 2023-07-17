// USING EXTERNAL MODULES WITH ES MODULES

//importing the external module
import chalk from 'chalk';

//importing the external module
import figlet from 'figlet'

//importing the greet module that is in the current folder
import greet from './greet.js'


//using styling provided by 'chalk' as an external module
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

//using styling provided by 'figlet' as an external module

figlet(greet('Xola'), function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });

