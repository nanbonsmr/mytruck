import { useEffect, useState, type MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { PlayStoreIcon } from './PlayStoreIcon';
import { NAV_ITEMS } from '../data/brandData';

interface HeaderProps {
  onOpenDownload: () => void;
  currentPage: 'home' | 'privacy' | 'terms' | 'delete-account';
  onNavigateHome: (sectionHash?: string) => void;
  onNavigatePrivacy: () => void;
  onNavigateTerms: () => void;
}

export function Header({
  onOpenDownload,
  currentPage,
  onNavigateHome,
  onNavigatePrivacy,
  onNavigateTerms,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '/privacy-policy') {
      onNavigatePrivacy();
    } else if (href === '/terms-of-service') {
      onNavigateTerms();
    } else {
      onNavigateHome(href);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#153D2C]/10">
      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-6 lg:gap-8">
          {/* Zone 1: Brand wordmark + logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              onNavigateHome('#top');
            }}
            className="whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-[#168A7B]"
            aria-label="MyTruck Delivery home"
          >
            <BrandMark size="sm" />
          </a>

          {/* Zone 2: Single-line center navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-7"
            aria-label="Primary navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                (currentPage === 'privacy' && item.href === '/privacy-policy') ||
                (currentPage === 'terms' && item.href === '/terms-of-service');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#153D2C] border-[#168A7B]'
                      : 'text-[#37483F] border-transparent hover:text-[#153D2C] hover:border-[#168A7B]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Download action with Play Store logo + mobile menu button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenDownload}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-xl bg-[#153D2C] px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#FAF7F0] shadow-xs hover:bg-[#0F2D20] active:translate-y-px transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <PlayStoreIcon className="h-4 w-4 shrink-0" />
              <span>Download</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#153D2C]/15 bg-[#F3EDE0] text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden max-h-[82vh] overflow-y-auto border-t border-[#153D2C]/10 bg-[#FAF7F0] px-4 pb-5 pt-3 shadow-lg"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex min-h-[46px] items-center justify-between rounded-xl px-3.5 text-base font-medium text-[#16241D] hover:bg-[#F3EDE0] hover:text-[#153D2C] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-[#168A7B]/70" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-[#153D2C]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="flex w-full min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#153D2C] px-5 py-3 text-base font-semibold text-[#FAF7F0] hover:bg-[#0F2D20] transition-colors cursor-pointer"
            >
              <PlayStoreIcon className="h-5 w-5 shrink-0" />
              <span>Download on Google Play</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
