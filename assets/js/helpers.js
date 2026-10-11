// Small DOM helpers shared by the section renderers.

window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.helpers = (function () {
  const MONTHS = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"];

  // el("a", { href: "#", class: "x" }, "text", childNode, [more, children])
  // Strings become text nodes, so data never gets parsed as HTML.
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      node.setAttribute(key === "className" ? "class" : key, value);
    }
    append(node, children);
    return node;
  }

  function append(node, children) {
    for (const child of children.flat(Infinity)) {
      if (child === null || child === undefined || child === false || child === "") continue;
      node.append(child instanceof Node ? child : document.createTextNode(String(child)));
    }
  }

  // Link if a url is given, plain text otherwise.
  function link(text, url, attrs) {
    if (!url) return document.createTextNode(text);
    const external = /^https?:/.test(url);
    return el("a", Object.assign({
      href: url,
      target: external ? "_blank" : null,
      rel: external ? "noopener" : null
    }, attrs), text);
  }

  // "Org | City | Period" with green separators; empty parts are skipped.
  function meta(parts) {
    const items = parts.filter(Boolean);
    const node = el("div", { class: "meta" });
    items.forEach((part, i) => {
      if (i > 0) node.append(el("span", { class: "sep" }, "|"));
      node.append(part);
    });
    return node;
  }

  function bulletList(points) {
    if (!points || !points.length) return null;
    return el("ul", null, points.map((point) => el("li", null, point)));
  }

  // "September 2023 – August 2025" -> "Sep 2023 – Aug 2025"
  function shortPeriod(period) {
    return period.replace(/\b([A-Z][a-z]+)\b/g, (word) =>
      MONTHS.includes(word.toLowerCase()) ? word.slice(0, 3) : word);
  }

  // Sortable number from the start of a period, e.g. "March 2026 – ..." -> 202602
  function periodStart(period) {
    const match = /([A-Za-z]+)\s+(\d{4})/.exec(period || "");
    if (!match) return 0;
    const month = Math.max(0, MONTHS.indexOf(match[1].toLowerCase()));
    return Number(match[2]) * 100 + month;
  }

  return { el, append, link, meta, bulletList, shortPeriod, periodStart };
})();
