/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/* eslint-disable react/no-unescaped-entities */
import { Cookie } from 'lucide-react';
import Link from 'next/link';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'Details about the cookies and similar technologies used across vaultscope.dev and related services.',
  path: '/cookie-policy',
});

const cookieCategories = [
  {
    title: 'Strictly necessary',
    description:
      'Required to provide authentication, security, and core functionality. These cannot be disabled.',
    examples: [
      {
        name: 'vaultscope_lang',
        purpose:
          'Stores your language selection so the UI renders in your preferred locale.',
        expires: '1 year',
      },
      {
        name: 'session_token',
        purpose: 'Maintains authenticated sessions in the control panel.',
        expires: 'Session',
      },
    ],
  },
  {
    title: 'Functional',
    description:
      'Enhance the experience but are not critical to deliver the service.',
    examples: [
      {
        name: 'docs_sidebar_state',
        purpose:
          'Remembers the expanded/collapsed state of the documentation sidebar.',
        expires: '30 days',
      },
    ],
  },
  {
    title: 'Analytics & performance',
    description:
      'Help us understand how the site is used so we can improve reliability and features.',
    examples: [
      {
        name: '_ga, _gid (Google Analytics)',
        purpose:
          'Collect aggregated usage information such as visited pages, browser type, and referral sources.',
        expires: '13 months',
      },
    ],
  },
  {
    title: 'Payment & fraud prevention',
    description:
      'Set by Stripe when you access the billing portal to detect and prevent fraudulent activity.',
    examples: [
      {
        name: '__stripe_mid / __stripe_sid',
        purpose: 'Protect checkout flows and enforce Stripe security policies.',
        expires: '1 year / 30 minutes',
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <main className="container max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <header className="flex items-center gap-4 mb-10">
          <Cookie className="w-10 h-10 text-foreground" aria-hidden="true" />
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Cookies & Storage
            </p>
            <h1 className="text-4xl font-bold text-foreground">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">Last updated: November 2025</p>
          </div>
        </header>

        <div className="space-y-10 text-foreground">
          <section className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              VaultScope uses cookies, local storage, and similar technologies
              to operate vaultscope.dev, the billing portal, and related
              documentation sites. This policy explains how and why those
              technologies are used.
            </p>
            <p>
              Cookies are small text files stored on your device. Some are
              essential to run our services; others help us analyze traffic,
              remember preferences, or enable secure payments. By continuing to
              browse our sites, you agree to the use of cookies as described
              below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Consent management
            </h2>
            <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                On your first visit we display a banner that lets you accept or
                reject optional cookies. You can revisit this choice at any time
                via the “Cookie settings” link in the banner or by clearing
                browser cookies.
              </p>
              <p>
                Essential cookies (authentication, load balancing, or security)
                cannot be disabled because the site will not function without
                them.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Cookie categories
            </h2>
            <div className="border divide-y divide-white/10 rounded-2xl border-white/10 bg-black/40">
              {cookieCategories.map((category) => (
                <div key={category.title} className="px-6 py-6 space-y-3">
                  <div>
                    <p className="text-lg font-semibold text-foreground">
                      {category.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                  <div className="overflow-x-auto border rounded-2xl border-white/10">
                    <table className="min-w-full text-sm text-left divide-y divide-white/10 text-muted-foreground">
                      <thead className="bg-white/[0.02] text-white/60">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Name</th>
                          <th className="px-4 py-3 font-semibold">Purpose</th>
                          <th className="px-4 py-3 font-semibold">Retention</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {category.examples.map((example) => (
                          <tr key={example.name}>
                            <td className="px-4 py-3 text-white">
                              {example.name}
                            </td>
                            <td className="px-4 py-3">{example.purpose}</td>
                            <td className="px-4 py-3">{example.expires}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Third-party services
            </h2>
            <ul className="pl-6 space-y-2 text-sm list-disc">
              <li>
                <strong className="text-foreground">Stripe:</strong> required
                for billing and fraud prevention. See the{' '}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-foreground underline-offset-4 hover:text-foreground/80"
                >
                  Stripe Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Google Analytics:</strong>{' '}
                used to understand aggregate traffic patterns. IP addresses are
                anonymized in the EU.
              </li>
              <li>
                <strong className="text-foreground">Trustpilot:</strong> may set
                cookies when you follow a review invitation after an order,
                activation, or cancellation.
              </li>
            </ul>
          </section>

          <section className="space-y-4 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Managing cookies
            </h2>
            <p>
              You can delete or block cookies through your browser settings.
              Refer to the help documentation for Chrome, Firefox, Safari, Edge,
              or Brave for instructions. Blocking essential cookies may prevent
              you from logging in or completing purchases.
            </p>
          </section>

          <section className="space-y-4 leading-relaxed text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Updates & contact
            </h2>
            <p>
              We may update this Cookie Policy as our services evolve. Changes
              will be posted here with an updated “Last updated” date. For
              questions, email{' '}
              <a
                className="underline text-foreground underline-offset-4 hover:text-foreground/80"
                href="mailto:support@vaultscope.dev"
              >
                support@vaultscope.dev
              </a>{' '}
              or review our{' '}
              <Link
                href="/privacy"
                className="underline text-foreground underline-offset-4 hover:text-foreground/80"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
