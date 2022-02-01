/**
 * this css is totally optional
 */
var cards = document.getElementsByClassName('animation');

for(let i = 0; i < cards.length; i++){
    cards[i].style.animationDelay = (i * 0.3) + 's';
}