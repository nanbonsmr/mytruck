import { useState, type FormEvent, type MouseEvent } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Mail,
  ShieldAlert,
  Smartphone,
  Trash2,
} from 'lucide-react';

interface DeleteAccountProps {
  onBackHome: () => void;
  onNavigatePrivacy: () => void;
}

type AccountRole = 'customer' | 'store' | 'driver';

export function DeleteAccount({
  onBackHome,
  onNavigatePrivacy,
}: DeleteAccountProps) {
  const [role, setRole] = useState<AccountRole>('customer');
  const [contactIdentifier, setContactIdentifier] = useState('');
  const [notes, setNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = contactIdentifier.trim();
    if (!trimmed || trimmed.length < 5) {
      setError('Please enter the email address or phone number on your MyTruck account.');
      return;
    }
    if (!confirmed) {
      setError('Please confirm that you want to request account deletion.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setContactIdentifier('');
    setNotes('');
    setConfirmed(false);
    setError('');
  };

  const handlePrivacyClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigatePrivacy();
  };

  const roleLabel =
    role === 'customer'
      ? 'Customer account'
      : role === 'store'
      ? 'Store account'
      : 'Driver account';

  const mailtoSubject = encodeURIComponent(
    `Account Deletion Request (${roleLabel})`
  );
  const mailtoBody = encodeURIComponent(
    `Hello MyTruck Delivery Privacy Team,\n\nI would like to request deletion of my ${roleLabel}.\nAccount email or phone: ${contactIdentifier.trim()}\n${
      notes.trim() ? `Additional notes: ${notes.trim()}\n` : ''
    }\nThank you.`
  );

  return (
    <section
      aria-labelledby="delete-account-heading"
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

        {/* Page header */}
        <div className="mt-6 sm:mt-8 rounded-3xl bg-[#153D2C] p-6 sm:p-10 text-[#FAF7F0]">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#FF9B6A]">
            <Trash2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>mytrucket.com/delete-account</span>
          </div>
          <h1
            id="delete-account-heading"
            className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#FAF7F0] text-balance"
          >
            Account and Data Deletion
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-[#FAF7F0]/85">
            You can request deletion of your MyTruck Delivery account either inside the mobile app or through this web request page.
          </p>
        </div>

        {/* Main 2-column grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left column: Policy instructions & data disclosures */}
          <div className="lg:col-span-7 space-y-6">
            {/* Two ways to request deletion */}
            <article className="rounded-3xl bg-[#F3EDE0] p-6 sm:p-8 border border-[#153D2C]/12">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#153D2C]">
                How to request deletion
              </h2>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#FAF7F0] p-4 sm:p-5 border border-[#153D2C]/10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#153D2C] text-[#FAF7F0]">
                    <Smartphone className="h-4 w-4 text-[#1FA594]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-[#153D2C]">
                    In the app
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4A5B52]">
                    Open your account or profile settings, select{' '}
                    <strong className="font-semibold text-[#153D2C]">
                      Delete My Account
                    </strong>
                    , and follow the instructions.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#FAF7F0] p-4 sm:p-5 border border-[#153D2C]/10">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#168A7B]/15 text-[#168A7B]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-[#153D2C]">
                    On the web
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4A5B52]">
                    Visit{' '}
                    <span className="font-semibold text-[#153D2C]">
                      mytrucket.com/delete-account
                    </span>{' '}
                    and submit the deletion request form on this page.
                  </p>
                </div>
              </div>
            </article>

            {/* What is deleted */}
            <article className="rounded-3xl bg-white p-6 sm:p-8 border border-[#153D2C]/12">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#153D2C]">
                What happens after verification
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                After we verify your request, we delete your account and associated personal information, including your profile, saved addresses, and notifications.
              </p>
              <ul className="mt-4 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#4A5B52] list-disc pl-5 marker:text-[#168A7B]">
                <li>
                  <strong className="font-semibold text-[#153D2C]">
                    Customer accounts:
                  </strong>{' '}
                  Account credentials, profile details, saved delivery addresses, and notification settings are removed.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">
                    Store accounts:
                  </strong>{' '}
                  The store may be closed and its app listings removed.
                </li>
                <li>
                  <strong className="font-semibold text-[#153D2C]">
                    Driver accounts:
                  </strong>{' '}
                  The driver profile and payout details are deleted.
                </li>
              </ul>
            </article>

            {/* Data retained */}
            <article className="rounded-3xl bg-[#F3EDE0] p-6 sm:p-8 border border-[#153D2C]/12">
              <div className="flex items-center gap-2.5 text-[#153D2C]">
                <ShieldAlert className="h-5 w-5 text-[#E06526] shrink-0" aria-hidden="true" />
                <h2 className="font-display text-xl sm:text-2xl font-bold">
                  Information that may be retained
                </h2>
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Some completed order or transaction records may be retained when needed for accounting, legal, security, or dispute-resolution purposes. Where feasible, retained order records are kept without your name or phone number.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4A5B52]">
                Copies held by payment or other service providers may follow their own retention requirements. Review our{' '}
                <a
                  href="/privacy-policy"
                  onClick={handlePrivacyClick}
                  className="font-semibold text-[#168A7B] underline underline-offset-2 hover:text-[#153D2C]"
                >
                  Privacy Policy
                </a>{' '}
                for additional details.
              </p>
            </article>
          </div>

          {/* Right column: Web Deletion Request Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 rounded-3xl bg-white p-6 sm:p-8 border border-[#153D2C]/15 shadow-sm">
              {submitted ? (
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#168A7B]/15 text-[#168A7B]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold text-[#153D2C]">
                    Request prepared for verification
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A5B52]">
                    To complete verification for your <strong className="text-[#153D2C]">{roleLabel}</strong> ({contactIdentifier}), send your deletion request directly to our privacy team using the button below, or email{' '}
                    <a
                      href="mailto:privacy@mytruck.com"
                      className="font-semibold text-[#168A7B] underline underline-offset-2"
                    >
                      privacy@mytruck.com
                    </a>
                    .
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      href={`mailto:privacy@mytruck.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#153D2C] px-5 py-3 text-sm font-semibold text-[#FAF7F0] hover:bg-[#0F2D20] transition-colors"
                    >
                      <Mail className="h-4 w-4 text-[#1FA594]" aria-hidden="true" />
                      <span>Open email request to privacy@mytruck.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#153D2C]/15 bg-[#F3EDE0] px-5 py-2.5 text-sm font-semibold text-[#153D2C] hover:bg-[#EAE1CE] transition-colors cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#153D2C]">
                    Web deletion request
                  </h2>
                  <p className="mt-2 text-sm text-[#4A5B52]">
                    Complete this form to prepare a verified account deletion request for the MyTruck privacy team.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    <div>
                      <span className="block text-sm font-semibold text-[#153D2C]">
                        Account type
                      </span>
                      <div className="mt-2 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Account type">
                        {(
                          [
                            { id: 'customer', label: 'Customer' },
                            { id: 'store', label: 'Store' },
                            { id: 'driver', label: 'Driver' },
                          ] as const
                        ).map((option) => {
                          const active = role === option.id;
                          return (
                            <button
                              key={option.id}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => setRole(option.id)}
                              className={`min-h-[42px] rounded-xl px-2 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                                active
                                  ? 'bg-[#153D2C] text-[#FAF7F0]'
                                  : 'bg-[#F3EDE0] text-[#153D2C] hover:bg-[#EAE1CE]'
                              }`}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="delete-contact-identifier"
                        className="block text-sm font-semibold text-[#153D2C]"
                      >
                        Account email or phone number
                      </label>
                      <input
                        id="delete-contact-identifier"
                        type="text"
                        required
                        value={contactIdentifier}
                        onChange={(e) => {
                          setContactIdentifier(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="you@example.com or +251..."
                        className="mt-1.5 w-full min-h-[46px] rounded-xl border border-[#153D2C]/20 bg-[#FAF7F0] px-4 py-3 text-sm text-[#16241D] placeholder:text-[#4A5B52]/60 focus:border-[#168A7B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="delete-notes"
                        className="block text-sm font-semibold text-[#153D2C]"
                      >
                        Additional details{' '}
                        <span className="font-normal text-[#4A5B52]">(optional)</span>
                      </label>
                      <textarea
                        id="delete-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Store name or verification details if applicable"
                        className="mt-1.5 w-full rounded-xl border border-[#153D2C]/20 bg-[#FAF7F0] px-4 py-3 text-sm text-[#16241D] placeholder:text-[#4A5B52]/60 focus:border-[#168A7B] focus:outline-none"
                      />
                    </div>

                    <label className="flex items-start gap-3 rounded-2xl bg-[#F3EDE0] p-3.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={confirmed}
                        onChange={(e) => {
                          setConfirmed(e.target.checked);
                          if (error) setError('');
                        }}
                        className="mt-0.5 h-4 w-4 rounded border-[#153D2C]/30 accent-[#153D2C] shrink-0"
                      />
                      <span className="text-xs leading-relaxed text-[#16241D]">
                        I understand that once verified, my profile, saved addresses, and account access will be deleted as described on this page.
                      </span>
                    </label>

                    {error && (
                      <p className="text-xs font-medium text-[#C84612]" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full min-h-[48px] rounded-xl bg-[#E06526] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#C95419] active:translate-y-px transition-all duration-150 cursor-pointer"
                    >
                      Request Account Deletion
                    </button>
                  </form>

                  <div className="mt-6 pt-5 border-t border-[#153D2C]/10 text-xs text-[#4A5B52] space-y-1">
                    <p>
                      <span className="font-semibold text-[#153D2C]">Email:</span>{' '}
                      privacy@mytruck.com
                    </p>
                    <p>
                      <span className="font-semibold text-[#153D2C]">Support Email:</span>{' '}
                      support@mytruck.com
                    </p>
                    <p>
                      <span className="font-semibold text-[#153D2C]">Address:</span> Nekemte
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
