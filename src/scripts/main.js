const f = document.querySelectorAll("[tracked-section]"),
  y = document.getElementById("tracked-section-container"),
  I = new IntersectionObserver(
    (o) => {
      const s = (n) => o.every((L) => n.time >= L.time),
        e = o
          .find((n) => n.isIntersecting && s(n))
          ?.target.getAttribute("data-color");
      e && y && (y.style.backgroundColor = e);
    },
    {
      threshold: 1,
    },
  );
f.forEach((o) => I.observe(o));

const i = document.getElementById("counter");
i &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting)
        for (let t = 0; t < i.children.length; t++) {
          const e = i.children[t];
          (e.classList.remove("opacity-0"),
            e.classList.remove("translate-y-10"));
        }
    },
    {
      threshold: 0.75,
    },
  ).observe(i);
const c = document.getElementById("heading1");
c &&
  new IntersectionObserver(
    (s) => {
      s[0].isIntersecting &&
        (c.classList.remove("opacity-0"), c.classList.remove("translate-y-5"));
    },
    {
      threshold: 0.5,
    },
  ).observe(c);
const r = document.getElementById("heading2");
r &&
  new IntersectionObserver(
    (s) => {
      s[0].isIntersecting &&
        (r.classList.remove("opacity-0"), r.classList.remove("translate-y-5"));
    },
    {
      threshold: 0.5,
    },
  ).observe(r);
const a = document.getElementById("animated-section1");
a &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting) {
        const t = a.children[0],
          e = a.children[1];

        t.classList.remove("opacity-0");
        t.classList.remove("-translate-x-5");

        e.classList.remove("opacity-0");
        e.classList.remove("translate-x-5");
      }
    },
    {
      threshold: 0.5,
    },
  ).observe(a);
const l = document.getElementById("animated-section2");
l &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting) {
        const t = l.children[0],
          e = l.children[1];

        t.classList.remove("opacity-0");
        t.classList.remove("-translate-x-5");

        e.classList.remove("opacity-0");
        e.classList.remove("translate-x-5");
      }
    },
    {
      threshold: 0.5,
    },
  ).observe(l);
const d = document.getElementById("contact-form");
d &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting) {
        const t = d.children[0],
          e = d.children[1];
        (t.classList.remove("opacity-0"),
          t.classList.remove("-translate-x-5"),
          e.classList.remove("opacity-0"),
          e.classList.remove("translate-x-5"));
      }
    },
    {
      threshold: 0.5,
    },
  ).observe(d);
const v = document.getElementById("feedback-cards");
v &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting)
        for (let t = 0; t < v.children.length; t++) {
          const e = v.children[t];
          (e.classList.remove("opacity-0"),
            e.classList.remove("translate-y-10"));
        }
    },
    {
      threshold: 0.75,
    },
  ).observe(v);
const m = document.getElementById("work-cards");
m &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting)
        for (let t = 0; t < m.children.length; t++) {
          const e = m.children[t];
          (e.classList.remove("opacity-0"),
            e.classList.remove("translate-y-10"));
        }
    },
    {
      threshold: 0.75,
    },
  ).observe(m);
const h = document.getElementById("steps");
h &&
  new IntersectionObserver(
    (s) => {
      if (s[0].isIntersecting)
        for (let t = 0; t < h.children.length; t++) {
          const e = h.children[t];
          (e.classList.remove("opacity-0"),
            e.classList.remove("translate-y-10"));
        }
    },
    {
      threshold: 0.35,
    },
  ).observe(h);
