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
