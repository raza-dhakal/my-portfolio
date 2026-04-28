// 1. Navbar Scroll Effect
// स्क्रोल गर्दा नभबारको रङ र साइज बदल्ने
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

// 2. Smooth Scrolling for Navigation Links
// मेनुमा क्लिक गर्दा बिस्तारै (Smoothly) गुड्ने
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // नभबारको हाइट छोडेर
                behavior: 'smooth'
            });
        }
    });
});

// 3. Centralized Verification and Download Logic
// पासवर्ड चेक गर्ने र फाइल डाउनलोड गराउने मुख्य फङ्सन
function verifyAndDownload(type) {
    let code = prompt("Please enter the Verification Code (Hint: RD....):");

    if (code === "RDCAFE") {
        if (type === 'resume') {
            // रिजुमेको फर्म्याट सोध्ने
            let choice = prompt("Which format would you like?\nType '1' for PDF\nType '2' for Excel (xlsx)");

            if (choice === "1") {
                alert("Access Granted! Opening Resume PDF...");
                window.open("image/resume.pdf", "_blank");
            } else if (choice === "2") {
                alert("Access Granted! Downloading Resume Excel...");
                window.open("image/resume.xlsx", "_blank");
            } else {
                alert("Invalid choice. Please enter 1 or 2.");
            }
        } 
        else if (type === 'database') {
            // डेटाबेस प्रोजेक्ट फाइल खोल्ने
            alert("Access Granted! Opening Database Project File...");
            window.open("image/excel.numbers", "_blank");
        }
    } 
    else if (code === null) {
        return; // क्यान्सल थिचेमा केही नगर्ने
    } 
    else {
        alert("Incorrect Code. Access Denied.");
    }
}

// 4. Console Welcome Message (Developer Feel)
console.log("%c RD PORTFOLIO ", "background: #DEFF9A; color: #000; font-size: 20px; font-weight: bold; border-radius: 5px; padding: 5px;");
console.log("Status: System Online | Based in Japan");
console.log("Welcome to Rajan Dhakal's Portfolio Console!");

// 5. Bonus: Active Link Highlighter (स्क्रोल गर्दा कुन सेक्सनमा छ हाइलाइट गर्ने)
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('section').forEach((section, i) => {
        if (section.offsetTop - 100 <= scrollDistance) {
            document.querySelectorAll('.nav-links a').forEach((a) => {
                a.style.color = "white";
            });
            document.querySelectorAll('.nav-links a')[i].style.color = "#DEFF9A";
        }
    });
});
