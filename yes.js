const febHolidays = [
    "Do you Know, One loyal friend is worth ??🤨",
    "Total valuation of Parul University !!💕",
    "So alwayss give respect to me 😒",
    "and touch my feet regularly🤭",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺,",
    "ohh jhuth bhi kaafi aacha bol leta hu maii !!!🤭",
    "I don't want to lose you, kesa lga mera Majak😒",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "Once again sorry babe, for whatt you knoww ???",
    "So again 3 magical words : 'okayy byee then' 💕",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Issi date pr aata haii naa tera birthday 😍, in August !!🤞 ",
    ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  