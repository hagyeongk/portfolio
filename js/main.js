
$(function(){
    let lnb = $('#lnb').offset().top

    $(window).scroll(function(){
        let window = $(this).scrollTop();
        if(lnb <= window){
            $('#lnb').addClass('fixed')
        } else {
            $('#lnb').removeClass('fixed')
        }
    })

})


window.addEventListener("scroll",(event)=> {
    let scrollY = this.scrollY
    console.log(scrollY)



    if(window.scrollY >= 700) {
        document.querySelector('.skill').style.top="40px"
        
    } else {
        if(window.scrollY < 700) {
            document.querySelector('.skill').style.top="800px"
        }
    }


    if(window.scrollY >= 750) {
        document.querySelector('.activity').style.top="300px"
        document.querySelector('.top').style.display="block"
    } else {
        if(window.scrollY < 750) {
            document.querySelector('.top').style.display="none"
            document.querySelector('.activity').style.top="800px"
        }
    }


    if(window.scrollY >= 800) {
        document.querySelector('.motivation').style.top="450px"
    } else {
        if(window.scrollY < 800) {
            document.querySelector('.motivation').style.top="800px"
        }
    }



    if(window.scrollY >= 2500) {
        document.querySelector('.last').style.top="50px"
    } else {
        document.querySelector('.last').style.top="-400px"
    }
    if(window.scrollY >= 2680) {
        document.querySelector('.thx').style.bottom="500px"
    } else {
        document.querySelector('.thx').style.bottom="-400px"
    }
})


       
const selfBox = document.querySelector('.slide')
const selfAll = document.querySelectorAll('.slide li')
let currentIndex = 0;
const slideCount = selfAll.length;
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slideWidth = 700;

selfBox.style.width = slideWidth * slideCount + 'px';


if(currentIndex <= 0) {
    prev.style.display = 'none'
}

function bxSlide(num){
    selfBox.style.left = -num * 700 + 'px'
    currentIndex = num;
}

prev.addEventListener('click',()=>{
    if(currentIndex !== 0) {
        bxSlide(currentIndex -1);   
        next.style.display = 'block'  
        if(currentIndex <= 0) {
            prev.style.display = 'none'
        }
    } 
})

next.addEventListener('click',()=>{
    if(currentIndex !== slideCount -1){
        bxSlide(currentIndex + 1)
            prev.style.display = 'block'
            next.style.display = 'none'
    }
})


const teamImg= document.querySelector('.img_t')
const teamAll = document.querySelectorAll('.img_t img')
let currentIndex2 = 0;
const slideCount2 = teamAll.length;
const prev2 = document.querySelector('.prev2')
const next2 = document.querySelector('.next2')
const slideWidth2 = 100;

teamBox.style.width = slideCount2 * slideCount2 + '%'

if(currentIndex2 <= 0) {
    prev2.style.display = 'none'
}

function bxSlide2(num){
    teamBox.style.left = -num * 100 + '%'
    currentIndex2 = num;
}

prev2.addEventListener('click',()=>{
    if(currentIndex2 !== 0) {
        bxSlide2(currentIndex2 -1);   
        next2.style.display = 'block'  
        if(currentIndex2 <= 0) {
            prev2.style.display = 'none'
        }
    } 
})

next2.addEventListener('click',()=>{
    if(currentIndex2 !== slideCount2 -1){
        bxSlide2(currentIndex2 + 1)
            prev2.style.display = 'block'
            next2.style.display = 'none'
    }
})
