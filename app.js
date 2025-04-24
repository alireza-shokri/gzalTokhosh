const boxes = document.querySelectorAll('.card-pattern');
const menuIcon = document.querySelector('.menu_icon');
const menuList = document.getElementById('menu_list');
const landing_page=document.getElementById('landing_page')


  menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
  });











const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
       observer.unobserve(entry.target); 
    }
    else   entry.target.classList.remove('active');
  });
}, {
  threshold: 0.5
});

boxes.forEach(box => observer.observe(box));



  setTimeout(() => {
  landing_page.classList.add('hidden')
  }, 4000);



window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // مقدار اسکرول عمودی
    const target = document.getElementById('floating_btn');

    if (scrollY > 500) { // این عدد مقدار اسکرول به پیکسله
      target.classList.remove('hide');
    } else {
      target.classList.add ('hide');
    }
  });
