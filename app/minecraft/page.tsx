/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { MinecraftServersPageContent } from '@/components/minecraft-servers-page-content';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Minecraft Hosting',
  description:
    'Provision managed Minecraft servers starting at €4.99/month with panel-driven mod installs, player management, and Cloudflare protection.',
  path: '/minecraft',
});

export default function MinecraftPage() {
  return <MinecraftServersPageContent />;
}
