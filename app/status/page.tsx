/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { StatusPageContent } from '@/components/status-page-content';

export const metadata = buildMetadata({
  title: 'System Status',
  description:
    'Real-time status information for VaultScope services, API, and network infrastructure.',
  path: '/status',
});

export default function StatusPage() {
  return <StatusPageContent />;
}