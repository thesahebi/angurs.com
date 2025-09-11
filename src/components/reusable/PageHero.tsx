import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  accentColor?: string;
  backgroundPattern?: 'dots' | 'grid' | 'waves' | 'circuits';
  showGraph?: boolean;
  graphType?: 'bar' | 'line' | 'pie' | 'network' | 'cloud';
  isHomepage?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  accentColor = '#e95420',
  backgroundPattern = 'dots',
  showGraph = true,
  graphType = 'bar',
  isHomepage = false
}) => {
  const renderBackgroundPattern = () => {
    switch (backgroundPattern) {
      case 'dots':
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        );
      case 'grid':
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z" fill={accentColor} />
            </svg>
          </div>
        );
      case 'circuits':
        return (
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="20" height="20" fill="none" stroke={accentColor} strokeWidth="0.5"/>
                  <circle cx="10" cy="10" r="1" fill={accentColor}/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const renderGraph = () => {
    if (!showGraph) return null;

    switch (graphType) {
      case 'bar':
        return (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <rect x="20" y="80" width="20" height="40" fill={accentColor} />
              <rect x="50" y="60" width="20" height="60" fill={accentColor} />
              <rect x="80" y="40" width="20" height="80" fill={accentColor} />
              <rect x="110" y="30" width="20" height="90" fill={accentColor} />
              <rect x="140" y="50" width="20" height="70" fill={accentColor} />
              <rect x="170" y="70" width="20" height="50" fill={accentColor} />
            </svg>
          </div>
        );
      case 'line':
        return (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path d="M20,100 L50,80 L80,60 L110,40 L140,50 L170,30" 
                    stroke={accentColor} strokeWidth="3" fill="none" />
              <circle cx="20" cy="100" r="3" fill={accentColor} />
              <circle cx="50" cy="80" r="3" fill={accentColor} />
              <circle cx="80" cy="60" r="3" fill={accentColor} />
              <circle cx="110" cy="40" r="3" fill={accentColor} />
              <circle cx="140" cy="50" r="3" fill={accentColor} />
              <circle cx="170" cy="30" r="3" fill={accentColor} />
            </svg>
          </div>
        );
      case 'pie':
        return (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke={accentColor} strokeWidth="20" 
                      strokeDasharray="157 157" strokeDashoffset="0" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="20" 
                      strokeDasharray="157 157" strokeDashoffset="78" />
            </svg>
          </div>
        );
      case 'network':
        return (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <circle cx="50" cy="30" r="8" fill={accentColor} />
              <circle cx="150" cy="30" r="8" fill={accentColor} />
              <circle cx="100" cy="60" r="8" fill={accentColor} />
              <circle cx="50" cy="90" r="8" fill={accentColor} />
              <circle cx="150" cy="90" r="8" fill={accentColor} />
              <line x1="50" y1="30" x2="100" y2="60" stroke={accentColor} strokeWidth="2" />
              <line x1="150" y1="30" x2="100" y2="60" stroke={accentColor} strokeWidth="2" />
              <line x1="50" y1="90" x2="100" y2="60" stroke={accentColor} strokeWidth="2" />
              <line x1="150" y1="90" x2="100" y2="60" stroke={accentColor} strokeWidth="2" />
            </svg>
          </div>
        );
      case 'cloud':
        return (
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-20">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <path d="M50,80 Q30,80 30,60 Q30,40 50,40 Q50,20 80,20 Q110,20 110,40 Q130,40 130,60 Q130,80 110,80 Z" 
                    fill={accentColor} />
              <circle cx="60" cy="50" r="3" fill="white" />
              <circle cx="80" cy="50" r="3" fill="white" />
              <circle cx="100" cy="50" r="3" fill="white" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`relative bg-gradient-to-br from-gray-50 to-white ${isHomepage ? 'pt-20' : 'pt-40'} pb-16 overflow-hidden`}>
      {renderBackgroundPattern()}
      {renderGraph()}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex px-3 py-1.5 text-sm text-[#1f2937] border border-[#e5e7eb] rounded-full font-pj mb-4">
            {subtitle}
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1f2937] font-pj">
            {title}
          </h1>
          
          <p className="text-base md:text-lg text-[#6b7280] mb-8 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
              style={{ backgroundColor: accentColor }}
            >
              {primaryButtonText}
            </a>
            
            {secondaryButtonText && secondaryButtonLink && (
              <a
                href={secondaryButtonLink}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-white border-2 rounded-full hover:bg-gray-50 transition-colors"
                style={{ 
                  color: accentColor, 
                  borderColor: accentColor 
                }}
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
