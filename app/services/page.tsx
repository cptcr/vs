/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { ServicesHubContent } from '@/components/services-hub-content';

export const metadata = buildMetadata({
  title: 'Our Services',
  description:
    'Explore our full suite of cloud infrastructure. From high-performance VPS and dedicated game hosting to managed databases and free development environments.',
  path: '/services',
});

export default function ServicesPage() {
  return <ServicesHubContent />;
}
