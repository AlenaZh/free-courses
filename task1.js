var inString = '';

for(i=1;i<process.argv.length;i++){
    inString+=process.argv[i];
}

/*console.log(process.argv);

console.log(process.argv.length);

console.log(inString);*/

var clearString = inString.replace(/[^а-яА-ЯёЁa-zA-Z0-9]/g, "");

//console.log(clearString);

var reverseClearString =clearString.split('').reverse().join('');

process.stdout.write(String(clearString.toUpperCase() === reverseClearString.toUpperCase()?'YES':'NO'));