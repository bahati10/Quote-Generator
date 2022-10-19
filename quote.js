let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes =  [{
    quote: `"Don't gain the world and lose your soul
             wisdom is better than silver or gold."`,
    person: `Bob Marley`
}, {
    quote: `“I want to be loved while I'm here, 
             and the only way to get love is to give love.”`,
    person: `Snoop Dog`
}, {
    quote: `"Good things come in good time."`,

    person: `Wiz Khalifa`
}, {
    quote: `"Start with the basics and build from there. 
             You can't master something by 
             overlooking the fundamentals."`,
    person: `elon Musk`
}, {
    quote: `"Spread love everywhere you go. Let no one ever
             come to you without leaving happier."` ,
    person: `Mother Teresa`
}, {
    quote: `"Life is what happens when you're busy 
             making other plans. "`,
    person: `John Lennon`
}, {
    quote: `"Always remember that you are absolutely unique. 
             Just like everyone else."`,
    person: `Margaret Mead`
}, {
    quote: `“Legends are not born ~they are 
             created.”`,
    person: `Ricky Pierce`
}, {
    quote: `"Hard work outweighs talent — every time."`,
    person: `Kobe Bryant`
}, ];
btn.addEventListener('click', function() {

    let random =  Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})