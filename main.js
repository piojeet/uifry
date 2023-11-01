

function contactMe() {
    let contactBtn = document.querySelector("#contact-btn");
    let contactCloseBtn = document.querySelector(".close-svg");
    let contactForm = document.querySelector(".contact-forms");
    let nextContactBtn = document.querySelector(".next-contactbtn");
    let visionBtn = document.querySelector("#section-3 .contact-btn button");
    let clietsBtn = document.querySelector("#section-7 .contact #cliets-btn");
    let contactNowBtn = document.querySelector("#section-9 #contact-now-btn");

    contactBtn.addEventListener("click", function () {
        contactForm.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    contactCloseBtn.addEventListener("click", function () {
        contactForm.classList.remove("active");
        document.body.style.overflow = "auto";
    });


    nextContactBtn.addEventListener("click", function () {
        contactForm.classList.add("active");
        document.body.style.overflow = "hidden";
    });


    visionBtn.addEventListener("click", function () {
        contactForm.classList.add("active");
        document.body.style.overflow = "hidden";
    });


    clietsBtn.addEventListener("click", function () {
        contactForm.classList.add("active");
        document.body.style.overflow = "hidden";
    });


    contactNowBtn.addEventListener("click", function () {
        contactForm.classList.add("active");
        document.body.style.overflow = "hidden";
    });
}
contactMe();


function imgScroller() {
    let firstBtn = document.querySelector(".first-btn");
    let firstImgBox = document.querySelector(".first-scroller");
    let imageWidth = firstImgBox.clientWidth;

    firstBtn.addEventListener("click", function () {
        const maxScrollLeft = firstImgBox.scrollWidth - firstImgBox.clientWidth;
        firstImgBox.scrollLeft += imageWidth;

        if (firstImgBox.scrollLeft + firstImgBox.clientWidth > maxScrollLeft) {
            firstImgBox.scrollLeft = 0;
        }
    });


    let secondtBtn = document.querySelector(".second-btn");
    let secondImgBox = document.querySelector(".second-scroller");
    let imageWidth2 = secondImgBox.clientWidth;

    secondtBtn.addEventListener("click", function () {
        const maxScrollLeft = secondImgBox.scrollWidth - secondImgBox.clientWidth;
        secondImgBox.scrollLeft += imageWidth2;

        if (secondImgBox.scrollLeft + secondImgBox.clientWidth > maxScrollLeft) {
            secondImgBox.scrollLeft = 0;
        }
    });


    let thirdtBtn = document.querySelector(".third-btn");
    let thirdImgBox = document.querySelector(".third-scroller");
    let imageWidth3 = thirdImgBox.clientWidth;

    thirdtBtn.addEventListener("click", function () {
        const maxScrollLeft = thirdImgBox.scrollWidth - thirdImgBox.clientWidth;
        thirdImgBox.scrollLeft += imageWidth3;

        if (thirdImgBox.scrollLeft + thirdImgBox.clientWidth > maxScrollLeft) {
            thirdImgBox.scrollLeft = 0;
        }
    });

}
imgScroller();



function widthIncreas() {
    const clickBtns = document.querySelectorAll("#section-9 .center-container button");
const toggleWidth = document.querySelectorAll("#section-9 .toggle-btn");

clickBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        toggleWidth.forEach((element, i) => {
            if (i === index) {
                element.classList.toggle("active");
            } else {
                element.classList.remove("active");
            }
        });
    });
});
}
widthIncreas();


// navigation bar 
function navBar() {
    let menuIcon = document.querySelector("header .menu-icon");
let cloaseIcon = document.querySelector("nav ul .cloase-icon");
let navList = document.querySelector("nav ul");

menuIcon.addEventListener("click", function () {
    navList.classList.add("active");
    document.body.style.overflow = "hidden";
});

cloaseIcon.addEventListener("click", function () {
    navList.classList.remove("active");
    document.body.style.overflow = "auto";
});
}
navBar();