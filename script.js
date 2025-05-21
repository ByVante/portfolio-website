async function submitForm(event) {
    event.preventDefault();
  
    const form = document.getElementById("contact-form");
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
  
    try {
      const response = await fetch("https://269afw30o3.execute-api.eu-north-1.amazonaws.com/dev this is my invoke url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
 const response = await fetch("https://269afw30o3.execute-api.eu-north-1.amazonaws.com/dev", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name, email, message })
});