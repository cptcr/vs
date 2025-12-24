/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { PegasusPageContent } from '@/components/pegasus-page-content';

export const metadata = buildMetadata({
  title: 'Pegasus Bot',
  description:
    'Production-ready, feature-rich Discord bot built with TypeScript. Advanced moderation, economy, tickets, giveaways, XP, and full multi-language support.',
  path: '/technologies/pegasus',
});

export default function PegasusPage() {
  return <PegasusPageContent />;
}
