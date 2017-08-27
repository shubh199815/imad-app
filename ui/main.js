console.log('Loaded!');

//Change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the weirdo logo!!!
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft='100px';
};