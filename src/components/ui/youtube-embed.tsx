import React, { useState, useRef, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  autoplay?: boolean;
  showControls?: boolean;
  showInfo?: boolean;
  enablePrivacyMode?: boolean;
  lazyLoad?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title = 'YouTube Video',
  className = '',
  autoplay = false,
  showControls = true,
  showInfo = false,
  enablePrivacyMode = true,
  lazyLoad = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(!lazyLoad);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract video ID from URL if full URL is provided
  const extractVideoId = (url: string): string => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : url;
  };

  const cleanVideoId = extractVideoId(videoId);

  // Build YouTube URL with parameters
  const buildYouTubeUrl = (): string => {
    const baseUrl = enablePrivacyMode 
      ? 'https://www.youtube-nocookie.com/embed/' 
      : 'https://www.youtube.com/embed/';
    
    const params = new URLSearchParams({
      rel: '0', // Disable related videos
      modestbranding: '1', // Minimal YouTube branding
      controls: showControls ? '1' : '0',
      showinfo: showInfo ? '1' : '0',
      autoplay: autoplay ? '1' : '0',
      enablejsapi: '1', // Enable JavaScript API
      origin: typeof window !== 'undefined' ? window.location.origin : '',
    });

    return `${baseUrl}${cleanVideoId}?${params.toString()}`;
  };

  const handleLoadVideo = () => {
    if (!isLoaded) {
      setIsLoading(true);
      setIsLoaded(true);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazyLoad || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            handleLoadVideo();
          }
        });
      },
      { threshold: 0.1 }
    );

    const container = iframeRef.current?.parentElement;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [lazyLoad, isLoaded]);

  if (hasError) {
    return (
      <div className={`relative w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-6">
          <div className="text-red-500 mb-2">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">Failed to load video</p>
          <p className="text-gray-500 text-sm mt-1">Please check your connection and try again</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg ${className}`}>
      {!isLoaded ? (
        // Thumbnail/Placeholder
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center cursor-pointer group"
          onClick={handleLoadVideo}
        >
          {/* YouTube Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => {
              // Fallback to standard quality thumbnail
              e.currentTarget.src = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Play Button Overlay */}
          <div className="relative z-10 bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full p-4 group-hover:scale-110 transform transition-transform">
            <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>
          
          {/* YouTube Logo */}
          <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-white text-xs font-semibold">
            YouTube
          </div>
        </div>
      ) : (
        <>
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}
          
          {/* YouTube Iframe */}
          <iframe
            ref={iframeRef}
            src={buildYouTubeUrl()}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </>
      )}
    </div>
  );
};

export default YouTubeEmbed;