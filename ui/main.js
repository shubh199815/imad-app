console.log('Loaded!');

//Change the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = '';

//Move the weirdo logo!!!
var img = document.getElementById('madi');
var marginLeft= 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};