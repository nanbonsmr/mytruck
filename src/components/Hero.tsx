import { motion } from 'motion/react';
import { Bell, Check, MapPin } from 'lucide-react';
import { APP_SCREENSHOTS } from '../data/brandData';
import { ImageFrame } from './ImageFrame';
import { PlayStoreIcon } from './PlayStoreIcon';

interface HeroProps {
  onOpenDownload: () => void;
}

export function Hero({ onOpenDownload }: HeroProps) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF7F0] pt-7 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Headline, supporting copy, Play Store Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 lg:pr-4"
          >
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#168A7B]">
              MyTruck Delivery &nbsp;·&nbsp; Android &amp; Google Play
            </p>

            <h1 className="mt-3 sm:mt-4 font-display text-[clamp(2.15rem,7.2vw,4.15rem)] font-extrabold leading-[1.04] tracking-[-0.025em] text-[#153D2C] text-balance">
              Local delivery, organized clearly in one place.
            </h1>

            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#4A5B52]">
              Browse nearby businesses, manage your cart and delivery address, and follow live map tracking from confirmation to drop-off on Android.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-3.5">
              <button
                type="button"
                onClick={onOpenDownload}
                className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#153D2C] px-6 py-3 text-[#FAF7F0] shadow-sm hover:bg-[#0F2D20] active:translate-y-px transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <PlayStoreIcon className="h-6 w-6 shrink-0" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-[#FAF7F0]/75">
                    Download on
                  </span>
                  <span className="block font-display text-base font-bold">
                    Google Play
                  </span>
                </span>
              </button>

              <a
                href="#app-showcase"
                className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-[#153D2C]/20 bg-[#F3EDE0] px-6 py-3.5 text-base font-semibold text-[#153D2C] hover:bg-[#EAE1CE] active:translate-y-px transition-all duration-150 whitespace-nowrap"
              >
                <span>Preview screens</span>
              </a>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#153D2C]/10 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 text-xs sm:text-sm text-[#4A5B52]">
              <span>Live route tracking</span>
              <span aria-hidden="true" className="text-[#153D2C]/30">·</span>
              <span>Order status alerts</span>
              <span aria-hidden="true" className="text-[#153D2C]/30">·</span>
              <span>Availability varies by area</span>
            </div>
          </motion.div>

          {/* Right column: Dual layered app screens + pure status card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-[540px] lg:max-w-none pt-2 pb-4 sm:pt-4 sm:pb-8">
              {/* Architectural backdrop shapes */}
              <div
                aria-hidden="true"
                className="absolute inset-x-4 top-6 bottom-6 rounded-[2rem] bg-[#EAE2D0]"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block absolute left-2 bottom-2 h-32 w-32 rounded-3xl bg-[#153D2C]"
              />
              <div
                aria-hidden="true"
                className="hidden sm:block absolute right-4 top-2 h-24 w-24 rounded-2xl bg-[#168A7B]/20"
              />

              {/* Dual real smartphone showcase composition */}
              <div className="relative z-10 grid grid-cols-12 items-center gap-3 sm:gap-5 px-2 sm:px-6">
                {/* Primary Phone: Home & Discovery */}
                <div className="col-span-6 flex flex-col items-center">
                  <div
                    className="w-full max-w-[235px] rounded-[1.8rem] sm:rounded-[2.3rem] bg-[#153D2C] p-1.5 sm:p-2 shadow-2xl border border-[#0F2D20]"
                    aria-label="MyTruck Delivery home screen"
                  >
                    <div className="rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden bg-white">
                      <ImageFrame
                        src={APP_SCREENSHOTS.homeDiscovery}
                        alt="MyTruck Delivery home screen with address selector, search bar, and category tiles"
                        className="aspect-[9/19.2] w-full"
                        imgClassName="h-full w-full object-cover object-top"
                        fallbackLabel="MyTruck Delivery Home"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Secondary Phone: Live Tracking */}
                <div className="col-span-6 flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-10">
                  <div
                    className="w-full max-w-[225px] mx-auto rounded-[1.8rem] sm:rounded-[2.2rem] bg-[#153D2C] p-1.5 sm:p-2 shadow-2xl border border-[#0F2D20]"
                    aria-label="MyTruck Delivery live tracking screen"
                  >
                    <div className="rounded-[1.4rem] sm:rounded-[1.75rem] overflow-hidden bg-white">
                      <ImageFrame
                        src={APP_SCREENSHOTS.trackOrder}
                        alt="MyTruck Delivery live order tracking screen showing route map and delivery progress"
                        className="aspect-[9/19.2] w-full"
                        imgClassName="h-full w-full object-cover object-top"
                        fallbackLabel="Live Tracking Screen"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Status Card */}
              <div className="relative z-20 mx-auto mt-4 sm:mt-0 sm:absolute sm:left-4 sm:bottom-0 w-[92%] sm:w-[270px] rounded-2xl bg-white p-3.5 sm:p-4 shadow-lg border border-[#153D2C]/12">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#168A7B]/12 text-[#168A7B] shrink-0">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#153D2C] truncate">
                        Live Order Tracking
                      </p>
                      <p className="text-[11px] text-[#4A5B52] truncate">
                        Route &amp; milestone updates
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#E06526]/12 text-[#E06526] shrink-0">
                    <Bell className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-medium text-[#153D2C]">
                    <span className="inline-flex items-center gap-0.5 whitespace-nowrap">
                      <Check className="h-3 w-3 text-[#168A7B]" aria-hidden="true" />
                      Confirmed
                    </span>
                    <span className="text-[#168A7B] font-semibold whitespace-nowrap">
                      On route
                    </span>
                    <span className="text-[#4A5B52]/70 whitespace-nowrap">Delivered</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#EAE2D0] overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-[#168A7B]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
