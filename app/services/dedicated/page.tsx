/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { DedicatedPageContent } from '@/components/dedicated-page-content';

export const metadata = buildMetadata({
  title: 'Dedicated Servers (Coming Soon)',
  description:
    'The next generation of bare metal infrastructure. Single-tenant, unmetered bandwidth, and custom hardware configurations. Arriving 2026.',
  path: '/services/dedicated',
});

export default function DedicatedPage() {
  return <DedicatedPageContent />;
}
