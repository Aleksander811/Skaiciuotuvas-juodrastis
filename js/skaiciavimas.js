
let inputNumberOne = document.querySelector('.number-one');
let inputNumberTwo = document.querySelector('.number-two');
let buttonOne = document.querySelector('.sudeti');
let buttonTwo = document.querySelector('.atimti');
let buttonThree = document.querySelector('.dauginti');
let buttonFour = document.querySelector('.dalinti');

buttonOne.onclick = ()=> {
    let pirmas = +inputNumberOne.value;
    let antras = +inputNumberTwo.value;
    function sudetis(pirmas, antras) {
        return (pirmas + antras);
    }

    document.querySelector('.sudeti').addEventListener('click',()=> {
        const sudetiesRez = sudetis(pirmas, antras);
        document.querySelector('.result').innerHTML = sudetiesRez;
        console.log(sudetiesRez);
    })
}

buttonTwo.onclick = ()=> {
    let pirmas = +inputNumberOne.value;
    let antras = +inputNumberTwo.value;
    function atimtis(pirmas, antras) {
        return (pirmas - antras);
    }

    document.querySelector('.atimti').addEventListener('click', ()=> {
        const atimtiesRez = atimtis(pirmas, antras);
        document.querySelector('.result').innerHTML = atimtiesRez;
        console.log(atimtiesRez);
    })
}

buttonThree.onclick = ()=> {
    let pirmas = +inputNumberOne.value;
    let antras = +inputNumberTwo.value;
    function sandauga(pirmas, antras) {
        return (pirmas * antras);
    }

    document.querySelector('.dauginti').addEventListener('click', ()=> {
        const daugybosRez = sandauga(pirmas, antras);
        document.querySelector('.result').innerHTML = daugybosRez;
        console.log(daugybosRez);
    })
}
    
buttonFour.onclick = ()=> {
    let pirmas = +inputNumberOne.value;
    let antras = +inputNumberTwo.value;
    function dalyba(pirmas, antras) {
        return (pirmas / antras);
    }

    document.querySelector('.dalinti').addEventListener('click', ()=> {
        const dalybosRez = dalyba(pirmas, antras);
        document.querySelector('.result').innerHTML = dalybosRez;
        console.log(dalybosRez);
    })
}

const out = document.querySelector('.result');

function valymas () {
    out.textContent = 0;
}

document.querySelector('.clear').addEventListener('click', ()=> {
    valymas ();
})


