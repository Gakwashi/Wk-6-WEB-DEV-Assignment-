// Toggle Day/Night Routine Mode
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Day Routine"
    : "Switch to Night Routine";
});

// Product Counter Logic
let count = 0;
document.getElementById("addProduct").addEventListener("click", () => {
  count++;
  document.getElementById("productCount").textContent = count;
});

// FAQ Toggle Logic
document.querySelector(".faqToggle").addEventListener("click", () => {
  const answer = document.querySelector(".faqAnswer");
  answer.classList.toggle("hidden");
});

// Form Validation Logic
document.getElementById("skincareForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const skinType = document.getElementById("skinType").value;
  const password = document.getElementById("password").value;

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  if (skinType === "") {
    errors.push("Please select your skin type.");
  }

  const passwordValid = password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);
  if (!passwordValid) {
    errors.push("Password must be at least 8 characters and include a number and a symbol.");
  }

  const feedback = document.getElementById("formFeedback");
  feedback.innerHTML = "";

  if (errors.length > 0) {
    feedback.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>`;
  } else {
    feedback.style.color = "green";
    feedback.textContent = "Form submitted successfully!";
  }
});

