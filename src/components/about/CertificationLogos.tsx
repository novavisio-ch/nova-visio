import { motion } from "framer-motion";

// Simplified, stylized SVG logos for certification providers
export const IBMLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <text x="50" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="bold">
      IBM
    </text>
  </svg>
);

export const GoogleLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <text x="50" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="500">
      Google
    </text>
  </svg>
);

export const GoogleCloudLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 40" className={className} fill="currentColor">
    <text x="70" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="500">
      Google Cloud
    </text>
  </svg>
);

export const CourseraLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className} fill="currentColor">
    <text x="60" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="500">
      Coursera
    </text>
  </svg>
);

export const VanderbiltLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 140 40" className={className} fill="currentColor">
    <text x="70" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="500">
      Vanderbilt
    </text>
  </svg>
);

export const UCDavisLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className} fill="currentColor">
    <text x="60" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="500">
      UC Davis
    </text>
  </svg>
);

export const MetaLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 40" className={className} fill="currentColor">
    <text x="40" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600">
      Meta
    </text>
  </svg>
);

export const AdobeLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <text x="50" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="500">
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
  ibm: "w-10",
  google: "w-14",
  "google-cloud": "w-20",
  coursera: "w-16",
  vanderbilt: "w-16",
  ucdavis: "w-14",
  meta: "w-12",
  adobe: "w-14",
};

export const CertificationBadge = ({ logos }: CertificationBadgeProps) => {
  return (
    <div className="mt-5 pt-4 border-t border-white/10">
      <p className="text-xs text-white/40 mb-2.5">Formations suivies via :</p>
      <div className="flex items-center gap-3 flex-wrap">
        {logos.map((logoKey, index) => {
          const LogoComponent = logoComponents[logoKey];
          const width = logoWidths[logoKey];
          
          return (
            <motion.div
              key={logoKey}
              className={`${width} h-5 text-white/40 hover:text-white/70 transition-all duration-300`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, filter: "brightness(1.3)" }}
            >
              <LogoComponent className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
