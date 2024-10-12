//about me
var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
//side navbar
// Get references to the elements
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Function to open the navbar
function openNavbar() {
    navbar.style.left = '0'; // Show navbar
    overlay.classList.add('active'); // Show overlay
}

// Function to close the navbar
function closeNavbar() {
    navbar.style.left = '-250px'; // Hide navbar
    overlay.classList.remove('active'); // Hide overlay
}

// Event listeners
openBtn.addEventListener('click', openNavbar);
closeBtn.addEventListener('click', closeNavbar);

// Hide navbar when clicking on overlay
overlay.addEventListener('click', closeNavbar);

// Hide navbar when clicking on links
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNavbar);
});

  //project
  const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });

  const readMoreBtn = card.querySelector('.read-more');
  const readLessBtn = card.querySelector('.read-less');
  const extraText = card.querySelector('.extra-text');

  readMoreBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent flipping when clicking the button
    extraText.style.display = 'block';
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline-block';
  });

  readLessBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    extraText.style.display = 'none';
    readMoreBtn.style.display = 'inline-block';
    readLessBtn.style.display = 'none';
  });
});
//contuct
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the name from the input field
    const fullName = document.getElementById("name").value;

    // Hide the form and show the thank you message
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";

    // Show the response message and display the full name on the right side
    document.getElementById("responseName").textContent = fullName;
    document.getElementById("responseContainer").style.display = "block";
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjS2064be-IcR_4qYyo0z3e_aKGObb8T9HoO3sDSi-HDc1N3R0AJsw2VCqPvPd3fJ17Q/exec'
        const form = document.forms['submit-to-google-sheet']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        });

//footer
window.onload = function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").textContent = currentYear;
};


//typing auto
const textSegments = [
    { text: "Hey Guy's , I'm Jenish ", style: "highlight" }
  ];
  
  let segmentIndex = 0;
  let charIndex = 0;
  const speed = 100; // typing speed in milliseconds
  
  function typeEffect() {
    if (segmentIndex < textSegments.length) {
      let segment = textSegments[segmentIndex];
      
      if (charIndex < segment.text.length) {
        let span = document.createElement('span');
        if (segment.style) {
          span.classList.add(segment.style); // Add class if there's a style
        }
        span.textContent = segment.text.charAt(charIndex);
        document.getElementById("typed-text").appendChild(span);
        
        charIndex++;
        setTimeout(typeEffect, speed);
      } else {
        segmentIndex++;
        charIndex = 0;
        setTimeout(typeEffect, speed);
      }
    }
  }
  
  window.onload = typeEffect;

//scrolling animation
const boxes = document.querySelectorAll('.box');

function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the box is in view

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);

//text scrolling
document.addEventListener("scroll", function() {
  const fadeIns = document.querySelectorAll('.fade-in');

  fadeIns.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
          element.classList.add('visible');
      }
  });
});