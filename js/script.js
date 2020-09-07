$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabs__block");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabs__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    name = "";
    if (cityName === "Novosibirsk") {
        name = "В Новосибирской области"
    }
    if (cityName === "Uzbekistan") {
        name = "В Узбекистане"
    }
    if (cityName === "Altay") {
        name = "В Алтайском крае"
    }


    document.getElementById(cityName).style.display = "flex";
    document.getElementById("tabs__text").innerHTML = name;
    evt.currentTarget.className += " active";
}



function openNews(evt, newsCategory) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("news__cards");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("news__nav-item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" news__nav-item--active", "");
    }

    name = "";
    if (newsCategory === "all") {
        name = "Все";
        
    }
    if (newsCategory === "co") {
        name = "Новости компании"
    }
    if (newsCategory === "articles") {
        name = "Статьи"
    }
    if (newsCategory === "media") {
        name = "Медиатека"
    }
    document.getElementById("news__text").innerHTML = name;
    document.getElementById(newsCategory).style.display = "flex";
    evt.currentTarget.className += " news__nav-item--active";
}


function openDropTest() {
    document.getElementById("drop-test").classList.toggle("show");
    $('.tabs__dropbtn').toggleClass('active-drop');
    window.onclick = function (event) {
        if (!event.target.matches('.tabs__dropbtn')) {

            var dropdowns = document.getElementsByClassName("tabs__dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
            $('.tabs__dropbtn').removeClass('active-drop');
        }
        
    }
    
}

function openDropNews() {
    document.getElementById("news__drop").classList.toggle("show-news");
    $('.news__dropbtn').toggleClass('active-drop-news');
    window.onclick = function (event) {
        if (!event.target.matches('.news__dropbtn')) {

            var dropdowns = document.getElementsByClassName("news__drop-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show-news')) {
                    openDropdown.classList.remove('show-news');
                }
            }
            $('.news__dropbtn').removeClass('active-drop-news');
        }
    }
}

document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenNews").click();

var news = $('.news');
var newsTop = news.offset().top;
$(window).bind('scroll',function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > newsTop) {
        $('.contacts__map').html('<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A0a924e9b0ba1379eb623ff1e15e0c548a8b564b1895b133d5fadcac3b850c856&amp;source=constructor" width="100%" height="300" frameborder="0"></iframe>');
        $(window).unbind('scroll');
    }
    });