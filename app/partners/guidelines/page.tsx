/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buildMetadata } from '@/lib/seo';

const channelRequirements = [
  {
    title: 'Discord communities',
    description:
      'Keep your server healthy, purposeful, and aligned with our infrastructure-focused audience.',
    requirements: [
      'Maintain at least 500 members in your Discord server.',
      'Demonstrate why VaultScope services benefit your community (e.g., coding, gaming, infrastructure).',
      'Comply with the Discord Terms of Service and community guidelines.',
    ],
  },
  {
    title: 'TikTok & Instagram creators',
    description:
      'Show consistent reach and on-brand storytelling across your short-form channels.',
    requirements: [
      'Hold a minimum of 1,500 followers on the platform.',
      'Average at least 250 views per video across recent content.',
    ],
  },
  {
    title: 'YouTube channels',
    description:
      'Highlight your audience and engagement across long-form video content.',
    requirements: [
      'Average 200 views per video across recent uploads or series.',
    ],
  },
];

const disclaimers = [
  'Accepted partners are added quietly to the partners page—no separate announcements are guaranteed.',
  'Partnerships do not include complimentary servers unless explicitly agreed with the VaultScope team.',
];

const discordInviteUrl = 'https://discord.gg/C8yCpVDgVs';

export const metadata = buildMetadata({
  title: 'Partner Guidelines',
  description:
    'Review VaultScope partner eligibility requirements and the steps to submit your partnership application.',
  path: '/partners/guidelines',
});

export default function PartnerGuidelinesPage() {
  return (
    <main className="container px-4 py-16 mx-auto">
      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Partner Guidelines</h1>
          <p className="text-muted-foreground">
            Here&apos;s what we look for when evaluating new partners across
            Discord, social platforms, and YouTube. Review the requirements,
            then open a ticket so our team can learn more about your community.
          </p>
          <p className="text-sm text-muted-foreground">
            Official Discord server:{' '}
            <a
              href={discordInviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary"
            >
              discord.gg/C8yCpVDgVs
            </a>
          </p>
        </header>

        <section className="space-y-6">
          {channelRequirements.map((channel) => (
            <Card
              key={channel.title}
              className="border border-border/60 bg-background/60 backdrop-blur"
            >
              <CardHeader>
                <CardTitle>{channel.title}</CardTitle>
                <CardDescription>{channel.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {channel.requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60"
                      />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        <Card className="border border-border/60 bg-background/60 backdrop-blur">
          <CardHeader>
            <CardTitle>Before you apply</CardTitle>
            <CardDescription>
              Set expectations around visibility and deliverables for both
              sides.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {disclaimers.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Ready to start?</CardTitle>
            <CardDescription>
              Open a ticket and our partnerships team will follow up with next
              steps.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button asChild size="lg">
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open a Discord ticket
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/partners">← Back to partners overview</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
