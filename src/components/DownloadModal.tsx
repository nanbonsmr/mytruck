import { useEffect } from 'react';
import { X, ExternalLink, Check } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { PlayStoreIcon } from './PlayStoreIcon';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#0F2D20]/60 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#FAF7F0] p-6 sm:p-8 shadow-2xl border border-[#153D2C]/15 text-[#16241D]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <BrandMark size="sm" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close download dialog"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#4A5B52] hover:bg-[#F3EDE0] hover:text-[#153D2C] transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6">
          <h3
            id="download-modal-title"
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#153D2C]"
          >
            Download MyTruck Delivery
          </h3>
          <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
            MyTruck Delivery for Android is publishing on Google Play. No signup or email is needed here—download directly from the Play Store once the release listing is live.
          </p>

          <ul className="mt-5 space-y-2.5 rounded-2xl bg-[#F3EDE0] p-4 border border-[#153D2C]/10 text-xs sm:text-sm text-[#153D2C]">
            <li className="flex items-center gap-2.5">
              <Check className="h-4 w-4 text-[#168A7B] shrink-0" aria-hidden="true" />
              <span>Browse local businesses and categories</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="h-4 w-4 text-[#168A7B] shrink-0" aria-hidden="true" />
              <span>Track orders live on the route map</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Check className="h-4 w-4 text-[#168A7B] shrink-0" aria-hidden="true" />
              <span>Manage saved addresses and order history</span>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-[#153D2C] px-6 py-3.5 text-[#FAF7F0] shadow-sm hover:bg-[#0F2D20] transition-colors"
            >
              <PlayStoreIcon className="h-6 w-6 shrink-0" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] font-medium uppercase tracking-wider text-[#FAF7F0]/75">
                  Get it on
                </span>
                <span className="block font-display text-base font-bold">
                  Google Play
                </span>
              </span>
              <ExternalLink className="ml-auto h-4 w-4 text-[#1FA594] shrink-0" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full min-h-[44px] rounded-xl border border-[#153D2C]/15 bg-[#F3EDE0] px-5 py-2.5 text-sm font-semibold text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
