const refs = {
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

saveLocalStorage()

refs.themeSwitch.addEventListener('change', changeTheme);


function changeTheme() {
    if (refs.themeSwitch.checked) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }  
}

function saveLocalStorage() {
    if (localStorage.getItem('theme') === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitch.checked = true;
}
}

