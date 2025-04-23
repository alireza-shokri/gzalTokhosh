window.addEventListener('scroll', function () {
    const scrollY = window.scrollY; // مقدار اسکرول عمودی
    const target = document.getElementById('floating_btn');

    if (scrollY > 500) { // این عدد مقدار اسکرول به پیکسله
      target.classList.remove('hide');
    } else {
      target.classList.add ('hide');
    }
  });