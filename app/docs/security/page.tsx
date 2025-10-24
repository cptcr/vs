/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { DocsScreenshot } from "@/components/docs-screenshot"
import enable2FaButton from "@/app/assets/docs/server-account/2fa/enable-2fa-button.png"
import enable2FaModal from "@/app/assets/docs/server-account/2fa/enable-2fa-window-follow-instructions-displayed.png"
import updateEmail from "@/app/assets/docs/server-account/update-email/update-email-and-confirm-with-current-password-if-fails-contact-support-on-discord-for-manual-change.png"
import updatePassword from "@/app/assets/docs/server-account/update-password/update-password-fields-enter-current-password-then-new-password-then-confirm-new-password-if-that-fails-contact-support-on-discord.png"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Security Practices — VaultScope Docs",
  description:
    "Secure your VaultScope account with two-factor authentication, strong passwords, email hygiene and operational safeguards.",
  path: "/docs/security",
})

export default function SecurityPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-primary">Account hardening</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Security best practices</h1>
        <p className="text-lg text-muted-foreground">
          Protect your infrastructure by locking down control panel access, rotating credentials and following safe
          operational habits.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">1. Enable two-factor authentication</h2>
        <p className="text-muted-foreground">
          From the account menu in the control panel, click <em>Security</em> and press <em>Enable 2FA</em>. Scan the QR
          code with an authenticator app like 1Password or Authy.
        </p>
        <DocsScreenshot
          image={enable2FaButton}
          alt="VaultScope account page highlighting the Enable 2FA button."
          caption="Two-factor authentication works alongside your password—both are required to log in."
          priority
        />
        <DocsScreenshot
          image={enable2FaModal}
          alt="VaultScope modal guiding the user through two-factor authentication setup."
          caption="Store recovery codes securely in case you lose access to your authenticator device."
        />
        <div className="rounded-lg border border-border/60 bg-muted/10 px-4 py-3 text-sm text-muted-foreground">
          Require 2FA for every user with console, SFTP or billing access. It&apos;s the easiest way to prevent account
          takeovers.
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">2. Rotate passwords and email</h2>
        <p className="text-muted-foreground">
          Update your password from the same account page. Use a unique, randomly generated passphrase stored in a
          password manager.
        </p>
        <DocsScreenshot
          image={updatePassword}
          alt="VaultScope account page showing the update password form."
          caption="VaultScope enforces a 12-character minimum and checks against known-breached passwords."
        />
        <p className="text-muted-foreground">
          When you change the email address associated with your account, we require your current password as
          confirmation.
        </p>
        <DocsScreenshot
          image={updateEmail}
          alt="VaultScope account page showing email update options."
          caption="Email changes also update your billing login. Contact support if you no longer control the original address."
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">3. Limit privileged access</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Grant console and SFTP permissions only to operators who need them.</li>
          <li>Audit user lists monthly and remove stale accounts immediately.</li>
          <li>Use separate logins for personal play and administrative work to reduce risk.</li>
        </ul>
        <p className="text-muted-foreground">
          Pair access controls with the{" "}
          <a href="https://vaultscope.dev/privacy" className="font-medium text-primary underline underline-offset-4">
            privacy policy
          </a>{" "}
          to understand how we handle personal data.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">4. Secure billing</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Never share your billing password. Finance can pay invoices without accessing the control panel.</li>
          <li>Enable email alerts for new invoices and payment failures to detect fraud quickly.</li>
          <li>Remove old payment methods so they can’t be charged accidentally.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">5. Incident response</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Suspect a compromise? Change your password, revoke API tokens and remove all user invites immediately.</li>
          <li>Restore from a known-clean backup and diff the filesystem against your repository.</li>
          <li>Contact security@vaultscope.dev with timestamps, IP addresses and affected servers for forensic support.</li>
        </ul>
      </section>

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-2xl font-semibold">Compliance checklist</h2>
        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Keep audit logs for at least 90 days.</li>
          <li>Store secrets in an encrypted vault and rotate them quarterly.</li>
          <li>Run regular vulnerability scans against your workloads.</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Need a custom security review or enterprise documentation? Email{" "}
          <a href="mailto:security@vaultscope.dev" className="font-medium text-primary underline underline-offset-4">
            security@vaultscope.dev
          </a>
          .
        </p>
      </section>
    </div>
  )
}
