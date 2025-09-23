import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  accentColor?: string;
  backgroundPattern?: 'dots' | 'grid' | 'waves' | 'circuits';
  showGraph?: boolean;
  graphType?: 'bar' | 'line' | 'pie' | 'network' | 'cloud';
  isHomepage?: boolean;
  isAboutUs?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  accentColor = '#3B82F6',
  backgroundPattern = 'dots',
  showGraph = true,
  graphType = 'bar',
  isHomepage = false,
  isAboutUs = false
}) => {
  const renderBackgroundPattern = () => {
    const opacity = isHomepage ? 'opacity-5' : 'opacity-10';
    switch (backgroundPattern) {
      case 'dots':
        return (
          <div className={`absolute inset-0 ${opacity}`}>
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, ${accentColor} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        );
      case 'grid':
        return (
          <div className={`absolute inset-0 ${opacity}`}>
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${accentColor} 1px, transparent 1px), linear-gradient(90deg, ${accentColor} 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
        );
      case 'waves':
        return (
          <div className={`absolute inset-0 ${isHomepage ? 'opacity-10' : 'opacity-15'}`}>
            <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,100 Q250,50 500,100 T1000,100 L1000,200 L0,200 Z" fill={accentColor} />
            </svg>
          </div>
        );
      case 'circuits':
        return (
          <div className={`absolute inset-0 ${opacity}`}>
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
    const graphOpacity = isHomepage ? 'opacity-20' : 'opacity-30';

    switch (graphType) {
      case 'bar':
        return (
          <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${graphOpacity}`}>
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
          <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${graphOpacity}`}>
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
          <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${graphOpacity}`}>
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
          <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${graphOpacity}`}>
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
          <div className={`absolute right-8 top-1/2 transform -translate-y-1/2 ${graphOpacity}`}>
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
    <section className={`relative bg-[#0A0A0A] ${isHomepage ? 'pt-20 md:pt-24' : isAboutUs ? 'pt-32 md:pt-44' : 'pt-24 md:pt-28'} pb-12 md:pb-16 overflow-hidden`} id="hero-section">
      {renderBackgroundPattern()}
      {renderGraph()}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="inline-flex px-3 py-1.5 text-sm text-[#e7e7e7] border border-[#1E293B] rounded-full font-pj mb-4 bg-[#1E293B]">
            {subtitle}
          </p>
          
          <h1 className={`${isHomepage ? 'hero-title' : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6'} text-primary`}>
            {title}
          </h1>
          
          <p className={`${isHomepage ? 'hero-description' : 'text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 opacity-90'} text-secondary max-w-2xl mx-auto`}>
            {description}
          </p>
          
          {(primaryButtonText && primaryButtonLink) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-2xl mx-auto">
              <a
                href={primaryButtonLink}
                className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl transition-all duration-200 hover:bg-[#2563eb]"
                style={{ backgroundColor: '#3B82F6' }}
              >
                {primaryButtonText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center w-full sm:w-1/2 px-8 py-4 text-base font-semibold text-[#e7e7e7] border-2 border-[#1E293B] hover:border-[#3B82F6] rounded-xl transition-all duration-200 hover:text-[#3B82F6]"
                >
                  {secondaryButtonText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
