// Mobile view navigation
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

// Open || Close navigation bar
const openCloseNav = () => {
  nav.classList.toggle("nav-active");
  // Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  // Burger animation
  burger.classList.toggle("toggle");
};

// Add event to burger click
burger.addEventListener("click", () => {
  openCloseNav();
});

// LinkedIn tab click
const linkedInTab = document.querySelector(".linkedin-tab");
const linkedInMobile = document.querySelector("#linkedInMobile");
linkedInTab.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/wsmithdev/");
});
linkedInMobile.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/wsmithdev/");
});

// Github tab click
const githubTab = document.querySelector(".github-tab");
const githubMobile = document.querySelector("#githubMobile");
githubTab.addEventListener("click", () => {
  window.open("https://github.com/wsmithdev");
});
githubMobile.addEventListener("click", () => {
  window.open("https://github.com/wsmithdev");
});

// Scroll to sections
const offset = -60;

// Scroll to hero section
const heroNav = document.querySelector("#nav-hero");
const logoNav = document.querySelector("#logo");
const heroSection = document.querySelector(".hero");
const heroSectionPos =
  heroSection.getBoundingClientRect().top + window.pageYOffset;
heroNav.addEventListener("click", () => {
  window.scrollTo({ top: heroSectionPos, behavior: "smooth" });
  // Close navigation menu if in mobile
  if (window.innerWidth <= 768) {
    openCloseNav();
  }
});
logoNav.addEventListener("click", () => {
  window.scrollTo({ top: heroSectionPos, behavior: "smooth" });
});

// Scroll to projects section
const projectsNav = document.querySelector("#nav-projects");
const chevronBtb = document.querySelector("#chevron");
const projectsSection = document.querySelector(".projects");
const projectsSectionPos =
  projectsSection.getBoundingClientRect().top + window.pageYOffset + offset;
projectsNav.addEventListener("click", () => {
  window.scrollTo({ top: projectsSectionPos, behavior: "smooth" });
  // Close navigation menu if in mobile
  if (window.innerWidth <= 768) {
    openCloseNav();
  }
});
chevronBtb.addEventListener("click", () => {
  window.scrollTo({ top: projectsSectionPos, behavior: "smooth" });
});

// Scroll to resume section
const resumeTab = document.querySelector(".resume-tab");
const resumeNav = document.querySelector("#nav-resume");
const resumeSection = document.querySelector(".resume");
const resumeSectionPos =
  resumeSection.getBoundingClientRect().top + window.pageYOffset + offset;
resumeTab.addEventListener("click", () => {
  window.scrollTo({ top: resumeSectionPos, behavior: "smooth" });
});
resumeNav.addEventListener("click", () => {
  window.scrollTo({ top: resumeSectionPos, behavior: "smooth" });
  // Close navigation menu if in mobile
  if (window.innerWidth <= 768) {
    openCloseNav();
  }
});

// Scroll to about section
const aboutNav = document.querySelector("#nav-about");
const aboutSection = document.querySelector(".about");
const aboutSectionPos =
  aboutSection.getBoundingClientRect().top + window.pageYOffset + offset;
aboutNav.addEventListener("click", () => {
  window.scrollTo({ top: aboutSectionPos, behavior: "smooth" });
  // Close navigation menu if in mobile
  if (window.innerWidth <= 768) {
    openCloseNav();
  }
});

// Scroll to contact section
const contactTab = document.querySelector(".email-tab");
const contactNav = document.querySelector("#nav-contact");
const contactSection = document.querySelector(".contact");
const contactSectionPos =
  contactSection.getBoundingClientRect().top + window.pageYOffset + offset;
contactTab.addEventListener("click", () => {
  window.scrollTo({ top: contactSectionPos, behavior: "smooth" });
});
contactNav.addEventListener("click", () => {
  window.scrollTo({ top: contactSectionPos, behavior: "smooth" });
  // Close navigation menu if in mobile
  if (window.innerWidth <= 768) {
    openCloseNav();
  }
});

// Contact form submission
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Email sent, thank you.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// Project 1 buttons 
const project1VisitSiteBtn = document.querySelector("#project-1-visit-site");
project1VisitSiteBtn.addEventListener("click", () => {
  window.open("https://prestigeauto.herokuapp.com/")
})
const project1SeeCodeBtn = document.querySelector("#project-1-see-code");
project1SeeCodeBtn.addEventListener("click", () => {
  window.open("https://github.com/wsmithdev/prestigeauto")
})

// Project 2 buttons 
const project2VisitSiteBtn = document.querySelector("#project-2-visit-site");
project2VisitSiteBtn.addEventListener("click", () => {
  window.open("https://iss-tracker.vercel.app/")
})
const project2SeeCodeBtn = document.querySelector("#project-2-see-code");
project2SeeCodeBtn.addEventListener("click", () => {
  window.open("https://github.com/wsmithdev/iss-tracker")
})


// Open Resume
const openResume = () => {
  window.open("./public/WilliamSmithResume.pdf")
}

// Print Resume
const printResume = () => {
  let objFra = document.getElementById('myFrame');
        objFra.contentWindow.focus();
        objFra.contentWindow.print();
}
