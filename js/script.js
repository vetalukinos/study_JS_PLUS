'use strict';


let date = new Date(),
    weekday = new Array(7),
    month = new Array(12),
    decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

weekday[0]="Воскресенье";
weekday[1]="Понедельник";
weekday[2]="Вторник";
weekday[3]="Среда";
weekday[4]="Четверг";
weekday[5]="Пятница";
weekday[6]="Суббота";
month[0]="января";
month[1]="февраля";
month[2]="марта";
month[3]="апреля";
month[4]="мая";
month[5]="июня";
month[6]="июля";
month[7]="августа";
month[8]="сентября";
month[9]="октября";
month[10]="ноября";
month[11]="декабря";

function decOfNum(number, titles) {
    if(!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];
}

console.log(`Сегодня ${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getDay() + 1]} ${date.getFullYear()} года, ${date.getHours()} ${decOfNum(date.getHours(), ['час', 'часа', 'часов'])} ${date.getMinutes()} ${decOfNum(date.getMinutes(), ['минута', 'минуты', 'минут'])} ${date.getSeconds()} ${decOfNum(date.getSeconds(), ['секунда', 'секунды', 'секунд'])}`);

function getZero(num){
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}

console.log(getZero(date.toLocaleDateString()) + '-' + getZero(date.toLocaleTimeString()));


setInterval(function() {
    console.log(new Date());
}, 1000);



































