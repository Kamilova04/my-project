
const nav =  document.querySelector('#nav');
const navBtn = document.querySelector('#navBtn');
const navImage = document.querySelector('#navImage');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')){
      navImage.src = './img/nav/close-icon.svg';
    }else{
        navImage.src = './img/nav/open-icon.svg';
    }
}



AOS.init();



