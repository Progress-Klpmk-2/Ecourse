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

//nav menu button
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

//copy code snippad
function copyCode() {
  // Dapatkan elemen pre yang berisi kode
  var codeElement = document.getElementById("codeSnippet");

  // Buat elemen textarea sementara untuk menyalin teks
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = codeElement.textContent;

  // Sembunyikan elemen textarea agar tidak terlihat di halaman
  tempTextArea.style.position = "absolute";
  tempTextArea.style.left = "-9999px";
  document.body.appendChild(tempTextArea);

  // Pilih teks dalam elemen textarea
  tempTextArea.select();

  // Salin teks yang dipilih
  document.execCommand("copy");

  // Hapus elemen textarea sementara
  document.body.removeChild(tempTextArea);

  // Tampilkan pesan sukses (opsional)
  alert("Kode berhasil disalin!");
}

//course pages
const subjects = document.querySelectorAll(".subject");

subjects.forEach((subject) => {
  subject.addEventListener("click", () => {
    subject.classList.toggle("open");

    //ubah icon + jadi - dan sebaliknya
    const icon = subject.querySelector(".subject_icon i");
    if (icon.className === "uil uil-angle-right-b") {
      icon.className = "uil uil-angle-down";
    } else {
      icon.className = "uil uil-angle-right-b";
    }
  });
});
