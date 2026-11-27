import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import { FaqAndCta } from './components/FaqAndCta';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { DeleteAccount } from './components/DeleteAccount';

type PageRoute = 'home' | 'privacy' | 'terms' | 'delete-account';

function resolveRouteFromUrl(): PageRoute {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/privacy-policy' ||
    path === '/privacy' ||
    hash === '#privacy-policy' ||
    hash === '#privacy'
  ) {
    return 'privacy';
  }

  if (
    path === '/terms-of-service' ||
    path === '/terms' ||
    hash === '#terms-of-service' ||
    hash === '#terms'
  ) {
    return 'terms';
  }

  if (
    path === '/delete-account' ||
    path === '/delete' ||
    hash === '#delete-account' ||
    hash === '#delete'
  ) {
    return 'delete-account';
  }

  return 'home';
}

export default function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageRoute>(() =>
    resolveRouteFromUrl()
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPage(resolveRouteFromUrl());
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const navigateToPrivacy = () => {
    if (window.location.pathname !== '/privacy-policy') {
      window.history.pushState({}, '', '/privacy-policy');
    }
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    if (window.location.pathname !== '/terms-of-service') {
      window.history.pushState({}, '', '/terms-of-service');
    }
    setCurrentPage('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDeleteAccount = () => {
    if (window.location.pathname !== '/delete-account') {
      window.history.pushState({}, '', '/delete-account');
    }
    setCurrentPage('delete-account');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (sectionHash?: string) => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', sectionHash ? `/${sectionHash}` : '/');
    } else if (sectionHash) {
      window.history.replaceState({}, '', sectionHash);
    }
    setCurrentPage('home');

    if (sectionHash && sectionHash !== '#top') {
      const targetId = sectionHash.replace('#', '');
      requestAnimationFrame(() => {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 40);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openDownload = () => setDownloadOpen(true);
  const closeDownload = () => setDownloadOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#16241D]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-[#153D2C] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#FAF7F0]"
      >
        Skip to main content
      </a>

      <Header
        onOpenDownload={openDownload}
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigatePrivacy={navigateToPrivacy}
        onNavigateTerms={navigateToTerms}
      />

      <main id="main-content" className="flex-1">
        {currentPage === 'privacy' ? (
          <PrivacyPolicy
            onBackHome={() => navigateToHome('#top')}
            onNavigateDeleteAccount={navigateToDeleteAccount}
          />
        ) : currentPage === 'terms' ? (
          <TermsOfService
            onBackHome={() => navigateToHome('#top')}
            onNavigatePrivacy={navigateToPrivacy}
            onNavigateDeleteAccount={navigateToDeleteAccount}
          />
        ) : currentPage === 'delete-account' ? (
          <DeleteAccount
            onBackHome={() => navigateToHome('#top')}
            onNavigatePrivacy={navigateToPrivacy}
          />
        ) : (
          <>
            <Hero onOpenDownload={openDownload} />
            <HowItWorks />
            <AppShowcase />
            <FaqAndCta onOpenDownload={openDownload} />
          </>
        )}
      </main>

      <Footer
        onOpenDownload={openDownload}
        onNavigateHome={navigateToHome}
        onNavigatePrivacy={navigateToPrivacy}
        onNavigateTerms={navigateToTerms}
        onNavigateDeleteAccount={navigateToDeleteAccount}
      />

      <DownloadModal isOpen={downloadOpen} onClose={closeDownload} />
    </div>
  );
}
