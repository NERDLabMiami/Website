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





    document.addEventListener("DOMContentLoaded", function() {
    var portfolioItems = document.querySelectorAll(".portfolio-item");
  
  portfolioItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      var title = item.querySelector("h3").textContent;
      var description = item.querySelector(".portfolio-description").textContent;
      var link = item.querySelector(".link").getAttribute("href");
      var linktext = item.querySelector(".link-text").textContent;
      openModal(title, description, linktext, link);
    });
  });
});

function openModal(title, description, linktext, link) {
  var modal = document.getElementById('portfolioModal');
  var modalTitle = document.getElementById('modal-title');
  var modalDescription = document.getElementById('modal-description');
  var modalLink = document.getElementById('modal-link');  
  modal.style.display = 'flex';
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalLink.textContent = linktext;
  modalLink.href = link;
}

function closeModal() {
  var modal = document.getElementById('portfolioModal');
  modal.style.display = 'none';
}

document.addEventListener("click", function(event) {
  var modal = document.getElementById('portfolioModal');
  if (event.target == modal) {
    closeModal();
  }
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