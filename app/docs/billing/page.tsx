/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { DocsScreenshot } from "@/components/docs-screenshot"
import createAccount from "@/app/assets/docs/create-billing-account/create-account.png"
import verificationEmail from "@/app/assets/docs/create-billing-account/example-verification-email.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Billing & Plans — Docs",
  description:
    "Register a billing profile, confirm verification emails, manage invoices and know how VaultScope handles renewals and refunds.",
  path: "/docs/billing",
})

export default function BillingPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Account finance</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Billing, renewals and payment operations</h1>
        <p className="text-lg text-muted-foreground">
          Everything in VaultScope flows through our Paymenter instance. This guide shows you how to create an account,
          stay on top of invoices and understand what happens when payments fail.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Register your billing account</h2>
        <p className="text-muted-foreground">
          Head to{" "}
          <a href="https://pay.vaultscope.dev/register" className="font-medium underline text-primary underline-offset-4">
            pay.vaultscope.dev/register
          </a>{" "}
          and create an account. Use the same email you will log into the control panel with—VaultScope links billing and
          operational access automatically.
        </p>
        <DocsScreenshot
          image={createAccount}
          alt="VaultScope billing account registration form."
          caption="Fill in accurate billing details to ensure invoices and tax documents stay compliant."
          priority
        />
        <p className="text-sm text-muted-foreground">
          Billing notifications always come from <span className="font-semibold text-foreground">robot@vaultscope.dev</span>. Add the address to your safe sender list.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Confirm the verification email</h2>
        <p className="text-muted-foreground">
          We send a single-use link to confirm ownership of the email address. The link expires after two hours—request a
          new message from the login screen if you miss the window.
        </p>
        <DocsScreenshot
          image={verificationEmail}
          alt="Example VaultScope verification email with the confirmation button."
          caption="Hover the confirmation button to check that it points to pay.vaultscope.dev before clicking."
        />
        <div className="px-4 py-3 text-sm leading-relaxed border rounded-lg border-amber-500/40 bg-amber-500/10 text-amber-200">
          <strong className="font-semibold text-amber-100">Trouble receiving emails?</strong> VaultScope never sends
          verification messages from free domains. Corporate firewalls may quarantine automated mail—loop in your network
          administrator if the message does not appear in spam.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Understand invoices and renewals</h2>
        <p className="text-muted-foreground">
          Every service generates an invoice three days before renewal. You can pay manually or enable auto-payment on a
          per-service basis.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>
            Invoices live under <span className="font-medium text-foreground">Billing &gt; My Invoices</span>. Download
            PDF copies for your bookkeeping with one click.
          </li>
          <li>Auto-pay uses the last successful payment method unless you select a different one during checkout.</li>
          <li>Failed auto-payments trigger reminders at 24 and 72 hours. Services suspend on day four if the balance stays unpaid.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Manage payment methods</h2>
        <p className="text-muted-foreground">
          VaultScope supports credit cards, SEPA, PayPal and cryptocurrency via Coinbase Commerce. Add or remove methods
          under <span className="font-medium text-foreground">Billing &gt; Payment Methods</span>.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Credit cards are tokenized through Stripe; VaultScope never stores raw card numbers.</li>
          <li>Cryptocurrency invoices must be paid within 15 minutes. We apply the payment once the blockchain confirms it.</li>
          <li>Enterprise wire transfers require an open ticket so we can mark the invoice as pending.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Refunds, cancellations and proration</h2>
        <p className="text-muted-foreground">
          Cancel a service from the billing portal before the next renewal date to avoid charges. VaultScope issues
          immediate proration credits when you downgrade or remove add-ons mid-cycle.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Services cancelled within 72 hours of signup qualify for a full refund—open a ticket so the billing team can process it.</li>
          <li>Suspended services retain data for seven days. Pay the outstanding invoice and reopen the service to restore access.</li>
          <li>Chargebacks trigger an automatic account lock. Contact billing before disputing a transaction.</li>
        </ul>
      </section>

      <section className="pt-8 space-y-6 border-t border-border">
        <h2 className="text-2xl font-semibold">Need help?</h2>
        <p className="text-muted-foreground">
          Billing operates Monday–Friday, 08:00–22:00 UTC with weekend monitoring for payment failures.
        </p>
        <ul className="pl-6 space-y-2 list-disc text-muted-foreground">
          <li>Email <a href="mailto:billing@vaultscope.dev" className="font-medium underline text-primary underline-offset-4">billing@vaultscope.dev</a> for invoice updates.</li>
          <li>Open a control panel ticket under <em>Billing</em> if you need a plan change or refund review.</li>
          <li>Join the{" "}
            <a href="https://discord.gg/vaultscope" className="font-medium underline text-primary underline-offset-4">
              VaultScope Discord
            </a>{" "}
            and post in <span className="font-semibold text-foreground">#billing</span> for quick status checks.</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Looking for pricing or discounts? Start with the{" "}
          <Link href="/docs/faq" className="font-medium underline text-primary underline-offset-4">
            FAQ
          </Link>{" "}
          or message sales@vaultscope.dev for custom quotes.
        </p>
      </section>
    </div>
  )
}
