/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { NodeJsSDKPageContent } from '@/components/nodejs-sdk-page-content';

export const metadata = buildMetadata({
  title: 'Node.js SDK',
  description:
    'TypeScript/JavaScript SDK for VaultScope Statistics Server. Monitor system resources, manage alerts, and control infrastructure with a fully typed API and automatic retry logic.',
  path: '/technologies/nodejs-sdk',
});

export default function NodeJsSDKPage() {
  return <NodeJsSDKPageContent />;
}
