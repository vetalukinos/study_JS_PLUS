'use strict';

let colorText = document.getElementById('color'),
    buttonChange = document.getElementById('change');


buttonChange.addEventListener('click', function() {
        let r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256)),
            colorChange = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    document.body.style.backgroundColor = colorChange;
    colorText.textContent = colorChange;
});



































