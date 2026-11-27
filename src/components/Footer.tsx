import { type MouseEvent } from 'react';
import { BrandMark } from './BrandMark';
import { PlayStoreIcon } from './PlayStoreIcon';

interface FooterProps {
  onOpenDownload: () => void;
  onNavigateHome: (sectionHash?: string) => void;
  onNavigatePrivacy: () => void;
  onNavigateTerms: () => void;
  onNavigateDeleteAccount: () => void;
}

export function Footer({
  onOpenDownload,
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateTerms,
  onNavigateDeleteAccount,
}: FooterProps) {
  const handleHomeSection = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    onNavigateHome(hash);
  };

  const handlePrivacyClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigatePrivacy();
  };

  const handleTermsClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateTerms();
  };

  const handleDeleteClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateDeleteAccount();
  };

  return (
    <footer className="bg-[#0F2D20] text-[#FAF7F0] border-t border-[#FAF7F0]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand summary & contact */}
          <div className="md:col-span-5">
            <BrandMark inverted size="sm" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#FAF7F0]/75">
              A clear, dependable platform for browsing local businesses, managing delivery addresses, and following live order progress.
            </p>
            <div className="mt-4 space-y-1 text-xs leading-relaxed text-[#FAF7F0]/80">
              <p>
                <span className="text-[#1FA594] font-semibold">Email:</span>{' '}
                <a
                  href="mailto:privacy@mytruck.com"
                  className="hover:text-[#FAF7F0] underline underline-offset-2 transition-colors"
                >
                  privacy@mytruck.com
                </a>
              </p>
              <p>
                <span className="text-[#1FA594] font-semibold">Support Email:</span>{' '}
                <a
                  href="mailto:support@mytruck.com"
                  className="hover:text-[#FAF7F0] underline underline-offset-2 transition-colors"
                >
                  support@mytruck.com
                </a>
              </p>
              <p>
                <span className="text-[#1FA594] font-semibold">Address:</span> Nekemte
              </p>
            </div>
            <p className="mt-3.5 max-w-sm text-xs leading-relaxed text-[#FAF7F0]/55">
              Availability, store selection, and supported payment methods depend on your location and participating businesses.
            </p>
          </div>

          {/* Tidy navigation columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-[#1FA594]">
                Explore
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-[#FAF7F0]/80">
                <li>
                  <a
                    href="#how-it-works"
                    onClick={(e) => handleHomeSection(e, '#how-it-works')}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleHomeSection(e, '#features')}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#app-showcase"
                    onClick={(e) => handleHomeSection(e, '#app-showcase')}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    Screens
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleHomeSection(e, '#faq')}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold tracking-wide text-[#1FA594]">
                Support &amp; Legal
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-[#FAF7F0]/80">
                <li>
                  <a
                    href="/privacy-policy"
                    onClick={handlePrivacyClick}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    onClick={handleTermsClick}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/delete-account"
                    onClick={handleDeleteClick}
                    className="inline-flex min-h-[36px] items-center hover:text-[#FAF7F0] transition-colors"
                  >
                    Account Deletion
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold tracking-wide text-[#1FA594]">
                Download
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-[#FAF7F0]/75">
                Get MyTruck Delivery for Android.
              </p>
              <button
                type="button"
                onClick={onOpenDownload}
                className="mt-3 inline-flex min-h-[46px] items-center gap-2.5 rounded-xl bg-[#153D2C] border border-[#FAF7F0]/18 px-4 py-2 text-[#FAF7F0] hover:bg-[#194A35] transition-colors cursor-pointer"
              >
                <PlayStoreIcon className="h-5 w-5 shrink-0" />
                <span className="text-left leading-tight">
                  <span className="block text-[9px] uppercase tracking-wider text-[#FAF7F0]/70">
                    Get it on
                  </span>
                  <span className="block font-display text-xs font-bold">
                    Google Play
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#FAF7F0]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs text-[#FAF7F0]/55">
          <p>© {new Date().getFullYear()} MyTruck Delivery. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="/privacy-policy"
              onClick={handlePrivacyClick}
              className="hover:text-[#FAF7F0] underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/terms-of-service"
              onClick={handleTermsClick}
              className="hover:text-[#FAF7F0] underline underline-offset-2 transition-colors"
            >
              Terms of Service
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="/delete-account"
              onClick={handleDeleteClick}
              className="hover:text-[#FAF7F0] underline underline-offset-2 transition-colors"
            >
              Account Deletion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
