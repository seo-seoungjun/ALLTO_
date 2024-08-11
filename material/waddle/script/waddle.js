const targetEl = document.querySelector('#targeting');
const targetEl_2 = document.querySelector('#positioning');
const targetEl_3 = document.querySelector('#positioning_after');

document.addEventListener('aos:in:last', () => {
  targetEl.classList.add('on');
  targetEl_2.classList.add('on');
  targetEl_3.classList.add('on');
});

document.addEventListener('aos:out:last', () => {
  targetEl.classList.remove('on');
  targetEl_2.classList.remove('on');
  targetEl_3.classList.remove('on');
});
