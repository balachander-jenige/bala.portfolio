// Fills every <div data-render="name"> with PORTFOLIO.sections[name](data),
// and every [data-field="..."] with the matching profile value.

(function () {
  const data = window.PORTFOLIO;
  const { append } = data.helpers;

  document.querySelectorAll("[data-render]").forEach((target) => {
    const name = target.dataset.render;
    const render = data.sections[name];
    if (!render) {
      console.warn('No renderer for data-render="' + name + '"');
      return;
    }
    target.replaceChildren();
    append(target, [render(data)]);
  });

  document.querySelectorAll("[data-field]").forEach((target) => {
    const value = data.profile[target.dataset.field];
    if (value) target.textContent = value;
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
