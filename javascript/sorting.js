// Funcția de schimb utilă pentru algoritmii de sortare preia intrarea a 2 elemente DOM cu caracteristica .style.height
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

// Dezactivează butoanele de sortare utilizate împreună cu activare, astfel încât să putem dezactiva în timpul sortării și să activăm butoanele după aceasta
function disableSortingBtn(){
    
    document.getElementById("quickSort").disabled = true;
   
}

// Activează butoanele de sortare utilizate împreună cu dezactivarea
function enableSortingBtn(){
 
    document.getElementById("quickSort").disabled = false;
 
}

function disableInput()
{
    document.querySelector()
}

// Dezactivează glisorul marime utilizat împreună cu activare, astfel încât să putem dezactiva în timpul sortării și să activăm butoanele după el
function disableSizeSlider()
{
    document.querySelector("#arr_marime").disabled = true;
}

// Activează slider-ul marime utilizat împreună cu dezactivarea
function enableSizeSlider()
{
    document.querySelector("#arr_marime").disabled = false;
}

// Dezactivează butoanele newArray utilizate împreună cu activare, astfel încât să putem dezactiva în timpul sortării și să activăm butoanele după el
function disableNewArrayBtn()
{
    document.querySelector("#newArray").disabled = true;
}

// Dezactivează butoanele newArray utilizate împreună cu activare, astfel încât să putem dezactiva în timpul sortării și să activăm butoanele după el
function enableNewArrayBtn()
{
    document.querySelector("#newArray").disabled = false;
}

// Folosit în funcția asincronă, astfel încât să putem face animații de sortare, durează timp de intrare în ms (1000 = 1s)
function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// Se selectează cursorul marime din DOM
let arraySize = document.querySelector('#arr_marime');

// Event listener pentru a actualiza grafica pe UI
arraySize.addEventListener('input', function(){

    createNewArray(parseInt(arraySize.value));
});

// Intrare implicită pentru funcția waitforme (260 ms)
let delay = 260;

// Selecteaza viteza slider-ului din DOM
let delayElement = document.querySelector('#viteza_input');

// Event listener pentru a actualiza timpul de întârziere
delayElement.addEventListener('input', function(){
    delay = 320 - parseInt(delayElement.value);
});

// Se creează un sir pentru a stoca numere generate aleatoriu
let array = [];

// Apelați pentru a afișa grafica chiar când vizitați site-ul
createNewArray();


// Pentru a crea o nouă matrice de intrare marime de matrice
function createNewArray(noOfgrafica = 20) {
  // apelarea funcției de ajutor pentru a șterge grafica veche din dom

    deleteChild();

  // creează o matrice de numere aleatorii
    array = [];
    for (let i = 0; i < noOfgrafica; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }

   // selectează elementul div #grafica
    const grafica = document.querySelector("#grafica");

    // creează mai multe elemente div folosind bucla și adăugând clasa „bar col”
    for (let i = 0; i < noOfgrafica; i++) {
        const bar = document.createElement("div");
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.style.height = `${array[i] * 2}px`;
        grafica.appendChild(bar);
    }
}

// Helper function to delete all the previous grafica so that new can be added
function deleteChild() {
    const bar = document.querySelector("#grafica");
    bar.innerHTML = '';
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#newArray");
newArray.addEventListener("click", function(){
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
}); 