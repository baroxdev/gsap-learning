import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AppleExample = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = 1158;
    canvas.height = 770;

    const frameCount = 147;
    const currentFrame = (index: number) =>
      `
        https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
          index + 1
        )
          .toString()
          .padStart(4, "0")}.jpg
      `;

    const images: HTMLImageElement[] = [];
    const airPods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      ctx?.drawImage(images[airPods.frame], 0, 0);
    };

    gsap.to(airPods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
      onUpdate: render,
    });

    images[0].onload = render;
  }, []);

  return (
    <main className="h-[5000px] bg-black">
      <canvas
        className="fixed max-w-[100vw] max-h-[100vh] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        ref={canvasRef}
      />
    </main>
  );
};
