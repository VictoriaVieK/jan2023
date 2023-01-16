console.log('2' + 4);
console.log(`${2 + 4}`);


var firstname = 'Victoria';
var lastname = 'Kolstad';


const newname = 'Jonas';

let age = 24;
age = 25

// const = konstant, ikke endre seg. let = kan man endre

console.log(firstname + ' er flink til å kode')
console.log(firstname + ' er litt trøtt i dag')
console.log(lastname + ' er etternavnet mitt')
console.log(age + ' er alderen min')


console.clear()


// Funksjoner

function add(a, b) {
    return a + b;
}

console.log(add(4, 7))
console.log(add(60, 80))
// Må ha console.log for å se resultatet i console. 



function multiply(a, b, c) {
    return a * b * c;
}

console.log(multiply(5, 5, 5))

console.clear();

function divide(a, b, c, d) {
    return a / b / c / d;
}

console.log(divide(1000, 2, 2, 2))



function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(add(1, 1, 1, 1, 1));


// Finner gjennomsnitt alder av gruppe med fire mennesker

function mean_age(a, b, c, d) {
    return (a + b + c + d) / 4;
};

console.log(mean_age(4, 5, 6, 7))

function my_name(a) {
    console.log(a);
};

my_name('Victoria')





let keyboard = null;

// integer = store nummer
// number
// false = boolean
const is_logged_in = false;
// 'ord' = string

// 2 oppghød i 4: potens:
console.log(2**4)

console.log(Math.PI)

console.log(Math.random()*100)

console.log(new Date())

console.log(20>10);

console.clear();


// Condition

// if (20 > 30) {
    // alert('Venstre tall er størst');
// } else {
    // alert('Høyre tall er størst');
// }



// Funksjon som sjekker om en butikk er åpen eller stengt akkurat nå:


console.clear();


function check_if_open() {

// 1. åpningstid
const open = 8;

// 2. stengetid
const close = 18;

// 3. dato og tid nå
const today = new Date();
console.log(today);

// 4. bare tid nå
const time_now = today.getHours();
console.log(time_now);



    if (time_now > open && time_now < close) {
        alert('Butikken er åpen');
    } else {
        alert('Butikken er stengt')
    }

}

// check_if_open(;


// bytte mellom darkmode og lightmode

console.clear()

function switch_mode(status) {
    if(status === 'light'){
        alert('du valgte ligtmode');
    } else {
        alert('Du er i darkmode')
    }
}

// switch_mode('light');
// switch_mode('dark');



// kalkuler omkrets av en sirkel fra diameter:

function calculate_circle(diameter) {
    const pi = Math.PI;
    console.log(Math.ceil(diameter * pi));
}

calculate_circle(5)



// Kalkuler areal av rektangel fra lengde og bredde

function calculate_rectangle(lengde, bredde) {
    console.log(Math.ceil(lengde * bredde));
}

// calculate_rectangle(2, 4)



// Hvor mange pizzaer trenger vi:

function how_many_pizzas(stykker_J, stykker_K, stykker_V) {
    const en_pizza = 8;
    const to_pizzaer = 16;
    antall_stykker = stykker_J + stykker_K + stykker_V;

    if(antall_stykker < en_pizza) {
        alert('En pizza holder<3');
    }
    
    if(antall_stykker > en_pizza && antall_stykker < to_pizzaer) {
        alert('lag to pizzaer<3');
    }

    if(antall_stykker > to_pizzaer) {
        alert('lag tre pizzaer<3');
    }
}

// how_many_pizzas(7,8,4)


// valuta kalkulator nok til euro

function nok_to_euro(nok) {
    console.log(nok * 0.093)
}

nok_to_euro(6)



// Mandag 16. januar


console.clear()
console.log(document)


// Henter ut elementer fra html:

const section1_element = document.querySelector('section')
console.log(section1_element)

const header_element = document.querySelector('header')
console.log(header_element)

const p_element = document.querySelector('p')
console.log(p_element)

// hvis p er inni div: queryselector('div p')


// queryselector med klassenavn: bruker ..

const named_p = document.querySelector('.zebra')
console.log(named_p)

// named_p.

// queryselector med id: id må være unikt. Bruker #.

const id_p = document.querySelector('#bjørn')
console.log(id_p)

const id_p2 = document.getElementById('bjørn')
console.log(id_p2)

//querySelectorAll: Alle elementer blir lagt inn i array. Array = liste
// med forskjellige typer data. 

console.clear()

const all_p_element = document.querySelectorAll('p');
console.log(all_p_element);

const h1 = document.querySelector('#overskrift');
console.log(h1);

