/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

"use client"

import type { SVGProps } from "react"
import { Github, PersonStandingIcon } from "lucide-react"
import { useI18n } from "@/components/language-provider"
import Link from "next/link"

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
    <footer className="relative bg-black border-t border-border">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Updated grid to 6 columns to fit the new tab */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3 lg:grid-cols-6">
          
          {/* 1. Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{copy.sections.resources.title}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.resources.links.documentation}
                </Link>
              </li>
              <li>
                <a
                  href="https://panel.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  {copy.sections.resources.links.controlPanel}
                </a>
              </li>
              <li>
                <a
                  href="https://pay.vaultscope.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  {copy.sections.resources.links.payment}
                </a>
              </li>
              <li>
                <a
                  href="https://vaultscope.instatus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  {copy.sections.resources.links.status}
                </a>
              </li>
              <li>
                {/* Internal anchors can stay as <a> or Link, usually Link scroll={false} if on same page, but plain <a> is often safer for #hashes */}
                <a href="/#features" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.resources.links.features}
                </a>
              </li>
            </ul>
          </div>

          {/* 2. Socials */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{copy.sections.socials.title}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://discord.gg/wK8UZ7AAmc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <DiscordIcon className="w-4 h-4" aria-hidden="true" />
                  <span>{copy.sections.socials.links.mainServer}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/VaultScope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  <span>{copy.sections.socials.links.github}</span>
                </a>
              </li>
              <li>
                <Link href="/team" className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground">
                <PersonStandingIcon className="w-4 h-4" aria-hidden="true"/>
                  <span>Team</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Software */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{copy.sections.software.title}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/technologies"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <span>View All</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/nodejs-sdk"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <span>Node.js SDK</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/technologies/connect"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <span>Connect</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/VaultScope/syncor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
                >
                  <span>{copy.sections.software.links.syncor}</span>
                </a>
              </li>
              <li>
                <Link href="/technologies/recore" className="flex items-center gap-2 text-sm transition-colors text-muted-foreground hover:text-foreground"><span>Recore</span></Link>
              </li>
            </ul>
          </div>

          {/* 4. Services (NEW TAB) */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
               <li>
                <Link href="/services" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/vps" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  Cloud VPS
                </Link>
              </li>
              <li>
                <Link href="/services/minecraft" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  Minecraft Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/databases" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  Managed Databases
                </Link>
              </li>
              <li>
                <Link href="/services/coding" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  Free Coding Server
                </Link>
              </li>
              <li>
                <Link href="/services/dedicated" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  Dedicated Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Infrastructure */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{copy.sections.infrastructure.title}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.infrastructure.links.pricing}
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.infrastructure.links.security}
                </Link>
              </li>
            </ul>
          </div>

          {/* 6. Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">{copy.sections.legal.title}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.terms}
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.acceptableUse}
                </Link>
              </li>
              <li>
                <Link href="/fair-usage" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.fairUsage}
                </Link>
              </li>
              <li>
                <Link href="/sla" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.sla}
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm transition-colors text-muted-foreground hover:text-foreground">
                  {copy.sections.legal.links.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex items-center justify-center">
            <p className="text-sm text-muted-foreground">{copy.copyright}</p>
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