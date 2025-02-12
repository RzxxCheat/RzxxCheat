function toggleNavbar() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-menu');
    toggler.classList.toggle('active');
    menu.classList.toggle('open');
}
// Script untuk Toggle Navbar
function toggleNavbar() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarNav');
    
    toggler.classList.toggle('active'); // Rotasi tombol
    menu.classList.toggle('show'); // Tampilkan atau sembunyikan menu dengan animasi
}
// Mendapatkan elemen tombol dan menu navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-menu');

// Menambahkan event listener untuk toggler
navbarToggler.addEventListener('click', () => {
    navbarMenu.classList.toggle('open'); // Menambahkan atau menghapus kelas 'open' pada menu
    navbarToggler.classList.toggle('active'); // Mengubah tampilan tombol saat ditekan
});