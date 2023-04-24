function theme() {
  const themeButton = document.querySelector(".theme");
  const themeButtonSpan = document.querySelector(".theme span");
  const themeButtonI = document.querySelector(".theme i");

  const body = document.body;

  function localStorageThemeSet(span, i, button) {
    localStorage.setItem("themeButtonSpan", span);
    localStorage.setItem("themeButtonI", i);
    localStorage.setItem("theme", button);
  }

  function localStorageThemeGet() {
    themeButtonSpan.textContent = localStorage.getItem("themeButtonSpan");
    themeButtonI.classList = `fa fa-${localStorage.getItem("themeButtonI")}`;
    body.className = localStorage.getItem("theme");
  }

  themeButton.addEventListener("click", function () {
    if (themeButtonSpan.textContent == "Dark") {
      body.style.transition = "background 300ms";
      localStorageThemeSet("Light", "sun", "dark");
    } else {
      localStorageThemeSet("Dark", "moon", "");
    }
    localStorageThemeGet();
  });

  localStorageThemeGet();
}

theme();

function menu() {
  const menuButton = document.querySelector(".iconMenu");
  const menuButtonSpan = document.querySelector(".iconMenu span");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function () {
    if (menuButtonSpan.textContent == "Menu") {
      menuButtonSpan.textContent = "Fechar";
      menu.style.display = "block";
    } else {
      menuButtonSpan.textContent = "Menu";
      menu.style.display = "none";
    }
  });
}

menu();
