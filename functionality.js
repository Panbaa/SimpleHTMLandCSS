const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const openLoginWindow = document.querySelector('.openLogin');
const closeLoginWindow = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
})

openLoginWindow.addEventListener('click', ()=>{
    wrapper.classList.add('openWindow');
})

closeLoginWindow.addEventListener('click', ()=>{
    wrapper.classList.remove('openWindow');
    if(wrapper.classList.contains('active')){
        wrapper.classList.remove('active');
    }
})