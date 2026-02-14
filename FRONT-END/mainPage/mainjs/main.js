import { lProducts } from "../../jsData/latest.js";
import { tProducts } from "../../jsData/trenting.js";
import { hProducts } from "../../jsData/hotwheels.js";
import { dProducts } from "../../jsData/diorama.js";

//for navbar scroll feature

let lastScrollY = window.scrollY  

window.addEventListener("scroll", () => {
    const navbar = document.getElementById("website-content");

    if(window.scrollY < lastScrollY) {
        navbar.style.top = "0";
    }else{
        navbar.style.top = "-60px"
    }

    lastScrollY = window.scrollY;
});

//for sliding banner

const slidesContainer = document.querySelector('.slides');
let slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.right');
const prevBtn = document.querySelector('.left');

let index = 1;

//Clone first & last
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll('.slide');

slidesContainer.style.transform = `translateX(-100%)`;


function moveSlide() {
  slidesContainer.style.transition = "transform 0.6s ease-in-out";
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}


nextBtn.addEventListener('click', () => {
  if (index >= slides.length - 1) return;
  index++;
  moveSlide();
});


prevBtn.addEventListener('click', () => {
  if (index <= 0) return;
  index--;
  moveSlide();
});

//When transition ends (loop fix)
slidesContainer.addEventListener('transitionend', () => {
  if (slides[index].isSameNode(firstClone)) {
    slidesContainer.style.transition = "none";
    index = 1;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  if (slides[index].isSameNode(lastClone)) {
    slidesContainer.style.transition = "none";
    index = slides.length - 2;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }
});

let auto = setInterval(() => {
  index++;
  moveSlide();
}, 3000);

// Pause on hover
document.querySelector('.slider').addEventListener('mouseenter', () => clearInterval(auto));
document.querySelector('.slider').addEventListener('mouseleave', () => {
  auto = setInterval(() => {
    index++;
    moveSlide();
  }, 3000);
});

// generate html (latest)

let lProductHTML = '';

lProducts.forEach((lProduct) => {
    lProductHTML += `
    <div class="product-container">
        <div class="img-box">
            <img class="product-image" src="${lProduct.Image}" alt="">
            <div class="best-seller">Best Seller</div>
            <div class="offer">- ${lProduct.offer}%</div>
            <input type="checkbox" id="wishlist1" class="wishlist-checkBox">
            <label for="wishlist1" class="wishlist-label"></label>
        </div>
        <div class="name">${lProduct.name}</div>
        <div class="price-div">
            <div class="mrp">₹${lProduct.mrp}</div>
            <div class="offer-price">₹${lProduct.price}</div>
        </div>
    </div>
    `
});

document.querySelector('.product-grid-latest').innerHTML = lProductHTML;

// generate html (trenting)

let tProductHTML = '';

tProducts.forEach((tProduct) => {
    tProductHTML += `
    <div class="product-container">
        <div class="img-box">
            <img class="product-image" src="${tProduct.Image}" alt="">
            <div class="best-seller">Best Seller</div>
            <div class="offer">- ${tProduct.offer}%</div>
            <input type="checkbox" id="wishlist1" class="wishlist-checkBox">
            <label for="wishlist1" class="wishlist-label"></label>
        </div>
        <div class="name">${tProduct.name}</div>
        <div class="mrp">₹${tProduct.mrp}</div>
        <div class="offer-price">₹${tProduct.price}</div>
    </div>
    `
});

document.querySelector('.product-grid-trending').innerHTML = tProductHTML;

// generate html (hotwheels)

let hProductHTML = '';

hProducts.forEach((hProduct) => {
    hProductHTML += `
    <div class="product-container">
        <div class="img-box">
            <img class="product-image" src="${hProduct.Image}" alt="">
            <div class="best-seller">Best Seller</div>
            <div class="offer">- ${hProduct.offer}%</div>
            <input type="checkbox" id="wishlist1" class="wishlist-checkBox">
            <label for="wishlist1" class="wishlist-label"></label>
        </div>
        <div class="name">${hProduct.name}</div>
        <div class="mrp">₹${hProduct.mrp}</div>
        <div class="offer-price">₹${hProduct.price}</div>
    </div>
    `
});

document.querySelector('.product-grid-hot-wheels').innerHTML = hProductHTML;

// generate html (diorama)

let dProductHTML = '';

dProducts.forEach((dProduct) => {
    dProductHTML += `
    <div class="product-container">
        <div class="img-box">
            <img class="product-image" src="${dProduct.Image}" alt="">
            <div class="best-seller">Best Seller</div>
            <div class="offer">- ${dProduct.offer}%</div>
            <input type="checkbox" id="wishlist1" class="wishlist-checkBox">
            <label for="wishlist1" class="wishlist-label"></label>
        </div>
        <div class="name">${dProduct.name}</div>
        <div class="price-div">
            <div class="mrp">₹${dProduct.mrp}</div>
            <div class="offer-price">₹${dProduct.price}</div>
        </div>
    </div>
    `
});

document.querySelector('.product-grid-diorama').innerHTML = dProductHTML;

//explore button intrative