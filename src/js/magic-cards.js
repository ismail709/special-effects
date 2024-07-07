import gsap from "gsap";
import $ from "jquery";

$(".card").on("mouseenter", function (e) {
  $(this).toggleClass("card--hover");
  $(this).find(".card-body").toggleClass("card-body--show");
  $(this)
    .find("tr")
    .each((i, e) => {
      console.log(typeof i);
      gsap.fromTo(
        e,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.2,
          delay: 0.2 * (i + 1),
          ease: "power1.in",
        }
      );
    });
});
$(".card").on("mouseleave", function (e) {
  $(this).toggleClass("card--hover");
  console.log("object");
  $(this).find(".card-body").toggleClass("card-body--show");
  $(this)
    .find("tr")
    .each((i, e) => {
      gsap.fromTo(e, { x: 0 }, { x: -100, duration: 0.2 });
    });
});

console.log("object");
