import { useState } from 'react';
import {
  Search,
  LayoutGrid,
  Tag,
  ShoppingBasket,
  MapPin,
  Bell,
  Route,
  Receipt,
  CreditCard,
  X,
} from 'lucide-react';

const APP_CAPABILITY_SAMPLES = [
  {
    label: 'Address & area lookup',
    area: 'Home screen · Delivery location',
    tag: 'Location',
  },
  {
    label: 'Live map & route estimate',
    area: 'Track Order · Pickup to drop-off',
    tag: 'Tracking',
  },
  {
    label: 'Cart quantity & special notes',
    area: 'Confirm Item · Cart drawer',
    tag: 'Cart',
  },
  {
    label: 'Active, completed & cancelled filters',
    area: 'My Orders · Order history',
    tag: 'History',
  },
];

const QUICK_FILTER_CHIPS = [
  { label: 'All', value: '' },
  { label: 'Location', value: 'location' },
  { label: 'Tracking', value: 'tracking' },
  { label: 'Cart', value: 'cart' },
  { label: 'History', value: 'history' },
];

export function FeaturesBento() {
  const [query, setQuery] = useState('');

  const filteredSamples = APP_CAPABILITY_SAMPLES.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      item.label.toLowerCase().includes(q) ||
      item.area.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q)
    );
  });

  return (
    <section
      id="features"
      className="bg-[#FAF7F0] py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#168A7B]">App features</p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#153D2C] text-balance">
            Built for clear navigation from search to order history.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4A5B52]">
            Every screen inside the MyTruck Delivery app is organized around finding local businesses, managing your cart, and following live order progress.
          </p>
        </div>

        {/* Asymmetric 12-column Bento Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {/* Card 1 (7 cols): Browsing & Fast Search (App capabilities only, no food prices) */}
          <article className="lg:col-span-7 rounded-3xl bg-[#F3EDE0] p-5 sm:p-8 border border-[#153D2C]/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#153D2C] text-[#FAF7F0] shrink-0">
                  <Search className="h-5 w-5 text-[#1FA594]" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#153D2C]">
                  Browsing &amp; in-app search
                </h3>
              </div>
              <p className="mt-3 text-sm sm:text-base text-[#4A5B52] max-w-xl">
                Jump straight to what you need across Food, Shops, Packages, and past orders using quick filters and instant search.
              </p>

              {/* Quick filter buttons */}
              <div
                className="mt-4 -mx-1 px-1 flex flex-nowrap overflow-x-auto no-scrollbar sm:flex-wrap gap-2"
                role="group"
                aria-label="Filter app capabilities"
              >
                {QUICK_FILTER_CHIPS.map((chip) => {
                  const isActive = query.trim().toLowerCase() === chip.value;
                  return (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => setQuery(chip.value)}
                      className={`min-h-[38px] rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                        isActive
                          ? 'bg-[#153D2C] text-[#FAF7F0]'
                          : 'bg-[#FAF7F0] text-[#153D2C] border border-[#153D2C]/10 hover:bg-white'
                      }`}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>

              {/* Interactive search mini-widget */}
              <div className="mt-3">
                <label htmlFor="feature-search-preview" className="sr-only">
                  Search app features
                </label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#4A5B52]"
                    aria-hidden="true"
                  />
                  <input
                    id="feature-search-preview"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search app features (e.g. tracking, cart, location)..."
                    className="w-full min-h-[44px] rounded-xl border border-[#153D2C]/15 bg-white py-2.5 pl-10 pr-10 text-sm text-[#16241D] placeholder:text-[#4A5B52]/65 focus:border-[#168A7B] focus:outline-none"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Clear search"
                      className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-lg text-[#4A5B52] hover:bg-[#F3EDE0] hover:text-[#153D2C] cursor-pointer"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  )}
                </div>

                <div className="mt-3 divide-y divide-[#153D2C]/8 rounded-2xl bg-white border border-[#153D2C]/10 px-4">
                  {filteredSamples.length > 0 ? (
                    filteredSamples.slice(0, 3).map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 py-2.5 text-sm"
                      >
                        <div className="min-w-0">
                          <p className="font-semibold text-[#153D2C] truncate">{item.label}</p>
                          <p className="text-xs text-[#4A5B52] truncate">{item.area}</p>
                        </div>
                        <span className="text-xs font-semibold text-[#168A7B] shrink-0">
                          {item.tag}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="py-4 text-center text-xs text-[#4A5B52]">
                      No app features match “{query}”. Clear search to view all.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 (5 cols): Categories & Featured Deals */}
          <article className="lg:col-span-5 rounded-3xl bg-[#153D2C] p-5 sm:p-8 text-[#FAF7F0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF7F0]/12 text-[#1FA594] shrink-0">
                  <LayoutGrid className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF9B6A]">
                  <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                  Featured deals
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl sm:text-2xl font-bold">
                Structured categories &amp; offers
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-[#FAF7F0]/80 leading-relaxed">
                Switch cleanly between Food, Shops, and Packages tabs, browse nearby listings, and view participating discount banners right on the home screen.
              </p>
            </div>

            <div className="mt-6 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#0F2D20] px-4 py-3 border border-[#FAF7F0]/10">
                <span className="text-sm font-medium">In-app deals section</span>
                <span className="rounded-lg bg-[#E06526] px-2.5 py-1 text-xs font-bold text-white whitespace-nowrap">
                  Highlighted offers
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#FAF7F0]/75 px-1">
                <span>Food · Shops · Packages · Nearby</span>
                <span>Varies by area</span>
              </div>
            </div>
          </article>

          {/* Card 3 (4 cols): Cart & Delivery Addresses */}
          <article className="lg:col-span-4 rounded-3xl bg-[#F3EDE0] p-5 sm:p-7 border border-[#153D2C]/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#168A7B]/15 text-[#168A7B] shrink-0">
                  <ShoppingBasket className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#153D2C]">
                  Cart &amp; delivery addresses
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5B52]">
                Adjust item quantities, add special instructions before adding to cart, and switch delivery addresses right from the home bar.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-3.5 border border-[#153D2C]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#153D2C]">
                <MapPin className="h-3.5 w-3.5 text-[#168A7B] shrink-0" aria-hidden="true" />
                <span className="truncate">Saved delivery location selector</span>
              </div>
              <p className="text-xs text-[#4A5B52]">
                Include drop-off notes and special instructions on every order.
              </p>
            </div>
          </article>

          {/* Card 4 (4 cols): Order Tracking & Notifications */}
          <article className="lg:col-span-4 rounded-3xl bg-[#F3EDE0] p-5 sm:p-7 border border-[#153D2C]/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#168A7B]/15 text-[#168A7B] shrink-0">
                  <Route className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#153D2C]">
                  Live tracking &amp; notifications
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5B52]">
                View pickup and delivery pins on the live route map, check confirmation milestones, and receive quiet notification badge updates.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-3.5 border border-[#153D2C]/10 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E06526]/12 text-[#E06526] shrink-0">
                <Bell className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#153D2C] truncate">
                  Real-time order milestones
                </p>
                <p className="text-xs text-[#4A5B52] truncate">
                  Awaiting confirmation · Ready · On route
                </p>
              </div>
            </div>
          </article>

          {/* Card 5 (4 cols): Order History & Payment Status */}
          <article className="lg:col-span-4 rounded-3xl bg-[#F3EDE0] p-5 sm:p-7 border border-[#153D2C]/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#168A7B]/15 text-[#168A7B] shrink-0">
                  <Receipt className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#153D2C]">
                  Order history &amp; payment status
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#4A5B52]">
                Search past orders, filter by Active, Completed, or Cancelled, and check payment status. Payment options depend on location and participating businesses.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-white p-3.5 border border-[#153D2C]/10 flex items-center gap-2.5">
              <CreditCard className="h-4 w-4 text-[#153D2C] shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#153D2C] truncate">
                  Clear payment &amp; order status
                </p>
                <p className="text-xs text-[#168A7B] font-medium truncate">
                  View details anytime in My Orders
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
