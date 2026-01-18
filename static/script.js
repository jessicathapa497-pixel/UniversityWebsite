document.addEventListener("DOMContentLoaded", function() {
    // 1. Navbar  HTML structure
    const navbarHTML = `
    <nav>
      <div class="logo">
        <img src="Unilogo.png" alt="Logo" />
        <span>Nepal Public <br /> University</span>
      </div>
      <div class="menu-toggle" id="mobile-menu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="nav-links" id="nav-menu">
        <ul>
          <li><a href="course.html">Courses</a></li>
          <li><a href="About.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="Portal.html" class="btn-outline">Portal</a></li>
          <li><a href="Apply.html" class="btn-fill">Apply</a></li>
        </ul>
      </div>
    </nav>`;

    // 2. HTML page  placeholder 
    const navPlaceholder = document.getElementById('navbar-container');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navbarHTML;
    }

    // 3. Mobile menu  toggle logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});