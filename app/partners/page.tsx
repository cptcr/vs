/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { buildMetadata } from "@/lib/seo"

const partners = [
  {
    name: "Coders Hub",
    description:
      "Discord server for front-end developers to explore their skills, connect with peers, and collaborate on projects.",
    link: "https://codershub-dx.vercel.app/",
  },
]

export const metadata = buildMetadata({
  title: "Partners",
  description: "Explore VaultScope partnership opportunities and learn how to collaborate with our team.",
  path: "/partners",
})

export default function PartnersPage() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Partners</h1>
          <p className="text-muted-foreground">
            Learn about current collaborations, explore eligibility requirements, and see how to launch a joint program
            with VaultScope. Review our{" "}
            <Link href="/partners/guidelines" className="font-medium text-primary">
              partner guidelines
            </Link>{" "}
            before opening a Discord ticket.
          </p>
        </header>

        {partners.length > 0 && (
          <section className="space-y-6">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-2xl font-semibold">Featured partners</h2>
              <p className="text-sm text-muted-foreground">
                Accepted partners are showcased here without separate announcements or complimentary server credits by
                default.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {partners.map((partner) => (
                <Card key={partner.name} className="border border-border/60 bg-background/60 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <CardDescription>{partner.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline">
                      <a href={partner.link} target="_blank" rel="noopener noreferrer">
                        Visit partner
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/partners/guidelines">Apply</Link>
              </Button>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
