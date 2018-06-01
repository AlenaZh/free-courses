var msSumm = parseInt(process.argv[1])+parseInt(process.argv[2]);

var sec = msSumm%60;
var minute =(msSumm-sec)%3600/60;
var hour = (msSumm-minute*60-sec)/3600;

var secArray = ['секунда','секунды','секунд'];
var minuteArray = ['минута','минуты','минут'];
var hourArray = ['час','часа','часов'];

function format(param,paramArray){
    if(((param-param%10)/10)==1){
        return(paramArray[2]);
    }
    else{
        switch(param%10){
            case 1:
                return(paramArray[0]);
            break;
            case 2:
            case 3:
            case 4:
                return(paramArray[1]);
            break;
            default:
                return(paramArray[2]);
        }
    }
}

function outResult(param,paramArray){
    if(param==0){
        return("")
    }
    else{
        return(String(param+" "+format(param,paramArray)))
    }
}
process.stdout.write(String(outResult(hour,hourArray)+" "+outResult(minute,minuteArray)+" "+outResult(sec,secArray)).trim());
