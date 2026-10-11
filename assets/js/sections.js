// One render function per page section. Each returns nodes to put inside
// the matching <div data-render="..."> in index.html.

window.PORTFOLIO = window.PORTFOLIO || {};

PORTFOLIO.sections = (function () {
  const { el, link, meta, bulletList, shortPeriod, periodStart } = PORTFOLIO.helpers;

  function about(data) {
    const { profile } = data;
    const socials = profile.links.map((l) => link(l.label, l.url));
    const findMe = ["You can find me on "];
    socials.forEach((node, i) => findMe.push(node, i < socials.length - 1 ? ", " : ""));
    findMe.push(", or email me at ", link(profile.email, "mailto:" + profile.email), ".");

    return [
      el("p", { class: "subtitle" }, profile.title + " · " + profile.location),
      profile.summary.map((text) => el("p", null, text)),
      el("p", null, findMe),
      profile.highlight ? el("div", { class: "job" }, profile.highlight) : null
    ];
  }

  function timeline(data) {
    const items = [
      ...data.experience.map((job) => ({ period: job.period, label: job.role + " @ " + job.company })),
      ...data.education.map((edu) => ({ period: edu.period, label: edu.degree + " @ " + edu.school }))
    ].sort((a, b) => periodStart(b.period) - periodStart(a.period));

    return el("ul", { class: "post-list" }, items.map((item) =>
      el("li", { class: "post-item" },
        el("span", { class: "meta" }, shortPeriod(item.period)),
        el("span", null, item.label))));
  }

  function experience(data) {
    return data.experience.map((job) =>
      el("div", { class: "entry" },
        el("h3", null, job.role),
        meta([job.company, job.location, job.period]),
        job.description ? el("p", { class: "muted" }, job.description) : null,
        bulletList(job.points)));
  }

  function tags(list) {
    if (!list || !list.length) return null;
    return el("div", { class: "tags" },
      list.map((tag) => el("a", { class: "tag-link", href: "#skills" }, tag)));
  }

  function projects(data) {
    return data.projects.map((project) =>
      el("div", { class: "entry" },
        el("h3", null, link(project.title, project.url)),
        project.period ? meta([project.period]) : null,
        bulletList(project.points),
        tags(project.tags)));
  }

  function skills(data) {
    return el("table", { class: "skills" },
      el("tbody", null, data.skills.map((group) =>
        el("tr", null,
          el("th", null, group.category),
          el("td", null, group.items.join(", "))))));
  }

  function education(data) {
    return data.education.map((edu) =>
      el("div", { class: "entry" },
        el("h3", null, edu.degree),
        meta([edu.school, edu.period, edu.gpa ? "GPA " + edu.gpa : ""]),
        edu.coursework && edu.coursework.length
          ? el("p", null, "Coursework: ", edu.coursework.map((c) => [el("code", null, c), " "]))
          : null));
  }

  function certifications(data) {
    return el("ul", null, data.certifications.map((cert) =>
      el("li", null,
        cert.name,
        cert.issuer ? " · " + cert.issuer : "",
        cert.url ? [" · ", link("certificate", cert.url)] : null)));
  }

  function awards(data) {
    return el("ul", null, data.awards.map((award) =>
      el("li", null,
        el("strong", null, award.title),
        award.description ? ": " + award.description : "")));
  }

  function contact(data) {
    const { profile } = data;
    const rows = [
      ["Email", link(profile.email, "mailto:" + profile.email)],
      ["Mobile", link(profile.phoneDisplay, "tel:" + profile.phone)],
      ...profile.links.map((l) => [l.label, link(l.display || l.url, l.url)])
    ];
    return el("ul", { class: "post-list" }, rows.map(([label, value]) =>
      el("li", { class: "post-item" }, el("span", { class: "meta" }, label), value)));
  }

  return { about, timeline, experience, projects, skills, education, certifications, awards, contact };
})();
