import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { APP_SCREENSHOTS, FAQ_ITEMS } from '../data/brandData';
import { ImageFrame } from './ImageFrame';
import { PlayStoreIcon } from './PlayStoreIcon';

interface FaqAndCtaProps {
  onOpenDownload: () => void;
}

export function FaqAndCta({ onOpenDownload }: FaqAndCtaProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#FAF7F0] pb-14 sm:pb-24">
      {/* Compact FAQ */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 sm:pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#168A7B]">Questions &amp; answers</p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#153D2C]">
            Straight answers before you download.
          </h2>
        </div>

        <div className="mt-8 sm:mt-10 divide-y divide-[#153D2C]/12 border-y border-[#153D2C]/12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question} className="py-1">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 sm:gap-6 py-4 sm:py-5 text-left cursor-pointer group"
                >
                  <span className="font-display text-base sm:text-xl font-semibold text-[#153D2C] group-hover:text-[#168A7B] transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#153D2C] text-[#FAF7F0]'
                        : 'bg-[#F3EDE0] text-[#153D2C] group-hover:bg-[#EAE1CE]'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-5 pr-2 sm:pr-12 text-sm sm:text-base leading-relaxed text-[#4A5B52]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bold Forest-Green Call-to-Action Panel */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.75rem] sm:rounded-[2.25rem] bg-[#153D2C] text-[#FAF7F0] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 p-6 sm:p-12 lg:p-14 flex flex-col justify-center">
              <p className="text-sm font-semibold text-[#1FA594]">
                Available for Android
              </p>
              <h2 className="mt-2.5 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-[#FAF7F0] text-balance">
                Download MyTruck Delivery on Google Play.
              </h2>
              <p className="mt-3.5 sm:mt-4 max-w-xl text-sm sm:text-lg leading-relaxed text-[#FAF7F0]/80">
                Get quick local browsing, saved delivery addresses, live route tracking, and clear order history directly on your phone.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={onOpenDownload}
                  className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#E06526] px-6 py-3 text-white shadow-sm hover:bg-[#C95419] active:translate-y-px transition-all duration-150 cursor-pointer whitespace-nowrap"
                >
                  <PlayStoreIcon className="h-6 w-6 shrink-0" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] font-medium uppercase tracking-wider text-white/85">
                      Download on
                    </span>
                    <span className="block font-display text-base font-bold">
                      Google Play
                    </span>
                  </span>
                </button>
                <a
                  href="#app-showcase"
                  className="inline-flex min-h-[54px] w-full sm:w-auto items-center justify-center rounded-2xl border border-[#FAF7F0]/25 px-6 py-3.5 text-base font-semibold text-[#FAF7F0] hover:bg-[#FAF7F0]/10 transition-colors whitespace-nowrap"
                >
                  Explore screens
                </a>
              </div>

              <p className="mt-5 sm:mt-6 text-xs text-[#FAF7F0]/65">
                Availability, participating businesses, and payment methods depend on your delivery location.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0F2D20] px-6 py-8 sm:p-10 flex items-center justify-center">
              <div className="w-[205px] sm:w-[235px] rounded-[2rem] bg-[#FAF7F0]/10 p-2 shadow-2xl border border-[#FAF7F0]/15">
                <div className="rounded-[1.55rem] overflow-hidden bg-white">
                  <ImageFrame
                    src={APP_SCREENSHOTS.myOrders}
                    alt="MyTruck Delivery My Orders screen showing order history and active status"
                    className="aspect-[9/19.2] w-full"
                    imgClassName="h-full w-full object-cover object-top"
                    fallbackLabel="MyTruck Delivery Order History"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
