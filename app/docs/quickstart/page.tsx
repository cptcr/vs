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
import orderConfirmation from "@/app/assets/docs/create-server/order-confirmation.png"
import passwordResetEmail from "@/app/assets/docs/create-server/password-reset.png"
import passwordResetForm from "@/app/assets/docs/create-server/password-reset-site.png"
import purchaseServer from "@/app/assets/docs/create-server/purchase-server.png"
import successView from "@/app/assets/docs/create-server/success-view.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Quickstart — VaultScope Docs",
  description:
    "Spin up your first VaultScope server in minutes: register, confirm billing, reset your panel password and access the control panel.",
  path: "/docs/quickstart",
})

export default function QuickStartPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Launch faster</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Quickstart your first VaultScope server</h1>
        <p className="text-lg text-muted-foreground">
          Follow the same provisioning path our support team shares with new customers. These steps turn a brand-new
          account into an active server with control panel access in under five minutes.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Create your billing profile</h2>
        <p className="text-muted-foreground">
          Visit{" "}
          <a href="https://pay.vaultscope.dev/register" className="font-medium text-primary underline underline-offset-4">
            pay.vaultscope.dev/register
          </a>{" "}
          and create a billing account. This unlocks the storefront, payment history and automated invoices.
        </p>
        <DocsScreenshot
          image={createAccount}
          alt="VaultScope billing registration form showing the required account details."
          caption="Complete the registration form with the email address you will later use for the server control panel."
          priority
        />
        <p className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          Verification emails are only sent from <span className="font-semibold text-foreground">robot@vaultscope.dev</span>.
          Add the address to your allowlist if you use aggressive spam filtering.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Approve the verification email</h2>
        <p className="text-muted-foreground">
          Open the verification email in your inbox and click the confirmation link. If the message does not arrive
          within two minutes, check your spam or updates folder before requesting a resend.
        </p>
        <DocsScreenshot
          image={verificationEmail}
          alt="Example VaultScope verification email with the confirm account button highlighted."
          caption="You can safely verify the email by hovering the button and ensuring it points back to pay.vaultscope.dev."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Purchase your first server</h2>
        <p className="text-muted-foreground">
          After verification, sign in to the billing area and choose the game or workload template that matches your
          project. The storefront walks you through hardware selection and location preferences.
        </p>
        <DocsScreenshot
          image={purchaseServer}
          alt="VaultScope checkout screen showing the order summary and payment options."
          caption="Review the server plan, location and recurring price before submitting the order."
        />
        <p className="text-muted-foreground">
          Successful purchases display an on-screen confirmation and immediately queue the server for deployment.
        </p>
        <DocsScreenshot
          image={orderConfirmation}
          alt="VaultScope order confirmation view with order details and invoice download options."
          caption="Keep the order number handy—support references it when helping you with deployment questions."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Reset the panel password</h2>
        <p className="text-muted-foreground">
          A password reset email arrives from <span className="font-semibold text-foreground">robot@vaultscope.dev</span>{" "}
          as soon as the server finishes installing. Use it to set a control panel password that is different from your
          billing credentials.
        </p>
        <DocsScreenshot
          image={passwordResetEmail}
          alt="VaultScope password reset email containing the reset button."
          caption="Each reset link expires after one hour. Request a new link from the billing area if it times out."
        />
        <DocsScreenshot
          image={passwordResetForm}
          alt="VaultScope password reset page with fields for the new password."
          caption="Choose a strong password—VaultScope enforces a minimum of 12 characters and multi-factor authentication is available later."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Sign in at panel.vaultscope.dev</h2>
        <p className="text-muted-foreground">
          Head to{" "}
          <a href="https://panel.vaultscope.dev" className="font-medium text-primary underline underline-offset-4">
            panel.vaultscope.dev
          </a>{" "}
          and log in with the billing email and the password you just created. Your newly provisioned server appears on
          the dashboard with live status and resource usage.
        </p>
        <DocsScreenshot
          image={successView}
          alt="VaultScope control panel dashboard showing a newly provisioned server in the server list."
          caption="Click the server card to open the console, file manager, networking tools and backups."
        />
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3">
          <h3 className="text-lg font-semibold text-foreground">Next up</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>
              Configure automatic backups by following the{" "}
              <Link href="/docs/control-panel" className="font-medium text-primary underline underline-offset-4">
                control panel guide
              </Link>
              .
            </li>
            <li>
              Invite teammates or managers with scoped access through the{" "}
              <Link href="/docs/servers" className="font-medium text-primary underline underline-offset-4">
                server management walkthrough
              </Link>
              .
            </li>
            <li>
              Enable two-factor authentication from the{" "}
              <Link href="/docs/security" className="font-medium text-primary underline underline-offset-4">
                account security doc
              </Link>{" "}
              to keep your login safe.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
