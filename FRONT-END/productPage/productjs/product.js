import { lProducts } from "../../jsData/latest.js";
import { tProducts } from "../../jsData/trenting.js";
import { hProducts } from "../../jsData/hotwheels.js";

const latestBtn = document.getElementById('latest-explore');
const trentingBtn = document.getElementById('trending-explore');
const hotwheelsBtn = document.getElementById('hotwheels-explore');


latestBtn.addEventListener("click", () => {
    let latestProductHtml = '';

    lProducts.forEach((lproduct) => {
        latestProductHtml += `
            <div class="box-div">
                <div class="pics">
                    <img src="${lproduct.Image}">
                    <div class="offer">- ${lproduct.offer}%</div>
                </div>
                <div class="discription">
                    ${lproduct.name}
                </div>
                <div class="amound">
                    <div class="product-mrp">${lproduct.mrp}</div>
                    <div class="offer-price">₹ ${lproduct.price}</div>
                </div>
                <div class="added">
                    <img src="/images/icons/checkmark.png" alt="add-checkmark">
                    Added
                </div>
                <button class="js-addCart" data-product-id="${product.id}">Add to Cart</button>
            </div>
        `
    });

    document.querySelector('.product-container').innerHTML = latestProductHtml;
})
