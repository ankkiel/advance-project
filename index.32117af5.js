document.addEventListener("DOMContentLoaded", function() {
    var animateOnScroll = function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var animationClass = entry.target.classList.contains("talk__image") || entry.target.classList.contains("letter__image") ? "animate__bounceIn" : "animate__fadeIn";
                entry.target.classList.add("animate__animated", animationClass);
                observer.unobserve(entry.target);
            }
        });
    };
    var observer = new IntersectionObserver(animateOnScroll);
    var animatedElements = document.querySelectorAll(".talk__image, .letter__image, .letters__title, .talk__text");
    animatedElements.forEach(function(element) {
        observer.observe(element);
    });
});

//# sourceMappingURL=index.32117af5.js.map
