
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


    let motivation = document.querySelector('.motivation')

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
