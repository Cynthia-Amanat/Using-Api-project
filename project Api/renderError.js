function renderError(error) {
  document.body.innerHTML = "";
  const errorElement = document.createElement("h1");
  errorElement.textContent = error.message;
  document.body.appendChild(errorElement);
}

export default renderError;
