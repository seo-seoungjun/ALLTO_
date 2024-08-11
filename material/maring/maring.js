const brandStorySection = document.querySelector('#brand_story');
const variation = document.querySelector('#logo_variation');
const logoType = document.querySelector('.types');
const logos = document.querySelector('.logos');

document.addEventListener('aos:in:brand_story', ({ detail }) => {
  brandStorySection.classList.add('on');
});

document.addEventListener('aos:out:brand_story', ({ detail }) => {
  brandStorySection.classList.remove('on');
});

document.addEventListener('aos:in:variation', ({ detail }) => {
  variation.classList.add('on');
  logoType.classList.add('on');
  logos.classList.add('on');
});

document.addEventListener('aos:out:variation', ({ detail }) => {
  variation.classList.remove('on');
  logoType.classList.remove('on');
  logos.classList.remove('on');
});
