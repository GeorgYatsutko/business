const burgerBtn = document.querySelector('.burger-menu'),
    navList = document.querySelector('.links__list'),
    arrowBtn = document.querySelector('.arrow'),
    section4Form = document.querySelector('.form-wrapper'),
    closeIcon = document.querySelector('.close-icon');
    console.log(closeIcon);

burgerBtn.addEventListener('click', function(){
    navList.classList.toggle('links__list_active');
})

arrowBtn.addEventListener('click',function(){
    section4Form.classList.add('form-wrapper_active');
    console.log('click');
})

closeIcon.addEventListener('click',function(){
    section4Form.classList.remove('form-wrapper_active');
})