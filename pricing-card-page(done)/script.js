// write your JavaScript here
const toggleInput = document.querySelector('.plan-toggle .toggle-input');
const primaryPrice = document.querySelector('.price-primary');
const planTime = document.querySelector('.price-primary span');

toggleInput.addEventListener('change', (e) => {
  console.log(e.target.checked);
  const isAnually = e.target.checked;
  console.log();
  setTimeout(() => {
    if (isAnually) {
      primaryPrice.firstChild.textContent = '$999';
      planTime.textContent = '/ year';
    } else {
      primaryPrice.firstChild.textContent = '$99';
      planTime.textContent = '/ month';
    }
  }, 500);
});
