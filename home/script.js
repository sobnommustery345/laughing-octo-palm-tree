document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('exploreBtn');
  const exploreDropdown = document.getElementById('exploreDropdown');
  const searchBtn = document.getElementById('searchBtn');
  const searchPopup = document.getElementById('searchPopup');
  const searchInput = document.getElementById('searchInput');
  const dropdownLinks = document.querySelectorAll('.dropdown-card li a');

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileExploreBtn = document.getElementById('mobileExploreBtn');
  const mobileSublist = document.getElementById('mobileSublist');

  function closeSearch() {
    searchPopup.classList.remove('open');
    searchBtn.classList.remove('active');
  }

  function closeDesktopExplore() {
    exploreDropdown.classList.remove('open');
    exploreBtn.classList.remove('active');
    exploreBtn.setAttribute('aria-expanded', 'false');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  // পিসি Explore ড্রপডাউন টগল
  exploreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = exploreDropdown.classList.toggle('open');
    exploreBtn.classList.toggle('active', isOpen);
    exploreBtn.setAttribute('aria-expanded', isOpen);
    closeSearch();
  });

  dropdownLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      dropdownLinks.forEach((item) => item.classList.remove('featured'));
      link.classList.add('featured');
    });
  });

  // সার্চ পপআপ টগল (সব ডিভাইসে)
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = searchPopup.classList.toggle('open');
    searchBtn.classList.toggle('active', isOpen);

    if (isOpen) {
      setTimeout(() => searchInput.focus(), 100);
    }

    closeDesktopExplore();
    closeMobileMenu();
  });

  searchPopup.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // ট্যাবলেট ও ফোন হ্যামবার্গার মেনু টগল
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    closeSearch();
  });

  // মোবাইল মেনুর ভেতরে ক্লিক করলে মেনু বন্ধ হবে না
  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // মোবাইল মেনুর ভেতর Explore অ্যাকর্ডিয়ন টগল
  mobileExploreBtn.addEventListener('click', () => {
    const isOpen = mobileSublist.classList.toggle('open');
    mobileExploreBtn.classList.toggle('active', isOpen);
    mobileExploreBtn.setAttribute('aria-expanded', isOpen);
  });

  // বাইরে ক্লিক করলে সব মেনু ও সার্চ বন্ধ হবে
  document.addEventListener('click', () => {
    closeDesktopExplore();
    closeSearch();
    closeMobileMenu();
  });

  // স্ক্রিন বড় করে পিসি সাইজে নিলে মোবাইল মেনু অটো বন্ধ হবে
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      closeMobileMenu();
    }
  });
});
