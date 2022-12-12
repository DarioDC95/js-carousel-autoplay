//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
    <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel thumbnails
const thumbnail = document.querySelector('.slide-img');

for(i = 0; i < imagesArray.length; i++) {
    thumbnail.innerHTML += `<div class="container-img">
                                <img src="./img/${imagesArray[i]}" alt="">
                                <div class="cover overlay"></div>
                                </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const img_side = document.getElementsByClassName('cover');
const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');
img_side[itemActive].classList.add('borderlined');
img_side[itemActive].classList.remove('overlay');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', forward(items, itemActive, circles, img_side));

prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    const lastActiveItem = items[itemActive];
    const lastCircleActive = circles[itemActive];
    const lastImg_side = img_side[itemActive];
    
    //decremento il suo valore di 1
    if (itemActive == 0) {
        itemActive = (items.length - 1);
    }
    else {
        itemActive--;
    }
    
    const activeItem = items[itemActive];
    const circleActive = circles[itemActive];
    const activeImg_side = img_side[itemActive];
    
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    lastActiveItem.classList.remove('active');
    activeItem.classList.add('active');
    
    // aggiungo e rimuovo l'overlay e il borderlined
    lastImg_side.classList.remove('borderlined');
    lastImg_side.classList.add('overlay');
    activeImg_side.classList.add('borderlined');
    activeImg_side.classList.remove('overlay');
    
    //stessa cosa per i cerchi
    lastCircleActive.classList.remove('active');
    circleActive.classList.add('active');
})

function forward(item, itemActi, circle, img_si) {
    //verifico l'elemento attivo (itemActive)
    const lastActiveItem = item[itemActi];
    const lastCircleActive = circle[itemActi];
    const lastImg_side = img_si[itemActi];
    
    //incremento il suo valore di 1
    if (itemActi == (item.length - 1)) {
        itemActi = 0;
    }
    else {
        itemActi++;
    }
    
    const activeItem = item[itemActi];
    const circleActive = circle[itemActi];
    const activeImg_side = img_si[itemActi];

    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    lastActiveItem.classList.remove('active');
    activeItem.classList.add('active');

    // aggiungo e rimuovo l'overlay e il borderlined
    lastImg_side.classList.remove('borderlined');
    lastImg_side.classList.add('overlay');
    activeImg_side.classList.add('borderlined');
    activeImg_side.classList.remove('overlay');

    //stessa cosa per i cerchi
    lastCircleActive.classList.remove('active');
    circleActive.classList.add('active');

    return itemActi
}