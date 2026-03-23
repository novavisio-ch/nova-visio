import { useEffect, useRef } from "react";

export const ZcalEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const widget = document.createElement("div");
    widget.className = "zcal-inline-widget";
    widget.innerHTML = '<a href="https://zcal.co/i/eLFAiBiU">Appel découverte - Nova Visio</a>';
    containerRef.current?.appendChild(widget);

    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Inject CSS to hide the Zcal profile header
    const style = document.createElement("style");
    style.textContent = `
      .zcal-inline-widget iframe {
        border-radius: 0.75rem !important;
      }
      .zcal-inline-widget .zcal-badge,
      .zcal-inline-widget [class*="profile"],
      .zcal-inline-widget [class*="header"],
      .zcal-inline-widget [class*="avatar"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      script.remove();
      style.remove();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[600px] rounded-xl overflow-hidden" />;
};
