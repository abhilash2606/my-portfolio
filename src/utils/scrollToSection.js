const scrollToSection = (e, targetId) => {
  e.preventDefault();
  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default scrollToSection;
