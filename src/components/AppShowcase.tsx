import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { APP_SCREENSHOTS } from '../data/brandData';
import { ImageFrame } from './ImageFrame';

type ScreenId = 'all' | 'discovery' | 'listings' | 'cart' | 'tracking' | 'orders';

interface ShowcaseScreen {
  id: Exclude<ScreenId, 'all'>;
  number: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

const SHOWCASE_SCREENS: ShowcaseScreen[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Home & discovery',
    description:
      'Set your delivery address, switch between Food, Shops, and Packages, and browse participating local businesses.',
    src: APP_SCREENSHOTS.homeDiscovery,
    alt: 'MyTruck Delivery home screen showing delivery address, category tabs, and local business discovery',
  },
  {
    id: 'listings',
    number: '02',
    title: 'Business listings & search',
    description:
      'View open hours, check location details, search a business catalog, and add items directly to your cart.',
    src: APP_SCREENSHOTS.restaurantMenu,
    alt: 'MyTruck Delivery business listing screen showing search input, open hours, and Add to cart controls',
  },
  {
    id: 'cart',
    number: '03',
    title: 'Item & cart options',
    description:
      'Adjust item quantities, enter custom delivery or preparation instructions, and confirm before adding to your cart.',
    src: APP_SCREENSHOTS.confirmItem,
    alt: 'Confirm Item modal in MyTruck Delivery with quantity stepper, instructions field, and Add to Cart action',
  },
  {
    id: 'tracking',
    number: '04',
    title: 'Live order tracking',
    description:
      'View pickup and drop-off locations on the route map with clear confirmation steps and courier progress.',
    src: APP_SCREENSHOTS.trackOrder,
    alt: 'Track Order screen in MyTruck Delivery displaying live map route, pickup and destination addresses, and confirmation status',
  },
  {
    id: 'orders',
    number: '05',
    title: 'Order history & status',
    description:
      'Filter active, completed, or cancelled orders, review supported payment methods, and view order details.',
    src: APP_SCREENSHOTS.myOrders,
    alt: 'My Orders screen in MyTruck Delivery listing active orders, status badges, and payment method details',
  },
];

const SCREEN_FILTERS: { id: ScreenId; label: string }[] = [
  { id: 'all', label: 'All 5 screens' },
  { id: 'discovery', label: 'Home & discovery' },
  { id: 'listings', label: 'Listings & search' },
  { id: 'cart', label: 'Item & cart' },
  { id: 'tracking', label: 'Order tracking' },
  { id: 'orders', label: 'Order history' },
];

export function AppShowcase() {
  const [activeFilter, setActiveFilter] = useState<ScreenId>('all');
  const [inspectedIndex, setInspectedIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const visibleScreens =
    activeFilter === 'all'
      ? SHOWCASE_SCREENS
      : SHOWCASE_SCREENS.filter((s) => s.id === activeFilter);

  const inspectedScreen =
    inspectedIndex !== null ? SHOWCASE_SCREENS[inspectedIndex] ?? null : null;

  useEffect(() => {
    if (inspectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setInspectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setInspectedIndex((prev) =>
          prev !== null ? (prev + 1) % SHOWCASE_SCREENS.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setInspectedIndex((prev) =>
          prev !== null
            ? (prev - 1 + SHOWCASE_SCREENS.length) % SHOWCASE_SCREENS.length
            : null
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [inspectedIndex]);

  const handleCarouselScroll = () => {
    const container = carouselRef.current;
    if (!container || activeFilter !== 'all') return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - containerCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setCarouselIndex(closestIdx);
  };

  const scrollToSlide = (targetIndex: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(SHOWCASE_SCREENS.length - 1, targetIndex));
    const targetChild = container.children[clamped] as HTMLElement | undefined;
    if (targetChild) {
      targetChild.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setCarouselIndex(clamped);
    }
  };

  const handleFilterClick = (id: ScreenId) => {
    setActiveFilter(id);
    setCarouselIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0 });
    }
  };

  return (
    <section
      id="app-showcase"
      className="relative overflow-hidden bg-[#F3EDE0] border-y border-[#153D2C]/10 py-14 sm:py-24"
    >
      {/* Light editorial geometric background shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 left-1/2 -translate-x-1/2 h-[540px] w-[94%] max-w-6xl rounded-[2.5rem] sm:rounded-[3rem] bg-[#FAF7F0]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#168A7B]">Inside the app</p>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#153D2C] text-balance">
              Explore every screen of the MyTruck Delivery app.
            </h2>
          </div>

          {/* Interactive screen focus switcher */}
          <div
            className="-mx-4 px-4 sm:mx-0 sm:px-0 flex flex-nowrap overflow-x-auto no-scrollbar sm:flex-wrap gap-2"
            role="tablist"
            aria-label="Filter app screens"
          >
            {SCREEN_FILTERS.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`min-h-[42px] sm:min-h-[40px] rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#153D2C] text-[#FAF7F0]'
                      : 'bg-[#FAF7F0] text-[#153D2C] border border-[#153D2C]/12 hover:bg-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile scroll-snap carousel when showing all 5 screens; editorial wrapped grid on md+ */}
        <div
          ref={carouselRef}
          onScroll={handleCarouselScroll}
          className={`mt-10 sm:mt-14 ${
            activeFilter === 'all'
              ? 'flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 -mx-4 px-6 pb-2 no-scrollbar md:mx-0 md:px-0 md:pb-0 md:overflow-visible md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-12'
              : 'flex flex-wrap justify-center gap-x-8 gap-y-12'
          }`}
        >
          {visibleScreens.map((screen) => {
            const globalIdx = SHOWCASE_SCREENS.findIndex((s) => s.id === screen.id);
            return (
              <figure
                key={screen.id}
                className={`flex flex-col items-center ${
                  activeFilter === 'all'
                    ? 'w-[76vw] max-w-[275px] sm:w-[280px] md:w-[290px] shrink-0 snap-center'
                    : 'w-full max-w-[280px] sm:max-w-[290px]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setInspectedIndex(globalIdx)}
                  aria-label={`Inspect ${screen.title} screen larger`}
                  className="group relative w-full rounded-[2.25rem] sm:rounded-[2.5rem] bg-[#153D2C] p-2 sm:p-2.5 shadow-xl border border-[#0F2D20] transition-transform duration-200 hover:-translate-y-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#168A7B]"
                >
                  <div className="relative rounded-[1.8rem] sm:rounded-[1.95rem] overflow-hidden bg-white">
                    <ImageFrame
                      src={screen.src}
                      alt={screen.alt}
                      className="aspect-[9/19.2] w-full"
                      imgClassName="h-full w-full object-cover object-top"
                      fallbackLabel={screen.title}
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#153D2C]/90 text-[#FAF7F0] opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-150 shadow-md"
                  >
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                </button>

                <figcaption className="mt-4 sm:mt-5 max-w-[275px] text-center">
                  <p className="text-xs font-semibold text-[#168A7B] tabular-nums">
                    {screen.number} &nbsp;·&nbsp; {screen.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#4A5B52]">
                    {screen.description}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Mobile carousel pagination & prev/next controls */}
        {activeFilter === 'all' && (
          <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => scrollToSlide(carouselIndex - 1)}
              disabled={carouselIndex === 0}
              aria-label="Previous app screen"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#153D2C]/15 bg-[#FAF7F0] text-[#153D2C] disabled:opacity-35 cursor-pointer disabled:cursor-default"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2" aria-label="Screen slide indicator">
              {SHOWCASE_SCREENS.map((screen, idx) => (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => scrollToSlide(idx)}
                  aria-label={`Show screen ${idx + 1}: ${screen.title}`}
                  aria-current={carouselIndex === idx ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-150 cursor-pointer ${
                    carouselIndex === idx
                      ? 'w-7 bg-[#153D2C]'
                      : 'w-2.5 bg-[#153D2C]/25'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSlide(carouselIndex + 1)}
              disabled={carouselIndex === SHOWCASE_SCREENS.length - 1}
              aria-label="Next app screen"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#153D2C]/15 bg-[#FAF7F0] text-[#153D2C] disabled:opacity-35 cursor-pointer disabled:cursor-default"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox modal for inspecting any real app screen at full clarity with prev/next cycling */}
      {inspectedScreen && inspectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2D20]/80 backdrop-blur-xs p-3 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="screen-lightbox-title"
          onClick={() => setInspectedIndex(null)}
        >
          <div
            className="relative w-full max-w-md max-h-[94vh] overflow-y-auto rounded-3xl bg-[#FAF7F0] p-4 sm:p-6 shadow-2xl border border-[#153D2C]/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#153D2C]/10">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#168A7B] tabular-nums">
                  Screen {inspectedScreen.number} of 0{SHOWCASE_SCREENS.length}
                </p>
                <h3
                  id="screen-lightbox-title"
                  className="font-display text-lg font-bold text-[#153D2C] truncate"
                >
                  {inspectedScreen.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectedIndex(null)}
                aria-label="Close screen preview"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#4A5B52] hover:bg-[#F3EDE0] hover:text-[#153D2C] transition-colors cursor-pointer shrink-0"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() =>
                  setInspectedIndex(
                    (inspectedIndex - 1 + SHOWCASE_SCREENS.length) % SHOWCASE_SCREENS.length
                  )
                }
                aria-label="Previous screen"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3EDE0] text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer shrink-0"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="w-[210px] sm:w-[260px] rounded-[1.85rem] sm:rounded-[2rem] bg-[#153D2C] p-2 shadow-lg shrink-0">
                <div className="rounded-[1.45rem] sm:rounded-[1.55rem] overflow-hidden bg-white">
                  <ImageFrame
                    src={inspectedScreen.src}
                    alt={inspectedScreen.alt}
                    className="aspect-[9/19.2] w-full"
                    imgClassName="h-full w-full object-cover object-top"
                    fallbackLabel={inspectedScreen.title}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setInspectedIndex((inspectedIndex + 1) % SHOWCASE_SCREENS.length)
                }
                aria-label="Next screen"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3EDE0] text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer shrink-0"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-center text-xs sm:text-sm text-[#4A5B52]">
              {inspectedScreen.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
