import { type MouseEvent } from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackHome: () => void;
  onNavigateDeleteAccount: () => void;
}

const POLICY_SECTIONS = [
  { id: 'information-we-collect', number: '01', title: 'Information we collect' },
  { id: 'how-we-use-information', number: '02', title: 'How we use information' },
  { id: 'location-permissions', number: '03', title: 'Location permissions' },
  { id: 'when-information-is-shared', number: '04', title: 'When information is shared' },
  { id: 'third-party-services', number: '05', title: 'Third-party services' },
  { id: 'data-retention-and-deletion', number: '06', title: 'Data retention and deletion' },
  { id: 'security', number: '07', title: 'Security' },
  { id: 'your-choices', number: '08', title: 'Your choices' },
  { id: 'childrens-privacy', number: '09', title: 'Children’s privacy' },
  { id: 'changes-to-this-policy', number: '10', title: 'Changes to this policy' },
  { id: 'contact-us', number: '11', title: 'Contact us' },
] as const;

export function PrivacyPolicy({
  onBackHome,
  onNavigateDeleteAccount,
}: PrivacyPolicyProps) {
  const handleDeleteClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigateDeleteAccount();
  };
  return (
    <section
      aria-labelledby="privacy-policy-heading"
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

        {/* Policy header */}
        <div className="mt-6 sm:mt-8 rounded-3xl bg-[#153D2C] p-6 sm:p-10 text-[#FAF7F0]">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#1FA594]">
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Effective date: November 27, 2026</span>
          </div>
          <h1
            id="privacy-policy-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF7F0] text-balance"
          >
            MyTruck Delivery Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#FAF7F0]/85">
            MyTruck Delivery (“MyTruck,” “we,” “us,” or “our”) provides an app for discovering nearby restaurants and shops, placing delivery orders, and managing deliveries. This Privacy Policy explains what information the app handles, how we use it, and the choices available to you.
          </p>
        </div>

        {/* Layout: Sticky section index on desktop, compact contents grid on mobile */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-2xl bg-[#F3EDE0] p-5 border border-[#153D2C]/12">
              <h2 className="font-display text-base font-bold text-[#153D2C]">
                Contents
              </h2>
              <nav className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1" aria-label="Privacy policy sections">
                {POLICY_SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-xs sm:text-sm font-medium text-[#37483F] hover:bg-[#FAF7F0] hover:text-[#153D2C] transition-colors"
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

          {/* Policy body */}
          <div className="lg:col-span-8 space-y-10 text-[#16241D]">
            {/* 1. Information we collect */}
            <article id="information-we-collect" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                1. Information we collect
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Depending on how you use MyTruck, we may collect or process:
              </p>
              <ul className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>
                  <strong className="font-semibold text-[#153D2C]">Account details:</strong> Your name, email address, phone number, account role, and password credentials. Password authentication is handled by Firebase Authentication; MyTruck does not store your password as readable text.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Phone verification information:</strong> Your phone number and verification code details used to confirm your number and help prevent account misuse.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Profile and business information:</strong> Information you provide for a customer, driver, restaurant, or shop account. This may include business name, business address, contact details, profile or product images, and, for drivers, payout information.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Delivery and location information:</strong> Delivery addresses and, if you grant location permission, your device’s location to help set a delivery point and determine nearby businesses. Drivers may share location during delivery activity so customers and the service can follow delivery progress.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Order and transaction information:</strong> Items ordered, order status, delivery details, order history, payment method and status, amounts, and payment transaction references. Online payments are handled through Chapa.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">App and notification information:</strong> Notification preferences, in-app notifications, and a push notification token if you allow notifications. We also use information needed to keep you signed in and maintain your profile on your device.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Support and communications:</strong> Information you choose to provide when contacting us or requesting help.
                </li>
              </ul>
              <p className="mt-4 rounded-2xl bg-[#F3EDE0] p-4 text-sm leading-relaxed text-[#153D2C] border border-[#153D2C]/10">
                The app may use your device’s biometric authentication feature if you enable it for sign-in. Biometric verification is performed by your device; MyTruck does not receive your fingerprint or face scan.
              </p>
            </article>

            {/* 2. How we use information */}
            <article id="how-we-use-information" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                2. How we use information
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We use information to:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>Create and secure accounts, verify phone numbers, and support sign-in.</li>
                <li>Show restaurants and shops available for a selected delivery area.</li>
                <li>Process orders, send order details to the relevant businesses and delivery personnel, and calculate delivery or order amounts.</li>
                <li>Set delivery locations, coordinate deliveries, and show order progress.</li>
                <li>Process and verify payments made through Chapa.</li>
                <li>Send order, account, and service notifications when enabled.</li>
                <li>Provide customer, driver, and merchant features; respond to support requests; and maintain app security.</li>
                <li>Meet legal, accounting, and other valid business obligations.</li>
              </ul>
            </article>

            {/* 3. Location permissions */}
            <article id="location-permissions" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                3. Location permissions
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You can choose whether to grant location permission. Location access helps set your delivery location and show nearby businesses. You can also choose or enter a location manually where that option is available.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                If you use the app as a driver, your location may be shared during delivery activity to support delivery coordination and progress tracking. You can manage location permission in your device settings. If you deny or revoke permission, some location-dependent features may not work as intended.
              </p>
            </article>

            {/* 4. When information is shared */}
            <article id="when-information-is-shared" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                4. When information is shared
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We share information only as needed to provide and operate the service:
              </p>
              <ul className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>
                  <strong className="font-semibold text-[#153D2C]">Restaurants and shops:</strong> Relevant order details and delivery information are shared with the business fulfilling your order.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Drivers:</strong> Relevant pickup, order, and delivery information is shared with the assigned driver. During an active delivery, driver location may be made available for delivery coordination and progress tracking.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Service providers:</strong> MyTruck uses third-party providers for services such as cloud hosting, authentication, databases, maps and geocoding, phone verification, and payment processing. These providers process information under their own terms and privacy policies as applicable.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Legal and safety reasons:</strong> We may disclose information when required by law or when reasonably necessary to protect users, the service, or the rights and safety of others.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Business changes:</strong> Information may be transferred as part of a business merger, reorganization, or asset transfer, subject to appropriate safeguards.
                </li>
              </ul>
              <p className="mt-4 text-sm sm:text-base font-medium text-[#153D2C]">
                MyTruck does not sell personal information. We do not use personal information for third-party targeted advertising.
              </p>
            </article>

            {/* 5. Third-party services */}
            <article id="third-party-services" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                5. Third-party services
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                The app uses services that may process information under their own privacy policies, including:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>
                  <strong className="font-semibold text-[#153D2C]">Google Firebase</strong> for account authentication, database, and cloud functions.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Google Maps platform services</strong> for maps, location, or address-related functions.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Chapa</strong> for online payment processing.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">Phone verification providers</strong> used to send or verify one-time codes.
                </li>
              </ul>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                These services may process information on servers located outside your country. Their handling of information is governed by their own privacy terms. Review the relevant provider policies for details.
              </p>
            </article>

            {/* 6. Data retention and deletion */}
            <article id="data-retention-and-deletion" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                6. Data retention and deletion
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We keep information for as long as needed to provide the service, maintain your account, resolve disputes, protect the service, and meet legal or accounting obligations.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You can request account deletion in the app through the account deletion option or at{' '}
                <a
                  href="/delete-account"
                  onClick={handleDeleteClick}
                  className="font-semibold text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                >
                  mytrucket.com/delete-account
                </a>
                . Account deletion removes account and profile information and associated data as described in the deletion flow. Some completed order or transaction records may be retained for accounting, legal, or operational reasons; where feasible, those records are retained without your name or phone number. Information held by third-party providers may also be subject to their retention practices.
              </p>
            </article>

            {/* 7. Security */}
            <article id="security" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                7. Security
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We use technical and organizational measures intended to protect information, including access controls and secure connections provided by our service providers. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.
              </p>
            </article>

            {/* 8. Your choices */}
            <article id="your-choices" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                8. Your choices
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                You can:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>Update certain profile and delivery details in the app.</li>
                <li>Manage location and notification permissions in your device settings.</li>
                <li>Choose whether to enable biometric sign-in on your device.</li>
                <li>Request account deletion using the method described above.</li>
                <li>Contact us with questions or requests about your information.</li>
              </ul>
            </article>

            {/* 9. Children's privacy */}
            <article id="childrens-privacy" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                9. Children’s privacy
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                MyTruck is not intended for children under 13, and we do not knowingly seek to collect personal information from children under 13. If you believe a child has provided us with personal information, contact us so we can review and take appropriate action.
              </p>
            </article>

            {/* 10. Changes to this policy */}
            <article id="changes-to-this-policy" className="scroll-mt-24 border-b border-[#153D2C]/10 pb-8">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                10. Changes to this policy
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                We may update this Privacy Policy when the app, our data practices, or applicable requirements change. We will post the updated policy and revise its effective date. Please review it periodically.
              </p>
            </article>

            {/* 11. Contact us */}
            <article id="contact-us" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                11. Contact us
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                For privacy questions, requests, or concerns, contact:
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
                <p className="text-[#4A5B52]">
                  <span className="font-semibold text-[#153D2C]">Website:</span>{' '}
                  <a
                    href="https://mytrucket.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                  >
                    <span>https://mytrucket.com</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
