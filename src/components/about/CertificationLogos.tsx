import { motion } from "framer-motion";

// Brand colors for each logo
const brandColors = {
  ibm: "#0F62FE",
  google: "#4285F4",
  "google-cloud": "#4285F4",
  coursera: "#0056D2",
  vanderbilt: "#CFAE70",
  ucdavis: "#FFBF00",
  meta: "#0082FB",
  adobe: "#FF0000",
};

// Simplified, stylized SVG logos for certification providers with brand colors
export const IBMLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className}>
    <text x="50" y="30" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="28" fontWeight="bold" fill={brandColors.ibm}>
      IBM
    </text>
  </svg>
);

export const GoogleLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className}>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500">
      <tspan fill="#4285F4">G</tspan>
      <tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan>
      <tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan>
      <tspan fill="#EA4335">e</tspan>
    </text>
  </svg>
);

export const GoogleCloudLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 160 40" className={className}>
    <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="500">
      <tspan fill="#4285F4">G</tspan>
      <tspan fill="#EA4335">o</tspan>
      <tspan fill="#FBBC05">o</tspan>
      <tspan fill="#4285F4">g</tspan>
      <tspan fill="#34A853">l</tspan>
      <tspan fill="#EA4335">e</tspan>
      <tspan fill="#5F6368"> Cloud</tspan>
    </text>
  </svg>
);

export const CourseraLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className}>
    <text x="60" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600" fill={brandColors.coursera}>
      Coursera
    </text>
  </svg>
);

export const VanderbiltLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 40" className={className}>
    <text x="70" y="30" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fontWeight="600" fill={brandColors.vanderbilt}>
      Vanderbilt
    </text>
  </svg>
);

export const UCDavisLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className}>
    <text x="60" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600" fill={brandColors.ucdavis}>
      UC Davis
    </text>
  </svg>
);

export const MetaLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 40" className={className}>
    <text x="40" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill={brandColors.meta}>
      Meta
    </text>
  </svg>
);

export const AdobeLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className}>
    <text x="50" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill={brandColors.adobe}>
      Adobe
    </text>
  </svg>
);

type LogoType = "ibm" | "google" | "google-cloud" | "coursera" | "vanderbilt" | "ucdavis" | "meta" | "adobe";

interface CertificationBadgeProps {
  logos: LogoType[];
}

const logoComponents: Record<LogoType, React.FC<{ className?: string }>> = {
  ibm: IBMLogo,
  google: GoogleLogo,
  "google-cloud": GoogleCloudLogo,
  coursera: CourseraLogo,
  vanderbilt: VanderbiltLogo,
  ucdavis: UCDavisLogo,
  meta: MetaLogo,
  adobe: AdobeLogo,
};

const logoWidths: Record<LogoType, string> = {
  ibm: "w-14",
  google: "w-20",
  "google-cloud": "w-28",
  coursera: "w-24",
  vanderbilt: "w-24",
  ucdavis: "w-20",
  meta: "w-16",
  adobe: "w-20",
};

export const CertificationBadge = ({ logos }: CertificationBadgeProps) => {
  return (
    <div className="mt-5 pt-4 border-t border-foreground/10">
      <p className="text-xs text-foreground-subtle mb-3">Formations suivies via :</p>
      <div className="flex items-center gap-4 flex-wrap">
        {logos.map((logoKey, index) => {
          const LogoComponent = logoComponents[logoKey];
          const width = logoWidths[logoKey];
          
          return (
            <motion.div
              key={logoKey}
              className={`${width} h-8 opacity-80 hover:opacity-100 transition-all duration-300`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
            >
              <LogoComponent className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
