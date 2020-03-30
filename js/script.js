'use strict';

/*First Task*/
let lang = 'ru';

/*IF*/
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресеье');
} else if (lang === 'en') {
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else {
    console.log('Нет совпадений');
}


/*SWITCH CASE*/
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресеье');
        break;
        case "en":
            console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
            break;
    default:
        console.log('Нет совпадений');
}

/*MULTIDIMENSIONAL ARRAY*/
lang = prompt("введите ru или en");
let arr = {
    'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);






/*Second Task*/
let namePerson = 'Дженнифер Энистон';

let result = namePerson === 'Артем' ? 'директор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';
console.log(result);

















