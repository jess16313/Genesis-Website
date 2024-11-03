function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const elements = document.querySelectorAll('.slide-in');
    
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.remove('visible');
            element.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
