/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { VPSPageContent } from '@/components/vps-page-content';

export const metadata = buildMetadata({
  title: 'Cloud VPS Services',
  description:
    'High-performance KVM Virtual Private Servers. Deploy instantly in the USA, Germany, Finland, and Singapore. NVMe storage, DDoS protection, and 99.9% uptime.',
  path: '/services/vps',
});

export default function VPSPage() {
  return <VPSPageContent />;
}
