"use client"

import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-foreground" />
            <span className="text-xl font-bold text-foreground">VaultScope</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="https://docs.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex text-foreground" asChild>
              <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                Features
              </a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                Pricing
              </a>
              <a href="https://discord.gg/sRj3uPPpme" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                Community
              </a>
              <a href="https://docs.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                Documentation
              </a>
              <a href="https://panel.vaultscope.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2">
                Sign In
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
