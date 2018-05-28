var inString = process.argv[2];
var clearString = inString.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
var let =clearString.split('').reverse();
var reverseClearString = let.join('');
process.stdout.write(String(clearString.toUpperCase() === reverseClearString.toUpperCase()));