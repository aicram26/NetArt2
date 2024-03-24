console.log("trial");

document.querySelector("h1").addEventListener("click", function () {
    document.querySelector("#text-1").style.visibility = "visible";
})
document.querySelector("#text-1").addEventListener("click", function () {
    document.querySelector("#text-2").style.visibility = "visible"; // Show text
})

document.querySelector("#text-2").addEventListener("click", function () {
    document.querySelector("#text-3").style.visibility = "visible"; // Show text
    document.querySelector("#text-1").style.visibility = "hidden"; // hide text
    document.querySelector("#text-2").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-3").addEventListener("click", function () {
    document.querySelector("#text-4").style.visibility = "visible"; // Show text
})

document.querySelector("#text-4").addEventListener("click", function () {
    document.querySelector("#text-5").style.visibility = "visible"; // Show text
    document.querySelector("#text-3").style.visibility = "hidden"; // hide text
    document.querySelector("#text-4").style.visibility = "hidden"; // hide text 
})

document.querySelector("#text-5").addEventListener("click", function () {
    document.querySelector("#text-6").style.visibility = "visible"; // Show text
})

document.querySelector("#text-6").addEventListener("click", function () {
    document.querySelector("#text-7").style.visibility = "visible"; // Show text
    document.querySelector("#text-5").style.visibility = "hidden"; // hide text
    document.querySelector("#text-6").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-7").addEventListener("click", function () {
    document.querySelector("#text-8").style.visibility = "visible"; // Show text
})

document.querySelector("#text-8").addEventListener("click", function () {
    document.querySelector("#text-9").style.visibility = "visible"; // Show text
    document.querySelector("#text-7").style.visibility = "hidden"; // hide text
    document.querySelector("#text-8").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-9").addEventListener("click", function () {
    document.querySelector("#text-10").style.visibility = "visible"; // Show text
})


document.querySelector("#text-10").addEventListener("click", function () {var audio = document.getElementById("audio");
audio.play();
    document.querySelector("#img-clock").style.visibility = "visible"; // Show text
    document.querySelector("#text-9").style.visibility = "hidden"; // hide text
    document.querySelector("#text-10").style.visibility = "hidden"; // hide text
})

document.querySelector("#img-clock").addEventListener("click", function () {
    document.querySelector("#text-11").style.visibility = "visible"; // Show text

    document.querySelector("#img-clock").style.visibility = "hidden";

})
document.querySelector("#text-11").addEventListener("click", function () {
    document.querySelector("#text-12").style.visibility = "visible"; // Show text

})

document.querySelector("#text-12").addEventListener("click", function () {
    document.querySelector("#text-13").style.visibility = "visible"; // Show text
    document.querySelector("#text-11").style.visibility = "hidden"; // hide text
    document.querySelector("#text-12").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-13").addEventListener("click", function () {
    document.querySelector("#text-14").style.visibility = "visible"; // Show text

})

document.querySelector("#text-14").addEventListener("click", function () {
    document.querySelector("#text-15").style.visibility = "visible"; // Show text
    document.querySelector("#text-13").style.visibility = "hidden"; // hide text
    document.querySelector("#text-14").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-15").addEventListener("click", function () {
    document.querySelector("#text-16").style.visibility = "visible"; // Show text
})

document.querySelector("#text-16").addEventListener("click", function () {
    document.querySelector("#text-17").style.visibility = "visible"; // Show text
    document.querySelector("#text-15").style.visibility = "hidden"; // hide text
    document.querySelector("#text-16").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-17").addEventListener("click", function () {
    document.querySelector("#text-18").style.visibility = "visible"; // Show text
})

document.querySelector("#text-18").addEventListener("click", function () {
    document.querySelector("#text-19").style.visibility = "visible"; // Show text
    document.querySelector("#text-17").style.visibility = "hidden"; // hide text
    document.querySelector("#text-18").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-19").addEventListener("click", function () {
    document.querySelector("#text-20").style.visibility = "visible"; // Show text
})

document.querySelector("#text-20").addEventListener("click", function () {
document.querySelector("#post-it").style.visibility = "visible"; // Show text
})

document.querySelector("#post-it").addEventListener("click", function () {
    document.querySelector("#text-21").style.visibility = "visible"; // Show text
    document.querySelector("#post-it").style.visibility = "hidden"; // Show text
    document.querySelector("#text-19").style.visibility = "hidden"; // hide text
    document.querySelector("#text-20").style.visibility = "hidden"; // hide text
})
 
document.querySelector("#text-21").addEventListener("click", function () {
    document.querySelector("#text-22").style.visibility = "visible"; // Show text
})

document.querySelector("#text-22").addEventListener("click", function () {
    document.querySelector("#text-23").style.visibility = "visible"; // Show text
})
document.querySelector("#text-23").addEventListener("click", function () {
    document.querySelector("#text-24").style.visibility = "visible"; // Show text
    document.querySelector("#text-21").style.visibility = "hidden"; // hide text
    document.querySelector("#text-22").style.visibility = "hidden"; // hide text
})

document.querySelector("#text-24").addEventListener("click", function () {
    document.querySelector("#text-23").style.visibility = "hidden"; // Show text
    document.querySelector("#text-24").style.visibility = "hidden"; // Show text
})

