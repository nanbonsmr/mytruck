import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function ImageFrame({
  src,
  alt,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  fallbackLabel = 'Local neighborhood delivery',
  priority = false,
}: ImageFrameProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[#EDE6D8] text-[#153D2C] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="h-11 w-11 rounded-xl bg-[#153D2C]/10 flex items-center justify-center text-[#153D2C]">
          <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-[#153D2C]">{fallbackLabel}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#EDE6D8] ${className}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={imgClassName}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  );
}
