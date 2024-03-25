window.addEventListener('DOMContentLoaded', () => {
  const bodyStyle = window.getComputedStyle(document.body);
  const themeColor = bodyStyle.getPropertyValue('background-color');
  const metaThemeColor = document.querySelector("meta[name='theme-color']");
  metaThemeColor.setAttribute("content", themeColor);
});
