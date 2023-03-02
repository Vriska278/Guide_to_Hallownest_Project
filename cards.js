$(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: [
            "<i class='fa fa-long-arrow-left'></i>",
            "<i class='fa fa-long-arrow-right'></i>"
        ],
        responsive: {
            767: {
                nav: true,
                dots: false
            }
        }
    });

    feedbackSlider.on("translate.owl.carousel", function () {
        $(".feedback-slider-item h3")
            .removeClass("animated fadeIn")
            .css("opacity", "0");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
            .removeClass("animated zoomIn")
            .css("opacity", "0");
    });

    feedbackSlider.on("translated.owl.carousel", function () {
        $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
            .addClass("animated zoomIn")
            .css("opacity", "1");
    });
    $(".thumb-next").on("click", function () {
        feedbackSlider.trigger("next.owl.carousel", [0]);
        return false;
    });
    $(".thumb-prev").on("click", function () {
        feedbackSlider.trigger("prev.owl.carousel", [0]);
        return false;
    });
});

var carousel = document.querySelector("owl-carousel");

var enemy_names = [];
var descriptions = [];


readTextFile("names.txt");
readTextFile("description.txt");


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                for (var i = 0; i < rawFile.responseText.length; i++) {
                    var text = rawFile.responseText[i];
                }
                text = rawFile.responseText;
                if (file === "names.txt") {
                    enemy_names = manipulateNames(text);
                } else if (file === "description.txt") {
                    descriptions = manipulateNames(text);
                }
            }
            else {
                console.log("error");
            }
        }
    };
    rawFile.send(null);
}
console.log(enemy_names);
console.log(descriptions);

function manipulateNames(text) {
    var names = [];
    text = text.replaceAll("_", " ");
    text.split("@").forEach(function (word) {
        word.replace("@", "");
        word = word.trim();
        names.push(word);
    });
    return names;
}

var owl_carousel = document.querySelector(".owl-carousel");

createCard(enemy_names, descriptions);

function createCard(names, descriptions) {
    for (var i = 0; i < names.length; i++) {
        var card = document.createElement("div");
        card.classList.add("feedback-slider-item");
    
        var img = document.createElement("img");
        img.classList.add("center-block");
        img.classList.add("img-circle");
        var img_src = names[i].replaceAll(" ", "_");
        img.src = "Enemy_Images/" + img_src + ".png";
        card.appendChild(img);

        var name = document.createElement("h3");
        name.classList.add("customer-name");
        name.innerText = names[i];
        card.appendChild(name);

        var p = document.createElement("p");
        p.innerHTML = descriptions[i];
        card.appendChild(p);

        owl_carousel.appendChild(card);
    }
}
