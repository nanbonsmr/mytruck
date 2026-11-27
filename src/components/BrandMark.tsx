import { useState } from 'react';

interface BrandMarkProps {
  inverted?: boolean;
  size?: 'sm' | 'md';
}

export const BRAND_LOGO_URL = '/assets/aistudio/icon_9de8c52f.png';

export function BrandMark({ inverted = false, size = 'md' }: BrandMarkProps) {
  const [imgError, setImgError] = useState(false);
  const iconSize = size === 'sm' ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-9 w-9';
  const textSize = size === 'sm' ? 'text-base sm:text-[17px]' : 'text-[17px]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <span
        className={`${iconSize} inline-flex items-center justify-center overflow-hidden rounded-xl shrink-0 ${
          inverted
            ? 'ring-1 ring-[#FAF7F0]/25 bg-[#153D2C]'
            : 'ring-1 ring-[#153D2C]/15 bg-[#153D2C]'
        }`}
        aria-hidden="true"
      >
        {imgError ? (
          <span className="font-display text-xs font-extrabold text-[#FAF7F0]">
            MT
          </span>
        ) : (
          <img
            src={BRAND_LOGO_URL}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        )}
      </span>
      <span
        className={`font-display font-bold tracking-tight ${textSize} ${
          inverted ? 'text-[#FAF7F0]' : 'text-[#153D2C]'
        }`}
      >
        MyTruck Delivery
      </span>
    </span>
  );
}
