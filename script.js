window.addEventListener('DOMContentLoaded', function(){
	window.addEventListener('scroll', function(){
		const header = document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY >650)
	})
	const scrollBtn = document.querySelector('.scrollToTop-btn')
	window.addEventListener('scroll' , () =>{
		scrollBtn.classList.toggle('active', window.scrollY > 650)
	})
	scrollBtn.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	})
})