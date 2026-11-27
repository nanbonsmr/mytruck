import { motion } from 'motion/react';
import { Store, ShoppingBasket, Navigation } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/brandData';

const STEP_ICONS = [Store, ShoppingBasket, Navigation] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F3EDE0] border-y border-[#153D2C]/10 py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#168A7B]">How it works</p>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold tracking-tight text-[#153D2C] text-balance">
            From neighborhood counter to your front door in three clear steps.
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-14">
          {/* Desktop horizontal connecting path */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-[#153D2C]/20"
          />

          {/* Mobile vertical connecting path */}
          <div
            aria-hidden="true"
            className="md:hidden absolute left-7 top-10 bottom-10 w-px border-l-2 border-dashed border-[#153D2C]/20"
          />

          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index];
              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col"
                >
                  {/* Step node row */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#153D2C] text-[#FAF7F0] shadow-sm shrink-0">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#1FA594]" aria-hidden="true" />
                    </div>
                    <span className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#153D2C]/22 tabular-nums select-none">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-4 sm:mt-5 ml-4 md:ml-0 rounded-2xl bg-[#FAF7F0] p-5 sm:p-6 border border-[#153D2C]/10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#153D2C]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                        {step.description}
                      </p>
                    </div>
                    <p className="mt-4 pt-3.5 border-t border-[#153D2C]/10 text-xs font-medium text-[#168A7B]">
                      {step.detail}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
