import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  thumbnail?: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title, thumbnail, className = "" }: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Gera thumbnail automática do YouTube se não fornecida
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const thumbnailUrl = thumbnail || defaultThumbnail;

  const handlePlay = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative aspect-video bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {!isLoaded ? (
        <div className="relative w-full h-full group cursor-pointer" onClick={handlePlay}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <Button
              size="lg"
              className="bg-church-primary hover:bg-church-primary/80 text-white rounded-full w-16 h-16 p-0 shadow-elegant"
            >
              <Play className="h-6 w-6 ml-1" fill="currentColor" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default YouTubeEmbed;