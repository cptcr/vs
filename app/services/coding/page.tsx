/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { CodingPageContent } from '@/components/coding-page-content';

export const metadata = buildMetadata({
  title: 'Free Cloud Containers',
  description:
    'Deploy a dedicated container for your code. Choose from Node.js, Python, Java, VS Code Server, and more. High-performance, DDoS protected, and free forever.',
  path: '/services/coding',
});

export default function CodingPage() {
  return <CodingPageContent />;
}
