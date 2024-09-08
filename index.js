document.addEventListener("DOMContentLoaded", function() {
    
    const texts = ["Back-end Developer", "Mobile Developer", "Rising Mechatronic Engineer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    function type() {
        currentText = texts[count];

        if (!isDeleting) {
            letter = currentText.slice(0, ++index);
            document.getElementById("dynamic-text").textContent = letter;

            if (letter.length === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000); 
            }
        } else {
            letter = currentText.slice(0, --index);
            document.getElementById("dynamic-text").textContent = letter;

            if (letter.length === 0) {
                isDeleting = false;
                count = (count + 1) % texts.length; 
            }
        }

        const typingSpeed = isDeleting ? 50 : 100; 
        setTimeout(type, typingSpeed);
    }

    type();

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    function changeActiveLink() {
        const sections = document.querySelectorAll('section');
        let index = sections.length;
    
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    
        
        if (sections[index].id === 'skills') {
            document.body.classList.add('skills-visible');
            const menuIcon = document.querySelector('.menu-icon i');
            if (menuIcon) {
                menuIcon.style.color = "white"; 
            }
        } else {
            document.body.classList.remove('skills-visible');
            const menuIcon = document.querySelector('.menu-icon i');
            if (menuIcon) {
                menuIcon.style.color = "black"; 
            }
        }
    }
    

    window.addEventListener('scroll', changeActiveLink);
    changeActiveLink(); 

    function toggleMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    }

    const menuButton = document.querySelector('.menu-icon'); 
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});
