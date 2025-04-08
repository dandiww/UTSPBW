function scrollToBeranda() {
    const beranda = document.getElementById("beranda");
    if (beranda) {
      beranda.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih, pesan Anda telah dikirim!");
  });
  