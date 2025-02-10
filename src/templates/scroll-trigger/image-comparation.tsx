import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const ScrollTriggerImageComparisionTemplate = () => {
  const comparisionRef = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const section = comparisionRef.current;
    const body = document.querySelector("body");
    if (!section || !body) return;
    body.style.overflowX = "hidden";
    ScrollTrigger.normalizeScroll({
      allowNestedScroll: true,
      lockAxis: false,
      type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
    });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        scrub: true,
        pin: true,
        start: "center center",
        markers: true,
        end: () => "+=" + section?.offsetWidth,
        // normalize: true,
        anticipatePin: 1,
        // anticipatePin: 2,
        // anticipatePin: 6,
      },
    });

    timeline
      .fromTo(
        section?.querySelector(".afterImage"),
        {
          xPercent: 100,
          x: 0,
        },
        {
          xPercent: 0,
        }
      )
      .fromTo(
        section?.querySelector(".afterImage img"),
        {
          xPercent: -100,
          x: 0,
        },
        {
          xPercent: 0,
        },
        0
      );
  }, [window?.innerWidth]);

  return (
    <main className="bg-neutral-600 ">
      <section className="bg-neutral-600 flex items-center justify-center min-h-[90vh]">
        <h1 className="text-white text-3xl">Scroll to see the before/after</h1>
      </section>
      <section
        className="comparisonSection relative pb-[56.25%] bg-red-100"
        ref={comparisionRef}
      >
        <div className="comparisonImage w-full h-full beforeImage">
          <img
            className="absolute top-0 overflow-hidden w-full h-full"
            src="https://assets.codepen.io/16327/before.jpg"
            alt="before"
          />
        </div>
        <div className="comparisonImage h-full w-full afterImage bg-red-400 absolute top-0 overflow-hidden translate-x-full">
          <img
            className="absolute top-0 w-full h-full overflow-hidden -translate-x-full"
            src="https://assets.codepen.io/16327/after.jpg"
            alt="after"
          />
        </div>
      </section>
      <section className="bg-neutral-600 flex items-center justify-center min-h-[90vh]">
        <h1 className="text-white text-3xl">Scroll to see the before/after</h1>
      </section>
    </main>
  );
};
