const heriText = "heri";       // Teks pertama
const aristaText = "arista.";   // Teks kedua
const text = "Saya Heri Arista berasal dari Kalimantan Utara. Anak ke 3 dari 4 bersaudara dan berprofesi sebagai akuntan di salah satu perusahaan.";
const heriElement = document.getElementById("heri");
const aristaElement = document.getElementById("arista");
const paragraphElement = document.getElementById("typing-paragraph");

let index = 0;
let heriIndex = 0;
let aristaIndex = 0;

function typeHeri() {
  if (heriIndex < heriText.length) {
    heriElement.innerHTML += heriText[heriIndex];
    heriIndex++;
    setTimeout(typeHeri, 400); // Kecepatan mengetik "heri"
  } else {
    typeArista(); // Setelah "heri" selesai, lanjutkan ke "arista"
  }
}


function typeArista() {
  if (aristaIndex < aristaText.length) {
    aristaElement.innerHTML += aristaText[aristaIndex];
    aristaIndex++;
    setTimeout(typeArista, 300); // Kecepatan mengetik "arista"
  } else {
    typeParagraph(); // Setelah "arista" selesai, lanjutkan ke paragraph
  }
}

// function typeParagraph() {
//   if (index < text.length) {
//     paragraphElement.innerHTML += text[index];
//     index++;
//     setTimeout(typeParagraph, 100); // Sesuaikan kecepatan mengetik di sini (100 ms per huruf)
//   }
// }

// Mulai animasi pengetikan setelah halaman dimuat
window.onload = function() {
  typeHeri(); // Mulai dengan mengetik "heri", lalu berlanjut ke "arista" dan paragraph
};



// tombol selanjut nya
const nextButton = document.getElementById("next-button");
const additionalText = document.getElementById("additional-text");

nextButton.addEventListener("click", function() {
    if (additionalText.classList.contains("hidden")) {
        additionalText.classList.remove("hidden");
        additionalText.classList.add("fade-in"); // Tambahkan animasi fade-in
        nextButton.textContent = "Tutup"; // Ubah teks tombol menjadi "Tutup"
    } else {
        additionalText.classList.add("hidden");
        additionalText.classList.remove("fade-in"); // Hapus kelas animasi untuk diulang saat tombol ditekan lagi
        nextButton.textContent = "Selanjutnya >"; // Kembalikan teks tombol ke "Selanjutnya >"
    }
});


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("show"); // Tampilkan atau sembunyikan menu
});


