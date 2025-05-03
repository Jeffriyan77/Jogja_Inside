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
  
  
  
  
  // Script untuk menyembunyikan navbar saat scroll ke bawah dan menampilkannya lagi saat scroll ke atas
  $(document).ready(function() {
    var lastScrollTop = 0; // Menyimpan posisi scroll sebelumnya
  
    // Event scroll
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop(); // Posisi scroll saat ini
  
      if (currentScroll > lastScrollTop) {
        // Scroll ke bawah, sembunyikan navbar
        $('.navbar-custom').addClass('navbar-hidden').removeClass('navbar-show');
      } else {
        // Scroll ke atas, tampilkan navbar
        $('.navbar-custom').addClass('navbar-show').removeClass('navbar-hidden');
      }
  
      lastScrollTop = currentScroll; // Update posisi scroll terakhir
    });
  });