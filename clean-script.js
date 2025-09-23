        // Download functionality for logos
        function downloadLogo(type, format) {
            const svgContent = generateSVG(type);
            
            if (format === 'svg') {
                downloadSVG(svgContent, `zivara-${type}-logo.svg`);
            } else if (format === 'png') {
                downloadPNG(svgContent, `zivara-${type}-logo.png`);
            }
        }

        function generateSVG(type) {
            const size = 800; // High resolution SVG
            let svgContent = `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">`;
            
            // Determine color based on logo type
            let color = "#3B82F6"; // Default blue
            if (type.includes('black') || type.includes('monochrome-black')) {
                color = "#000000";
            } else if (type.includes('white') || type.includes('monochrome-white')) {
                color = "#FFFFFF";
            }
            
            // All logo types now use the minimalist Z design with transparent background
            svgContent += `
                <!-- Flowing connection lines -->
                <path d="M20 20 Q60 40 100 20" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
                <path d="M20 100 Q60 80 100 100" stroke="${color}" stroke-width="6" fill="none" stroke-linecap="round"/>
                
                <!-- Main Z shape - bold and geometric -->
                <path d="M25 25 L95 25 L25 95 L95 95" stroke="${color}" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                
                <!-- Subtle flowing accent lines -->
                <path d="M30 30 Q60 50 90 30" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
                <path d="M30 90 Q60 70 90 90" stroke="${color}" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
                
                <!-- Connection dots -->
                <circle cx="25" cy="25" r="6" fill="${color}"/>
                <circle cx="95" cy="25" r="6" fill="${color}"/>
                <circle cx="25" cy="95" r="6" fill="${color}"/>
                <circle cx="95" cy="95" r="6" fill="${color}"/>
            `;
            
            svgContent += '</svg>';
            return svgContent;
        }

        function downloadSVG(svgContent, filename) {
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        function downloadPNG(svgContent, filename) {
            // Create a canvas
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 800;
            
            // Convert SVG to image
            const svgBlob = new Blob([svgContent], {type: 'image/svg+xml;charset=utf-8'});
            const svgUrl = URL.createObjectURL(svgBlob);
            
            const img = new Image();
            img.onload = function() {
                // Clear canvas with transparent background
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw the image at high resolution
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                
                // Convert to PNG and download
                canvas.toBlob(function(blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }, 'image/png', 1.0); // High quality
                
                URL.revokeObjectURL(svgUrl);
            };
            img.src = svgUrl;
        }
