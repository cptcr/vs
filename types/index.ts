/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

export interface NavItem {
  href: string
  label: string
  external?: boolean
}

export interface FooterLink {
  href: string
  label: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}
