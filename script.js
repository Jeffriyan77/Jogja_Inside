document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah lebar layar kurang dari atau sama dengan 768px (mobile)
    if (window.innerWidth <= 768) {
      var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');
  
      dropdownSubmenus.forEach(function (element) {
        element.addEventListener('click', function (e) {
          e.preventDefault(); // Cegah link berjalan
          e.stopPropagation(); // Cegah bubbling ke dropdown utama
  
          var submenu = this.nextElementSibling;
  
          // Tutup semua submenu lain yang terbuka
          document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function (openSubmenu) {
            if (openSubmenu !== submenu) {
              openSubmenu.classList.remove('show');
            }
          });
  
          // Toggle submenu yang diklik
          if (submenu) {
            submenu.classList.toggle('show');
          }
        });
      });
  
      // Tutup semua submenu jika klik di luar dropdown submenu
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown-submenu')) {
          document.querySelectorAll('.dropdown-submenu .dropdown-menu.show').forEach(function (submenu) {
            submenu.classList.remove('show');
          });
        }
      });
    }
  
    // Tangani perubahan ukuran layar (resize) untuk menangani dropdown di mode mobile
    window.addEventListener('resize', function() {
      // Jika ukuran layar lebih besar dari 768px, reset dropdown
      if (window.innerWidth > 768) {
        document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function(submenu) {
          submenu.classList.remove('show');
        });
      }
    });
  });
  
  let prevScrollPos = window.pageYOffset; // Menyimpan posisi scroll sebelumnya
  let navbar = document.querySelector(".navbar-custom");
  
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
  
    // Jika posisi scroll saat ini lebih besar dari sebelumnya (scroll ke bawah)
    if (prevScrollPos < currentScrollPos) {
      navbar.style.top = "-60px"; // Sembunyikan navbar (sesuaikan angka dengan tinggi navbar Anda)
    } else {
      navbar.style.top = "0"; // Tampilkan navbar kembali
    }
    
    prevScrollPos = currentScrollPos; // Update posisi scroll sebelumnya
  }
  