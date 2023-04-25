// Script for navigation bar
// MENU BURGER 
const menuBurger = document.querySelector('.menu-burger');
const navBar = document.querySelector('.nav-header');
const bodyElement = document.body
menuBurger.addEventListener('click', () => {
	navBar.classList.toggle('show');

	if (navBar.classList.contains('show')) {
		bodyElement.style.overflow = 'hidden'
		menuBurger.classList.add('active')
	} else {
		bodyElement.style.overflow = 'auto'
		menuBurger.classList.remove('active')

	}
})

// GALERRY 
const mainImg = document.querySelector('#mainImg');
const smallImgages = document.querySelectorAll('.gallery-product__small');

for (const smallImg of smallImgages) {
	smallImg.addEventListener('click', (e) => {
		mainImg.src = e.target.src
	})
}

//========================================================================================================================================================


const products = document.querySelectorAll('.card-product');

products.forEach(product => {
	product.addEventListener('click', () => {
		window.location.href = 'sproduct.html'
	})
})