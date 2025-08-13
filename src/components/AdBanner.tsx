import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    // Create script element for ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      atOptions = {
        'key' : '52695e8db694c76f0b9c4326f40f1398',
        'format' : 'iframe',
        'height' : 300,
        'width' : 160,
        'params' : {}
      };
    `;
    document.head.appendChild(script);

    // Create invoke script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/52695e8db694c76f0b9c4326f40f1398/invoke.js';
    document.head.appendChild(invokeScript);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script);
      document.head.removeChild(invokeScript);
    };
  }, []);

  return (
    <div className="flex justify-center py-8">
      <div className="bg-card/20 backdrop-blur-sm border border-border rounded-lg p-4">
        <div className="text-center mb-2">
          <span className="text-xs text-muted-foreground">Advertisement</span>
        </div>
        <div id="ad-container" className="flex justify-center">
          {/* Ad will be injected here by the script */}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;