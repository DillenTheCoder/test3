function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    if (username === "admin" && password === "1234") {
        document.getElementById("loginOverlay").style.display = "none";
    } else {
        error.textContent = "Invalid username or PIN";
    }
}



const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtrhpiuXAHn6vhBmqg_QcWbJAuWw9EgdjecKMtvV2JHS7WxeMZj1YF1QqJoZKuk_jq/exec";

function addMember() {
  const data = {
    name: document.getElementById("name").value.trim(),
    surname: document.getElementById("surname").value.trim(),
    reference: document.getElementById("reference").value.trim(),
    address: document.getElementById("address").value.trim(),
    whatsapp: document.getElementById("whatsapp").value.trim(),
    idNumber: document.getElementById("idNumber").value.trim()
  };

  // Basic validation
  if (!data.name || !data.surname) {
    alert("Name and Surname are required");
    return;
  }

  fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(result => {
    if (result.success) {
      document.getElementById("memberCount").textContent = result.totalMembers;
      clearForm();
      alert("Member added successfully");
    }
  })
  .catch(err => {
    console.error(err);
    alert("Failed to add member");
  });
}

function clearForm() {
  document.querySelectorAll(".form-grid input").forEach(i => i.value = "");
}
