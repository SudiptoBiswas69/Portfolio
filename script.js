// // Dark mode toggle (if needed)
// const toggleDarkMode = () => {
//   const body = document.body;
//   body.classList.toggle("dark-mode");

//   const darkModeToggle = document.querySelector(".dark-mode-toggle");
//   darkModeToggle.classList.toggle("clicked");
// };

// const darkModeToggle = document.querySelector(".dark-mode-toggle");
// darkModeToggle.addEventListener("click", toggleDarkMode);

// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();

  const form = document.getElementById("contact-form");
  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s//exAKfycbw1MVd3wxuWHPXtr9LUapfVfkfTmK4tvILPEWUALPr21P-TfeUuvAK86I_LC-n86CvB-Qec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      form.reset();
      displayConfirmationMessage("Message sent successfully!");
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
      displayConfirmationMessage("Error! Please try again later.");
    }
  } catch (error) {
    console.error(error);
    displayConfirmationMessage("An unexpected error occurred.");
  }
};

const displayConfirmationMessage = (message) => {
  const confirmationMessage = document.createElement("div");
  confirmationMessage.className = "confirmation-message";
  confirmationMessage.textContent = message;

  const contactSection = document.getElementById("contact");
  contactSection.appendChild(confirmationMessage);

  setTimeout(() => {
    contactSection.removeChild(confirmationMessage);
  }, 5000);
};

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", handleFormSubmit);

const handleScrollToTopVisibility = () => {
  const scrollToTopButton = document.getElementById("scrollToTop");

  const scrollPositionToShowIcon = window.innerHeight / 2;

  if (window.scrollY > scrollPositionToShowIcon) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};
