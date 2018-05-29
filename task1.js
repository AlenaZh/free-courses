var inString = process.argv[1];
var clearString = inString.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
var lett =clearString.split('').reverse();
var reverseClearString = lett.join('');

process.stdout.write(String(clearString.toUpperCase() === reverseClearString.toUpperCase()?'YES':'NO'));