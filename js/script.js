'use strict';

/*Lesson 04*/

const foo = function(a) {
    if (typeof a !== 'string') {
        alert('В качестве аргумента передана не строка');
    } else if (a.length > 30) {
        let str = a.slice(0, 29) + '...';
        console.log(str.trim())
    }
};

foo(' Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки         ');










