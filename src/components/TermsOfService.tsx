import { type MouseEvent } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface TermsOfServiceProps {
  onBackHome: () => void;
  onNavigatePrivacy: () => void;
  onNavigateDeleteAccount: () => void;
}

const TERMS_SECTIONS = [
  { id: 'about-mytruck-delivery', number: '01', title: 'About MyTruck Delivery' },
  { id: 'accounts', number: '02', title: 'Accounts' },
  { id: 'placing-orders', number: '03', title: 'Placing orders' },
  { id: 'prices-fees-and-payment', number: '04', title: 'Prices, fees, and payment' },
  { id: 'delivery', number: '05', title: 'Delivery' },
  { id: 'cancellations-refunds-and-complaints', number: '06', title: 'Cancellations, refunds, and complaints' },
  { id: 'business-and-driver-accounts', number: '07', title: 'Business and driver accounts' },
  { id: 'acceptable-use', number: '08', title: 'Acceptable use' },
  { id: 'app-content-and-ip', number: '09', title: 'App content and IP' },
  { id: 'third-party-services', number: '10', title: 'Third-party services' },
  { id: 'privacy', number: '11', title: 'Privacy' },
  { id: 'suspension-and-termination', number: '12', title: 'Suspension and termination' },
  { id: 'service-availability-and-disclaimers', number: '13', title: 'Availability & disclaimers' },
  { id: 'limitation-of-liability', number: '14', title: 'Limitation of liability' },
  { id: 'changes-to-these-terms', number: '15', title: 'Changes to these Terms' },
  { id: 'governing-law-and-disputes', number: '16', title: 'Governing law and disputes' },
  { id: 'contact', number: '17', title: 'Contact' },
] as const;

export function TermsOfService({
  onBackHome,
  onNavigatePrivacy,
  onNavigateDeleteAccount,
}: TermsOfServiceProps) {
  const handlePrivacyClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigatePrivacy();
  };

  const handleDeleteClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateDeleteAccount();
  };

  return (
    <section
      aria-labelledby="terms-of-service-heading"
      className="bg-[#FAF7F0] py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#153D2C]/15 bg-[#F3EDE0] px-4 py-2 text-sm font-semibold text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4 text-[#168A7B]" aria-hidden="true" />
          <span>Back to MyTruck Delivery</span>
        </button>

        {/* Terms header */}
        <div className="mt-6 sm:mt-8 rounded-3xl bg-[#153D2C] p-6 sm:p-10 text-[#FAF7F0]">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1FA594]">
            <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Effective date: November 27, 2026</span>
          </div>
          <h1
            id="terms-of-service-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF7F0] text-balance"
          >
            MyTruck Delivery Terms of Service
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#FAF7F0]/85">
            These Terms of Service (“Terms”) apply when you access or use the MyTruck Delivery app and related services (“MyTruck,” “we,” “us,” or “our”). By creating an account or using the app, you agree to these Terms. If you do not agree, do not use the service.
          </p>
        </div>

        {/* Layout: Sticky section index on desktop, compact contents grid on mobile */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-[#F3EDE0] p-5 border border-[#153D2C]/12 lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto">
              <h2 className="font-display text-base font-bold text-[#153D2C]">
                Contents
              </h2>
              <nav
                className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1"
                aria-label="Terms of service sections"
              >
                {TERMS_SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 text-xs sm:text-sm font-medium text-[#37483F] hover:bg-[#FAF7F0] hover:text-[#153D2C] transition-colors"
                  >
                    <span className="font-semibold text-[#168A7B] tabular-nums shrink-0">
                      {sec.number}
                    </span>
                    <span className="truncate">{sec.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Terms body */}
          <div className="lg:col-span-8 space-y-10 text-[#16241D]">
            {/* 1 */}
            <article id="about-mytruck-delivery" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                1. About MyTruck Delivery
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                MyTruck provides an app for browsing participating restaurants and shops, placing delivery orders, and following order progress. The app may also provide features for drivers and businesses.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Restaurants and shops are responsible for the products they offer, their prices and descriptions, and preparing orders. Drivers are responsible for carrying out assigned deliveries. Availability depends on your location and participating businesses.
              </p>
            </article>

            {/* 2 */}
            <article id="accounts" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                2. Accounts
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Some features require an account. You agree to provide accurate information, keep your sign-in details secure, and notify us if you believe someone has accessed your account without permission.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You are responsible for activity carried out through your account, except where applicable law provides otherwise. We may restrict or suspend access when reasonably necessary to protect users, businesses, drivers, or the service, or to address suspected fraud or a breach of these Terms.
              </p>
            </article>

            {/* 3 */}
            <article id="placing-orders" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                3. Placing orders
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                The app displays businesses and items that may be available for your selected area. Listings, prices, descriptions, and availability are provided by participating businesses and may change.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                When you place an order, check the items, quantities, delivery address, fees, and total shown before submitting it. An order request is not a guarantee that the business can fulfill it. The order may need to be accepted by the business, and an item may become unavailable. If an order cannot be fulfilled, we or the relevant business will take appropriate steps, including handling any payment or refund in accordance with applicable law and the payment provider’s process.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You are responsible for providing a complete and accurate delivery address and being available to receive the order. Additional delivery instructions should be clear and lawful.
              </p>
            </article>

            {/* 4 */}
            <article id="prices-fees-and-payment" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                4. Prices, fees, and payment
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                The app displays the applicable item prices, delivery charges, and other fees before you submit an order, where available. The final amount may depend on the order and the information shown at checkout.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Payment methods may include online payment through Chapa or other methods displayed in the app. Payment processing is subject to the payment provider’s terms. MyTruck does not receive or store your full payment card credentials through the app’s checkout unless expressly stated in the payment flow.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                An order may not be processed or fulfilled if payment is declined, remains incomplete, or cannot be verified. Refunds, where applicable, may take time to appear depending on the payment provider and financial institution.
              </p>
            </article>

            {/* 5 */}
            <article id="delivery" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                5. Delivery
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Delivery availability, timing, and coverage depend on location, business availability, driver availability, traffic, weather, and other conditions. Any delivery estimate shown is an estimate and is not a guarantee.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Keep your phone available for order updates and delivery coordination. If delivery cannot be completed because the address is inaccurate, you are unavailable, or access is not possible, the business or driver may contact you to resolve the issue. Any additional charges or order outcome will depend on the circumstances and applicable law.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                If you use MyTruck as a driver, location sharing may be used during delivery activity to coordinate deliveries and show progress. You must follow the in-app instructions and applicable traffic and safety laws.
              </p>
            </article>

            {/* 6 */}
            <article id="cancellations-refunds-and-complaints" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                6. Cancellations, refunds, and complaints
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Cancellation options may depend on the order’s status and whether the business has started preparing it or the driver has begun delivery. Use the options shown in the app or contact support as soon as possible if you need to cancel or report a problem.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                For missing, incorrect, damaged, or unsatisfactory items, contact MyTruck support and provide relevant order details. We may coordinate with the business or driver to review the issue. Any refund or other resolution will be handled according to the circumstances, the applicable business or payment process, and applicable law. These Terms do not limit rights that cannot legally be limited.
              </p>
            </article>

            {/* 7 */}
            <article id="business-and-driver-accounts" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                7. Business and driver accounts
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Businesses and drivers may have additional onboarding requirements or separate terms. If you use a business account, you confirm that you are authorized to act for that business and that the information, listings, prices, images, and descriptions you submit are accurate and lawful.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Businesses are responsible for the products they list, fulfilling accepted orders, and complying with applicable food safety, licensing, tax, and consumer protection requirements. Drivers are responsible for maintaining any required licenses, permits, and insurance, and for completing deliveries safely and lawfully.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We may review, restrict, or remove business or driver content or access if necessary to protect the service or address legal, safety, or policy concerns.
              </p>
            </article>

            {/* 8 */}
            <article id="acceptable-use" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                8. Acceptable use
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You agree not to:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>Use the app for unlawful, fraudulent, or misleading activity.</li>
                <li>Submit false account, order, payment, business, or delivery information.</li>
                <li>Interfere with the app, attempt unauthorized access, or disrupt other users’ experience.</li>
                <li>Misuse another person’s account or personal information.</li>
                <li>Upload content that infringes another person’s rights or is unlawful.</li>
                <li>Use the service in a way that risks the safety of customers, businesses, or drivers.</li>
              </ul>
            </article>

            {/* 9 */}
            <article id="app-content-and-ip" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                9. App content and intellectual property
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                MyTruck and its licensors own or have permission to use the app’s software, branding, design, and other content. You may use the app for its intended personal or business purposes, subject to these Terms. You may not copy, modify, distribute, reverse engineer, or commercially exploit the app except where applicable law permits or we authorize it.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Businesses and other users retain rights to content they submit. By submitting content, you grant MyTruck permission to host, display, and use it as needed to operate and promote the service. You confirm that you have the rights needed to submit that content.
              </p>
            </article>

            {/* 10 */}
            <article id="third-party-services" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                10. Third-party services
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                The app may connect to third-party services, including maps, authentication, cloud hosting, phone verification, and payment providers. Their services may be governed by their own terms and policies. MyTruck is not responsible for third-party services outside our control.
              </p>
            </article>

            {/* 11 */}
            <article id="privacy" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                11. Privacy
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Our handling of personal information is described in the MyTruck Delivery{' '}
                <a
                  href="/privacy-policy"
                  onClick={handlePrivacyClick}
                  className="font-semibold text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                >
                  Privacy Policy
                </a>
                . You can read it here in this app. By using MyTruck, you acknowledge that you have had the opportunity to review that policy.
              </p>
            </article>

            {/* 12 */}
            <article id="suspension-and-termination" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                12. Suspension and termination
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You may stop using the app at any time. To request account deletion, use the delete option in your account settings or open this app’s{' '}
                <a
                  href="/delete-account"
                  onClick={handleDeleteClick}
                  className="font-semibold text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                >
                  Account Deletion page
                </a>
                .
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We may suspend or end access to some or all of the service if you seriously breach these Terms, if we need to protect users or the service, or if we stop providing a feature. Account deletion or termination does not remove obligations or records that must be retained under applicable law or for legitimate accounting and dispute-resolution purposes.
              </p>
            </article>

            {/* 13 */}
            <article id="service-availability-and-disclaimers" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                13. Service availability and disclaimers
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We aim to keep MyTruck available and operating properly, but we do not guarantee uninterrupted or error-free service. Features, businesses, products, and payment methods may change or be unavailable.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                To the extent allowed by applicable law, the app is provided without guarantees beyond those that cannot legally be excluded. Nothing in these Terms excludes consumer rights or other protections that cannot legally be excluded or restricted.
              </p>
            </article>

            {/* 14 */}
            <article id="limitation-of-liability" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                14. Limitation of liability
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                To the extent permitted by applicable law, MyTruck is not responsible for indirect or consequential loss arising from use of the app, delays or interruptions, or the conduct or products of participating businesses and independent drivers.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Nothing in these Terms excludes liability for fraud, intentional misconduct, or any liability that applicable law does not allow us to exclude or limit. This section does not remove any rights you have under applicable consumer protection laws.
              </p>
            </article>

            {/* 15 */}
            <article id="changes-to-these-terms" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                15. Changes to these Terms
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We may update these Terms as the app or our services change. We will post the revised Terms and update the effective date. If a change materially affects your use of the service, we will provide notice where required. Continued use after updated Terms take effect means you accept them, to the extent permitted by law.
              </p>
            </article>

            {/* 16 */}
            <article id="governing-law-and-disputes" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                16. Governing law and disputes
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                These Terms are subject to the laws that apply where MyTruck operates and to any mandatory consumer protections that apply to you. Disputes will be handled by the competent courts or dispute-resolution bodies under applicable law.
              </p>
            </article>

            {/* 17 */}
            <article id="contact" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                17. Contact
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                For questions or support, contact:
              </p>
              <div className="mt-4 rounded-2xl bg-[#F3EDE0] p-5 sm:p-6 border border-[#153D2C]/12 space-y-2 text-sm sm:text-base">
                <p className="font-display font-bold text-[#153D2C]">MyTruck Delivery</p>
                <p className="text-[#4A5B52]">
                  <span className="font-semibold text-[#153D2C]">Email:</span>{' '}
                  <a
                    href="mailto:privacy@mytruck.com"
                    className="font-medium text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                  >
                    privacy@mytruck.com
                  </a>
                </p>
                <p className="text-[#4A5B52]">
                  <span className="font-semibold text-[#153D2C]">Support Email:</span>{' '}
                  <a
                    href="mailto:support@mytruck.com"
                    className="font-medium text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                  >
                    support@mytruck.com
                  </a>
                </p>
                <p className="text-[#4A5B52]">
                  <span className="font-semibold text-[#153D2C]">Address:</span> Nekemte
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
