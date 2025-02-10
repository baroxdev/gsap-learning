import React from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import GSDevTools from "gsap-trial/GSDevTools";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, GSDevTools, TextPlugin);

GSDevTools.create();

function Hero() {
  const [displayText] = React.useState("A new way to trade");

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: {
            ease: "back",
          },
        })
        .add("start")
        .from("[data-slot='top-button']", {
          opacity: 0,
        })
        .from(
          "[data-slot='title-group']>[data-slot='title']",
          {
            opacity: 0,
            translateY: 100,
            stagger: 0.2,
          },
          "<"
        )
        .to("[data-slot='title-group']>[data-slot='title']:nth-child(2)", {
          text: displayText,
          duration: 0.8,
          ease: "power3.inOut",
        })
        .from(
          "[data-slot='subtitle']",
          {
            opacity: 0,
            translateY: 100,
          },
          "=-0.2"
        )
        .from(
          "[data-slot='button-group']>[data-slot='button']",
          {
            opacity: 0,
            translateY: 40,
            stagger: 0.2,
          },
          "=-0.3"
        );
    },
    {
      dependencies: [displayText],
      revertOnUpdate: false,
    }
  );

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div data-slot={"top-button"}>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1
              data-slot={"title-group"}
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular"
            >
              <span data-slot={"title"} className="text-spektr-cyan-50">
                This is something
              </span>
              <span
                data-slot={"title"}
                className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1"
              ></span>
            </h1>

            <p
              data-slot={"subtitle"}
              className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center"
            >
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div data-slot={"button-group"} className="flex flex-row gap-3">
            <Button
              data-slot={"button"}
              size="lg"
              className="gap-4"
              variant="outline"
            >
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button data-slot={"button"} size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
