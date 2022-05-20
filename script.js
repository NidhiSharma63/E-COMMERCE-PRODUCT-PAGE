const thumbnailImg = document.querySelectorAll(".thumbnail-img");
const imges = document.querySelector(".imges");
const decremnet = document.querySelector(".decremnet");
const increment = document.querySelector(".increment");
const AddToCartBtn = document.getElementById("add-to-cart-btn");
const cartWrapper = document.querySelector(".cart-wrapper");
const discountPrice = document.querySelector(".discount-price");
const cartIcon = document.querySelector(".cart-icon");
const container = document.querySelector(".hero-section");
const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu");



let menuImg = document.querySelector(".menu-img")
let cartQuantity  = document.querySelector(".cart-quantity"); 
let value = document.querySelector(".value");
let parseValue = parseInt(value.innerHTML)

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
        clickedThmbnail.classList.add("active");
        imges.style.left=(-400 *parseInt(clickIndex-1) + 'px');
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
    // menuImg.getAttribute('src')
    // menu.style.display='flex';
    menu.classList.toggle("full-width")
})