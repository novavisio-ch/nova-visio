import { useEffect, useRef, useState } from "react";

export const ZcalEmbed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous content
    containerRef.current.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "zcal-inline-widget";
    widget.setAttribute("data-url", "https://zcal.co/i/eLFAiBiU?embed=1");
    widget.innerHTML = '<a href="https://zcal.co/i/eLFAiBiU">Appel découverte - Nova Visio</a>';
    containerRef.current.appendChild(widget);

    // Remove any previous zcal scripts to force reload
    document.querySelectorAll('script[src*="zcal.co"]').forEach((s) => s.remove());

    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    // Inject CSS to hide the Zcal profile header
    const style = document.createElement("style");
    style.id = "zcal-custom-style";
    if (!document.getElementById("zcal-custom-style")) {
      style.textContent = `
        .zcal-inline-widget iframe {
          border-radius: 0.75rem !important;
          min-height: 600px !important;
        }
        .zcal-inline-widget .zcal-badge,
        .zcal-inline-widget [class*="profile"],
        .zcal-inline-widget [class*="header"],
        .zcal-inline-widget [class*="avatar"] {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Retry mechanism: if iframe not injected after 3s, reload script
    const retryTimeout = setTimeout(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (!iframe) {
        document.querySelectorAll('script[src*="zcal.co"]').forEach((s) => s.remove());
        const retryScript = document.createElement("script");
        retryScript.src = "https://static.zcal.co/embed/v1/embed.js";
        retryScript.async = true;
        document.body.appendChild(retryScript);
      }
    }, 3000);

    return () => {
      clearTimeout(retryTimeout);
      script.remove();
      document.getElementById("zcal-custom-style")?.remove();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-[600px] rounded-xl overflow-hidden" />;
};
