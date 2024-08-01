document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(aboutSection);
});
