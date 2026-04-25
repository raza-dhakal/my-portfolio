// 1. Navbar Scroll Effect
window.addEventListener("scroll", function() {
  let nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      nav.style.background = "#1a1a1a"; // Scroll गर्दा अलि बढी कालो हुने
      nav.style.padding = "15px 10%";
      nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
      nav.style.background = "#2c2a2a"; // सुरुको रङ
      nav.style.padding = "20px 10%";
      nav.style.boxShadow = "none";
  }
});

// 2. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
          top: targetSection.offsetTop - 70, // Navbar को height छोडेर स्क्रोल हुने
          behavior: 'smooth'
      });
  });
});

// 3. Welcome Message in Console
console.log("%c RD Portfolio ", "background: #c7a17a; color: #fff; font-size: 20px; font-weight: bold;");
console.log("Welcome to RD Cafe Portfolio - Developed by Rajan Dhakal");