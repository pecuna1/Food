//This Scrolls Down to the Recipe Section when Recipe button clicked
document.querySelectorAll('li[Recipe]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('id')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});