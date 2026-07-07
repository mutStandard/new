gsap.registerPlugin(SplitText, ScrollTrigger);

console.clear();

gsap.set(".spliter", { opacity: 1 });

document.fonts.ready.then(() => {
  let contents = gsap.utils.toArray(".content");

  contents.forEach((content) => {
    let text = content.querySelector(".spliter");
    let animation;

    SplitText.create(text, {
      type: "words,lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (instance) => {
        console.log("split")
        return gsap.from(instance.lines, {
          yPercent: 120,
          stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            // markers: true,
            scrub: true,
            start: "clamp(top center)",
            end: "clamp(bottom center)"
          }
        });
      }
    });
  });
});
