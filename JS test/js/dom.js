const h1_element = document.querySelector('h1');
h1_element.textContent = ('Hello World!');

const p_element = document.querySelector('p');
p_element.textContent = ('How are you?');

const first_name = 'Thomas';

function change_image() { //void funksjon: gjør en jobb men returnerer ikke verdi.
    console.log(first_name)
    const img_element = document.querySelector('img');
    console.log(img_element);
    img_element.src='./assets/img.jpg'
    // img_element.width = '240'
    // img_element.style = 'width: 260px'
    // img_element.style.width = '240px'
    img_element.style = 'transform:scale(0.1); transform-origin: top left';
}

change_image();

// arrow function:

const log_name = (plot_name) => {
    console.log(first_name)
}

log_name(first_name)



// kalkulator:

const value1 = prompt('skriv første verdi her');
console.log(value1)
const value2 = prompt('skriv andre verdi her')
console.log(value2)

const action = prompt('operator');

if(action === 'multiply') {
    console.log(value1 * value2)
}

if(action === 'divide') {
    console.log(value1 / value2)
}

