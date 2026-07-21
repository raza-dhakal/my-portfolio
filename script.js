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

// 2. Smooth Scrolling for Navigation Links
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
        let filePath = "";
        let fileName = "";

        if (type === 'resume') {
            let choice = prompt("Which format would you like?\nType '1' for PDF\nType '2' for Excel (xlsx)");
            if (choice === "1") {
                filePath = "image/resume.pdf";
                fileName = "Rajan_Dhakal_Resume.pdf";
            } else if (choice === "2") {
                filePath = "image/resume.xlsx";
                fileName = "Rajan_Dhakal_Resume.xlsx";
            } else {
                alert("Invalid choice. Please enter 1 or 2.");
                return;
            }
        } 
        else if (type === 'database') {
            filePath = "image/excel.numbers";
            fileName = "Database_Project.numbers";
        }

        if (filePath !== "") {
            downloadFile(filePath, fileName);
        }
    } 
    else if (code === null) {
        return; 
    } 
    else {
        alert("Incorrect Code. Access Denied.");
    }
}

// फाइल डाउनलोड गराउने बलियो फङ्सन
function downloadFile(path, name) {
    const link = document.createElement('a');
    link.href = path;
    link.target = '_blank';
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Downloading started...");
}

// 4. Console Welcome Message
console.log("%c RD PORTFOLIO ", "background: #DEFF9A; color: #000; font-size: 20px; font-weight: bold; border-radius: 5px; padding: 5px;");
console.log("Status: System Online | Based in Japan");
console.log("Welcome to Rajan Dhakal's Portfolio Console!");

// 5. Active Link Highlighter
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('section').forEach((section, i) => {
        if (section.offsetTop - 100 <= scrollDistance) {
            document.querySelectorAll('.nav-links a').forEach((a) => {
                a.style.color = "white";
            });
            let activeLink = document.querySelectorAll('.nav-links a')[i];
            if (activeLink) activeLink.style.color = "#DEFF9A";
        }
    });
});
