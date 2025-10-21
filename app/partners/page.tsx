import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Partners",
  description: "Explore VaultScope partnership opportunities and learn how to collaborate with our team.",
  path: "/partners",
})

export default function PartnersPage() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Partners</h1>
      <div className="max-w-3xl mx-auto space-y-8">
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
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "What we offer",
              points: ["Joint launch campaigns", "Dedicated success channel", "Revenue share opportunities"],
            },
            {
              title: "Ideal collaborators",
              points: ["Game studios shipping at scale", "Platform tooling vendors", "Infrastructure educators"],
            },
            {
              title: "How to prepare",
              points: ["Share your audience overlap", "Document desired launch timeline", "Highlight mutual value props"],
            },
            {
              title: "Next steps",
              points: ["Introduce your team in Discord", "Co-design a pilot program", "Review metrics within 30 days"],
            },
          ].map((card) => (
            <Card key={card.title} className="border border-border/60 bg-background/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
