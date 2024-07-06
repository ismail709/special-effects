import gsap from "gsap";
import $ from "jquery";

let scaleFactor = 1.05;

$(".container").on("mouseenter", () => {
  console.log("object");
  gsap.fromTo(
    ".container img:first-child",
    { y: 0, ease: "expo.inOut" },
    {
      y: -300,
      duration: 0.5,
      ease: "expo.inOut",
    }
  );
  gsap.fromTo(
    ".container img:last-child",
    {
      y: 50,
    },
    { y: 0, duration: 0.5, scale: scaleFactor }
  );
});
$(".container").on("mouseleave", () => {
  console.log("object");
  gsap.fromTo(
    ".container img:first-child",
    {
      y: -300,
      ease: "expo.inOut",
    },
    {
      y: 0,
      duration: 0.5,
      ease: "expo.inOut",
    }
  );
  gsap.fromTo(
    ".container img:last-child",
    { y: 0, scale: scaleFactor },
    {
      y: 50,
      scale: 1,
      duration: 0.5,
    }
  );
});
