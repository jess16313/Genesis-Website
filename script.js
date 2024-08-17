document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector(".about-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-in");
            } else {
                entry.target.classList.remove("slide-in");
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    observer.observe(aboutSection);
});
