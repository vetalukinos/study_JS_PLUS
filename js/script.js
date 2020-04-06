'use strict';

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    toDay = new Date().getDay() - 1;

week.forEach(function(item, i) {
    if (i === toDay) {
        document.write('<b>' + week[i] + '</b></br>');
    } else if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
        document.write('<i>' + week[i] + '</i></br>');
    } else {
        document.write(week[i] + '</br>');
    }
});































