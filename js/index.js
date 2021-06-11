const openNav = document.querySelector(".open-btn ");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-content");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener('click', openNavMobile);
function openNavMobile(){
    if(menu.classList.contains('show')){
      menu.classList.remove('show');
      openNav.classList.remove('navOpen');
      console.log("xoa")
    }
    else{
      menu.classList.add('show');
      openNav.classList.add('navOpen');
      console.log("mo")
    }
}

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});
