var MonthArray = new Map([
    ['января', 0],
    ['февраля',1],
    ['марта', 2],
    ['апреля',3],
    ['мая', 4],
    ['июня', 5],
    ['июля',6],
    ['августа',7],
    ['сентября',8],
    ['октября',9],
    ['ноября',10],
    ['декабря',11]
]);

var day = process.argv[2];
var month = process.argv[3];
var year = process.argv[4];

var inDate = new Date(year,MonthArray.get(month),day);
var newYearDate =new Date(year,11,31);

var msInDate = Date.parse(inDate);
var msNewYearDate = Date.parse(newYearDate);

var Result = (msNewYearDate-msInDate)/1000/60/60/24;

console.log(Result);