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
});
