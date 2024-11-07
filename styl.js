const text = "Saya Heri Arista berasal dari Kalimantan Utara. Anak ke 3 dari 4 bersaudara dan berprofesi sebagai akuntan di salah satu perusahaan.";
const paragraphElement = document.getElementById("typing-paragraph");
let index = 0;

function typeParagraph() {
  if (index < text.length) {
    paragraphElement.innerHTML += text[index];
    index++;
    setTimeout(typeParagraph, 100); // Sesuaikan kecepatan mengetik di sini (100 ms per huruf)
  }
}

// Mulai animasi pengetikan setelah halaman dimuat
window.onload = typeParagraph;
