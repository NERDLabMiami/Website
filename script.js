            var values = [ 
            'We design through collaboration', 
            'We design to inspire and educate', 
            'We design to change the world',
            'We design to make the world a better place',
            'We design to inspire',
            'We design to inform and educate',
            'We design to solve the complex challenges of today',
            'We design for social impact'];

            var index = 0;
            var textElement = document.getElementById("textloop");


        function textSequence() {
            textElement.style.opacity = 0;
            setTimeout(function() {
                textElement.textContent = values[index];
                setTimeout(function() {
                    textElement.style.opacity = 1;
                }, 10); // A very short delay to avoid flashing
                index = (index + 1) % values.length;
                setTimeout(textSequence, 5000); // 5 seconds (in milliseconds)
            }, 1000); // 1 second (in milliseconds) for the fade-in effect
        }

        textSequence();

    document.querySelectorAll('.scroll-to').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            behavior: 'smooth',
            top: targetElement.offsetTop
          });
        }
      });
    });




/*
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('.menu li');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
*/