document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const responseElem = document.getElementById("response");

  try {
    const response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    responseElem.textContent = result.message;
    responseElem.style.color = "green";
  } catch (error) {
    responseElem.textContent = "Error sending message.";
    responseElem.style.color = "red";
  }
});
