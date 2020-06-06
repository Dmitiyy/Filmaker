let btnOneHeart = document.querySelector('.btn_one_heart');
let btnTwoHeart = document.querySelector('.btn_two_heart');
let spanText = document.querySelector('.spn');
let imgHeart = document.querySelector('.svg_heart');
let count = 1;
let bp = localStorage.getItem('item2');

btnOneHeart.addEventListener('mouseover', function(){
   spanText.style.marginLeft = '-20px';
   this.style.transform = 'scale(1.1)';
   btnTwoHeart.style.transform = 'scale(1.1)';
});

btnOneHeart.addEventListener('mouseout', function(){
    spanText.style.marginLeft = '0px';
    this.style.transform = ''; 
    btnTwoHeart.style.transform = '';
});

btnTwoHeart.addEventListener('mouseover', function(){
    spanText.style.marginLeft = '-20px';
    this.style.transform = 'scale(1.1)';
    btnOneHeart.style.transform = 'scale(1.1)';
});

function store(){
    localStorage.setItem('item', imgHeart.style.display);
    localStorage.setItem('item2', count);
    localStorage.setItem('item3', bp);
}

imgHeart.style.display = localStorage.getItem('item');

if(imgHeart.style.display == 'none'){
    btnTwoHeart.innerHTML = localStorage.getItem('item2');
    if(btnTwoHeart.innerHTML == localStorage.getItem('item2')){
        btnTwoHeart.addEventListener('click', function(){
            btnTwoHeart.innerHTML = bp++;
            count = bp;
        });
        btnOneHeart.addEventListener('click', function(){
            btnTwoHeart.innerHTML = bp++;
            count = bp;
        });
    }
} 

btnOneHeart.addEventListener('click', function(){
    imgHeart.style.display = 'none';
    store();
    if(imgHeart.style.display == 'none'){
        btnTwoHeart.innerHTML = count++;
    }
});

btnTwoHeart.addEventListener('click', function(){
    imgHeart.style.display = 'none';
    store();
    if(imgHeart.style.display == 'none'){
        btnTwoHeart.innerHTML = count++;
    }
});

btnTwoHeart.addEventListener('mouseout', function(){
    spanText.style.marginLeft = '0px';
    this.style.transform = ''; 
    btnOneHeart.style.transform = '';
});

$('a[href^="#"').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000 
    });
    return false;
});