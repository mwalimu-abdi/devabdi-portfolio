/**
 * Smooth scrolling utility with header offset handling
 */
export const smoothScrollTo = (targetIdOrHref: string, offset = 75): void => {
  const id = targetIdOrHref.replace(/^#/, '');
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });
  }
};
