const intervalInput = document.getElementById('interval');
console.log(intervalInput);

intervalInput.addEventListener('change', ({ target }) => {
  console.log(target.value);
});
