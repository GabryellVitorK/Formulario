const mode = document.getElementById("mode_icon");

mode.addEventListener("click", () => {
  const form = document.getElementById("form");

  if (mode.classList.contains("fa-regular fa-moon"));
  {
    mode.classList.remove("fa-regular fa-moon");
    mode.classList.add("fa-regular fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.remove("fa-regular fa-sun");
  mode.classList.add("fa-regular fa-moon");

  form.classList.remove("dark");
});
