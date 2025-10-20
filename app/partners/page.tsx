import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Partners",
  description: "Our partners and partnership opportunities",
}

export default function PartnersPage() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Partners</h1>
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>No Partners Yet</CardTitle>
            <CardDescription>
              We&apos;re looking for amazing partners to join our community.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="mb-6 text-center">
              We currently don&apos;t have any partners listed. If you&apos;re interested in becoming a partner,
              join our Discord community and apply today!
            </p>
            <Button variant="default" size="lg" asChild>
              <a href="https://discord.gg/8KAj4N5fgN" target="_blank" rel="noopener noreferrer">
                Apply on Discord
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}