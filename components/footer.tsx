/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import type { SVGProps } from "react"
import { Github } from "lucide-react"
import { useI18n } from "@/components/language-provider"

export function Footer() {
  const { getValue } = useI18n()
  const copy = getValue<{
    sections: {
      resources: {
        title: string
        links: {
          documentation: string
          controlPanel: string
          payment: string
          status: string
          features: string
        }
      }
      socials: {
        title: string
        links: {
          mainServer: string
          github: string
        }
      }
      software: {
        title: string
        links: {
          syncor: string
        }
      }
      infrastructure: {
        title: string
        links: {
          pricing: string
          security: string
          minecraft: string
          services: string
        }
      }
      legal: {
        title: string
        links: {
          privacy: string
          terms: string
          acceptableUse: string
          fairUsage: string
          sla: string
          cookiePolicy: string
        }
      }
    }
    copyright: string
  }>("footer")

  return (
    <footer className="relative border-t border-border bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-foreground mb-4">{copy.sections.resources.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.resources.links.documentation}
                </a>
              </li>
              <li>
                <a
                  href="https://panel.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copy.sections.resources.links.controlPanel}
                </a>
              </li>
              <li>
                <a
                  href="https://pay.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copy.sections.resources.links.payment}
                </a>
              </li>
              <li>
                <a
                  href="https://status.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copy.sections.resources.links.status}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.resources.links.features}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{copy.sections.socials.title}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/wK8UZ7AAmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <DiscordIcon className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.sections.socials.links.mainServer}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VaultScope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.sections.socials.links.github}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{copy.sections.software.title}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/VaultScope/syncor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>{copy.sections.software.links.syncor}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{copy.sections.infrastructure.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.infrastructure.links.pricing}
                </a>
              </li>
              <li>
                <a href="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.infrastructure.links.security}
                </a>
              </li>
              <li>
                <a href="/minecraft" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.infrastructure.links.minecraft}
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.infrastructure.links.services}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{copy.sections.legal.title}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.privacy}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.terms}
                </a>
              </li>
              <li>
                <a href="/acceptable-use" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.acceptableUse}
                </a>
              </li>
              <li>
                <a href="/fair-usage" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.fairUsage}
                </a>
              </li>
              <li>
                <a href="/sla" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.sla}
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {copy.sections.legal.links.cookiePolicy}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="pt-8 border-t border-border">
            <div className="flex items-center justify-center">
              <p className="text-sm text-muted-foreground">{copy.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function DiscordIcon({ className, width = 20, height = 20, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.075.075 0 0 0-.079.037 12.3 12.3 0 0 0-.608 1.25 17.864 17.864 0 0 0-5.487 0 12.527 12.527 0 0 0-.618-1.25.078.078 0 0 0-.079-.037 19.748 19.748 0 0 0-4.884 1.515.07.07 0 0 0-.032.028C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .032.056c2.052 1.508 4.04 2.423 5.992 3.03a.078.078 0 0 0 .085-.027 12.02 12.02 0 0 0 1.225-1.994.076.076 0 0 0-.041-.106 12.3 12.3 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01 17.755 17.755 0 0 0 12.061 0 .074.074 0 0 1 .079.01c.12.099.245.199.372.293a.077.077 0 0 1-.007.128 12.291 12.291 0 0 1-1.872.892.077.077 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 0 0 .084.029c1.962-.606 3.95-1.522 6.002-3.03a.077.077 0 0 0 .032-.055c.5-5.177-.839-9.674-3.549-13.661a.061.061 0 0 0-.031-.029ZM8.598 13.878c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.42 2.157-2.42 1.212 0 2.176 1.096 2.157 2.42 0 1.333-.945 2.419-2.157 2.419Zm6.805 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.42 2.157-2.42 1.212 0 2.176 1.096 2.157 2.42 0 1.333-.945 2.419-2.157 2.419Z" />
    </svg>
  )
}
