// const body = document.querySelector("body");
// const toggleSwitch = document.getElementById("toggle-switch");

// toggleSwitch.addEventListener("click", () => {
//   body.classList.toggle("dark");
// });

// // Initialize Typed.js
// var typingEffect = new Typed(".typedText", {
//   strings: [ "Web Developer", "Fronted Developer","Designer" ],
//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 2000,
// });

// // Adjust font size using JavaScript
// document.querySelector(".typedText").style.fontSize = "1em"; // Adjust this value as needed

// /*----Scroll animation----*/

// const sr = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(".featured-name", { delay: 100 });
// sr.reveal(".text-info", { delay: 200 });
// sr.reveal(".text-btn", { delay: 200 });
// sr.reveal(".social-icons", { delay: 200 });
// sr.reveal(".featured-name", { delay: 320 });

// sr.reveal(".project-box", { interval: 200 });
// sr.reveal(".top-header", {});

// const srleft = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(".about-info", { delay: 200 });
// sr.reveal(".contact-info", { delay: 200 });

// const srRight = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// srRight.reveal(".skills-area", { delay: 200 });
// srRight.reveal(".skill", { delay: 200 });



// /*-------Active link-------*/

// const section = document.querySelectorAll(".section[id]");

// function scrollActive() {
//   const scrollY = window.scrollY;

//   section.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//         document 
//         .querySelector(".nav-menu a[href*=" +  sectionId + "]")
//         .classList.add("active-link");
//       }
//       else{
//         document 
//         .querySelector(".nav-menu a[href*=" +  sectionId + "]")
//         .classList.remove("active-link");
//       }
//   });
// }

// window.addEventListener("scroll", scrollActive);


document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
    });

    // Initialize Typed.js
    new Typed(".typedText", {
      strings: ["Web Developer", "Frontend Developer", "Designer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Adjust font size using JavaScript
    document.querySelector(".typedText").style.fontSize = "1em"; // Adjust as needed

    // Scroll Animation
    function initScrollReveal(origin, distance, duration) {
      return ScrollReveal({
        origin: origin,
        distance: distance,
        duration: duration,
        reset: true,
      });
    }

    const sr = initScrollReveal("left", "80px", 2000);

    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".text-info", { delay: 200 });
    sr.reveal(".text-btn", { delay: 200 });
    sr.reveal(".social-icons", { delay: 200 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = initScrollReveal("left", "80px", 2000);
    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 200 });

    const srRight = initScrollReveal("left", "80px", 2000);
    srRight.reveal(".skills-area", { delay: 200 });
    srRight.reveal(".skill", { delay: 200 });

    // Active Link Highlighting
    const sections = document.querySelectorAll(".section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            if (link.getAttribute("href").includes(sectionId)) {
              link.classList.add("active-link");
            } else {
              link.classList.remove("active-link");
            }
          });
        } else {
          navLinks.forEach((link) => {
            if (link.getAttribute("href").includes(sectionId)) {
              link.classList.remove("active-link");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    // Form Submission
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then(result => {
          alert("Message sent successfully!");
          form.reset(); // Reset the form after submission
          document.getElementById("about").scrollIntoView({ behavior: "smooth" }); // Scroll to About section
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Failed to send message.");
        });
    });
  });