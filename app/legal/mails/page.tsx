/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import {
  Mail,
  ShieldAlert,
  CreditCard,
  Server,
  Users,
  Megaphone,
  Eye,
} from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Legal Emails',
  description:
    'These are the only verified email addresses used by VaultScope. Any other email claiming to be from VaultScope is unauthorized.',
  path: '/legal/mails',
});

type EmailInfo = {
  email: string;
  description: string;
  icon: typeof Mail;
};

const EMAILS: EmailInfo[] = [
  {
    email: 'abuse@vaultscope.dev',
    description: 'Report spam, phishing, or abusive content.',
    icon: ShieldAlert,
  },
  {
    email: 'billing@vaultscope.dev',
    description: 'Questions about invoices, payments, or refunds.',
    icon: CreditCard,
  },
  {
    email: 'legal@vaultscope.dev',
    description: 'Legal inquiries and compliance matters.',
    icon: Users,
  },
  {
    email: 'noc@vaultscope.dev',
    description: 'Network operations and technical issues.',
    icon: Server,
  },
  {
    email: 'postmaster@vaultscope.dev',
    description: 'Email delivery and server-related concerns.',
    icon: Mail,
  },
  {
    email: 'robot@vaultscope.dev (No replies)',
    description: 'Automated notifications (do not reply).',
    icon: Mail,
  },
  {
    email: 'press@vaultscope.dev',
    description: 'Media and press inquiries.',
    icon: Megaphone,
  },
  {
    email: 'sales@vaultscope.dev',
    description: 'Sales inquiries and product questions.',
    icon: Users,
  },
  {
    email: 'security@vaultscope.dev',
    description: 'Security issues or vulnerability reports.',
    icon: Eye,
  },
  {
    email: 'support@vaultscope.dev',
    description: 'Technical support and customer assistance.',
    icon: ShieldAlert,
  },
];

export default function OfficialEmailsPage() {
  return (
    <section className="relative min-h-screen px-6 py-20 bg-gradient-to-b from-vs-dark to-vs-darker sm:px-12 lg:px-24">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vs-accent1 to-vs-accent2">
            Official VaultScope Emails
          </span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg font-light text-white/80 sm:text-xl">
          These are the only verified email addresses used by VaultScope. Any
          other email claiming to be from VaultScope is{' '}
          <span className="font-semibold text-vs-accent1">unauthorized</span>.
        </p>
      </div>

      {/* Email Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EMAILS.map((info) => {
          const Icon = info.icon;
          return (
            <div
              key={info.email}
              className="relative flex flex-col justify-between p-6 transition-all duration-500 border shadow-lg group rounded-3xl bg-white/5 backdrop-blur-md sm:p-8 hover:shadow-2xl hover:scale-105 border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center text-2xl text-white bg-gray-700 shadow-md h-14 w-14 sm:h-16 sm:w-16 rounded-xl">
                  <Icon className="w-6 h-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white break-words sm:text-xl">
                    {info.email}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 sm:text-base">
                    {info.description}
                  </p>
                </div>
              </div>

              {/* Send Mail Button */}
              <div className="flex justify-end mt-6">
                <a
                  href={`mailto:${info.email}`}
                  className="inline-block px-5 py-2 font-semibold text-black transition duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-xl hover:scale-105 active:scale-95 active:bg-gray-200"
                >
                  Send Mail
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
