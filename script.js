// 1. Navbar Scroll Effect
window.addEventListener("scroll", function() {
  let nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      nav.style.background = "rgba(0, 0, 0, 0.95)";
      nav.style.padding = "12px 10%";
      nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
  } else {
      nav.style.background = "rgba(0, 0, 0, 0.8)";
      nav.style.padding = "20px 10%";
      nav.style.boxShadow = "none";
  }
});

// 2. Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 70,
              behavior: 'smooth'
          });
      }
  });
});

// 3. Centralized Verification and Download Logic
function verifyAndDownload(type) {
    let code = prompt("Please enter the Verification Code (Hint: RD....):");

    if (code === "RDCAFE") {
        if (type === 'resume') {
            // Resume को लागि PDF वा Excel सोध्ने
            let choice = prompt("Which format would you like?\nType '1' for PDF\nType '2' for Excel (xlsx)");

            if (choice === "1") {
                alert("Opening Resume PDF...");
                window.open("image/resume.pdf", "_blank");
            } else if (choice === "2") {
                alert("Downloading Resume Excel...");
                window.open("image/resume.xlsx", "_blank");
            } else {
                alert("Invalid choice. Please enter 1 or 2.");
            }
        } 
        else if (type === 'database') {
            // Database Project को लागि excel.numbers फाइल खोल्ने
            alert("Access Granted! Opening Database Project File...");
            window.open("image/excel.numbers", "_blank");
        }
    } 
    else if (code === null) {
        return; 
    } 
    else {
        alert("Incorrect Code. Access Denied.");
    }
}

// 4. Console Welcome Message
console.log("%c RD PORTFOLIO ", "background: #DEFF9A; color: #000; font-size: 20px; font-weight: bold; border-radius: 5px; padding: 5px;");
console.log("Status: System Online | Based in Japan");
