/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { DatabasesPageContent } from '@/components/database-page-content';

export const metadata = buildMetadata({
  title: 'Managed Databases',
  description:
    'Instant, managed database clusters. Support for MongoDB, PostgreSQL, and MariaDB. High availability, automated backups, and DDoS protection included.',
  path: '/services/databases',
});

export default function DatabasesPage() {
  return <DatabasesPageContent />;
}
