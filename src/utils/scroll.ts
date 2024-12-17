const handleLinkStatusByScroll = () => {
  const sections = document.querySelectorAll(
    ".section"
  ) as NodeListOf<HTMLElement>;
  const links = document.querySelectorAll("#main-menu a");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY + window.innerHeight >= sectionTop) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") == `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
};

const animationOnScroll = () => {
  const animations = document.querySelectorAll(
    ".animation"
  ) as NodeListOf<HTMLElement>;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    animations.forEach((animation) => {
      animation.classList.remove("active");
      const sectionTop = animation.offsetTop;
      if (scrollY + window.innerHeight >= sectionTop + 100) {
        animation.classList.add("active");
      }
    });
  });
};

const animatedOnScroll2 = () => {
  const sections = document.querySelectorAll(
    ".move"
  ) as NodeListOf<HTMLElement>;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      section.classList.remove("active");
      if (scrollY + window.innerHeight >= sectionTop + 250) {
        section.classList.add("active");
      }
    });
  });
};

export { handleLinkStatusByScroll, animationOnScroll, animatedOnScroll2 };
