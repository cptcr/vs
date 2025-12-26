/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { HomePageContent } from '@/components/home-page-component';

export const metadata = buildMetadata({
  title: 'High Performance Cloud Infrastructure',
  description:
    'VaultScope provides high-performance VPS, dedicated servers, and managed databases. DDoS protected, NVMe storage, and instant deployment.',
  path: '/',
});

export default function HomePage() {
  return <HomePageContent />;
}