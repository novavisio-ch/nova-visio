import { useEffect, useRef } from "react";

export const ZcalEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the widget div
    const widget = document.createElement("div");
    widget.className = "zcal-inline-widget";
    widget.innerHTML = '<a href="https://zcal.co/i/eLFAiBiU">Appel découverte - Nova Visio</a>';
    containerRef.current?.appendChild(widget);

    // Load/reload the Zcal script
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[600px]" />;
};
