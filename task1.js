var inString = process.argv[1];
var clearString = inString.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
var let =clearString.split('').reverse();
var reverseClearString = let.join('');

process.stdout.write(String(clearString.toUpperCase() === reverseClearString.toUpperCase()?'YES':'NO'));