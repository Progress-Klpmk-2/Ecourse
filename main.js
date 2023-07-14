//navbar style on scroll

window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0);
});

//tampilkan atau hide FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //ubah icon + jadi - dan sebaliknya
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});
