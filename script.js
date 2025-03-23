
    let index = 0;
    const articles = document.querySelectorAll(".article");

    document.getElementById("leftBtn").addEventListener("click", function() {
        articles[index].classList.remove("active");
        index = (index > 0) ? index - 1 : articles.length - 1;
        articles[index].classList.add("active");
    });

    document.getElementById("rightBtn").addEventListener("click", function() {
        articles[index].classList.remove("active");
        index = (index < articles.length - 1) ? index + 1 : 0;
        articles[index].classList.add("active");
    });


    
    const scrollWrapper = document.querySelector('.scroll-wrapper');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    scrollLeftBtn.addEventListener('click', () => {
        scrollWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });




    // ✅ Select all accordions
const accordions = document.querySelectorAll(".section9-accordion-title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const parent = accordion.parentElement;
        const content = parent.querySelector(".section9-accordion-content");
        const chevron = accordion.querySelector(".section9-chevron");

        // ✅ Toggle Active Class
        parent.classList.toggle("active");

        // ✅ Toggle Content Visibility
        if (parent.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingBottom = "10px";
        } else {
            content.style.maxHeight = "0px";
            content.style.paddingBottom = "0px";
        }
    });
});


