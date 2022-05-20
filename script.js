const thumbnailImg = document.querySelectorAll(".thumbnail-img");
const image = document.querySelector(".images");
const decremnet = document.querySelector(".decremnet");
const increment = document.querySelector(".increment");
const AddToCartBtn = document.getElementById("add-to-cart-btn");
const cartWrapper = document.querySelector(".cart-wrapper");
const discountPrice = document.querySelector(".discount-price");
const cartIcon = document.querySelector(".cart-icon");
const container = document.querySelector(".hero-section");
const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu");
const btnCartIcon = document.getElementById("btn-cart-icon")
let   menuImg = document.querySelector(".menu-img");
const logoImg = document.querySelector(".logo-img");
const profileIcon = document.querySelector(".profile-icon");
const productImg = document.querySelectorAll(".product");
const previousIcon = document.querySelector(".previous-icon");
const nextIcon = document.querySelector(".next-icon")

let cartQuantity  = document.querySelector(".cart-quantity"); 
let value = document.querySelector(".value");
let parseValue = parseInt(value.innerHTML);
let index = 0;


const setImageUrl = () =>{
    if(window.location.href==="http://localhost:5501/"){
        menuImg.getAttribute("src",'/images/icon-menu.svg');
        logoImg.getAttribute('src','/images/logo.svg');
        cartIcon.getAttribute('src','/images/icon-cart.svg');
        profileIcon.getAttribute('src','/images/image-avatar.png');
        decremnet.getAttribute('src','/images/icon-minus.svg');
        increment.getAttribute('src','/images/icon-plus.svg');
        btnCartIcon.getAttribute('src','/images/icon-cart-white.svg');
        for (let index = 0; index < thumbnailImg.length; index++) {
            thumbnailImg[index].getAttribute("src",`/images/image-product-${index+1}-thumbnail.jpg`);
            productImg[index].getAttribute("src",`/images/image-product-${index+1}.jpg`);
        }
    }   
}
window.onload=setImageUrl();



thumbnailImg.forEach((thumbnail)=>{
    thumbnail.addEventListener("click",(e)=>{
        //remove active class from last element
        thumbnailImg.forEach((item)=>{
            if(item!==thumbnail){
                item.classList.remove("active")
            }
        })
        const clickedThmbnail = e.currentTarget;
        const clickIndex = e.currentTarget.dataset.index;
        let imageWidth = image.getBoundingClientRect().width;
        clickedThmbnail.classList.add("active");
        image.style.left=(-imageWidth *parseInt(clickIndex-1) + 'px');
    }); 
});
// quantity
increment.addEventListener("click",()=>{
    parseValue++;
    value.innerHTML=parseValue;
});
decremnet.addEventListener("click",()=>{
    parseValue--;
    if(parseValue < 1) return;
    value.innerHTML=parseValue;
});
// add to cart
AddToCartBtn.addEventListener("click",()=>{
    let totalPrice = (parseInt(discountPrice.innerHTML)*parseInt(value.innerHTML));
    cartWrapper.innerHTML=
    `   
    <p>Cart</p>
    <div class="cart-product-info">
    <img src="/images/image-product-1-thumbnail.jpg" alt="">
    <div>
    <p>Fall Limited Edition Sneakers</p> 
    <p class="no-of-item">${'$' +discountPrice.innerHTML} x ${value.innerHTML} <span class="total-price">${totalPrice+.00}</span></p>
    </div>
    </div>
    <button class="Checkout">Checkout</button>
    `
    // delete cart on click on checkout btn
    const Checkout = document.querySelector(".Checkout");
    Checkout.addEventListener("click",()=>{
        cartWrapper.innerHTML=
            `
                <p>Cart</p>
                <p class="empty">Cart is empty</p>
            `
    });
    cartQuantity.innerHTML=parseValue;
    value.innerHTML=1;
});
// show cart
cartIcon.addEventListener("click",()=>{
    cartWrapper.classList.toggle('flex')
});
// remive cart
container.addEventListener("click",()=>{
    if(!(cartWrapper.classList.contains('flex'))) return;
        cartWrapper.classList.remove('flex');
});
// side menu
menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("full-width")
});
// slider
nextIcon.addEventListener('click',()=>{
    if(index>productImg.length-2) return;
    index+=1;
    let imageWidth = image.getBoundingClientRect().width;
    image.style.left=(-imageWidth *index + 'px');
});
previousIcon.addEventListener('click',()=>{
    if(index<1) return;
    index-=1;
    if(index<0) return;
    let imageWidth = image.getBoundingClientRect().width;
    image.style.left=(-imageWidth *index + 'px');
});