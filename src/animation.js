document.addEventListener("DOMContentLoaded", () => {
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.classList.contains("talk__image") || entry.target.classList.contains("letter__image")
          ? "animate__bounceIn"
          : "animate__fadeIn";

        entry.target.classList.add("animate__animated", animationClass);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll);

  const animatedElements = document.querySelectorAll(
    ".talk__image, .letter__image, .letters__title, .talk__text"
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
