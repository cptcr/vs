/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

import { buildMetadata } from '@/lib/seo';
import { MinecraftPageContent } from '@/components/minecraft-page-content';

export const metadata = buildMetadata({
  title: 'Minecraft Server Hosting',
  description:
    'Premium Minecraft hosting with high-performance hardware. Supports Vanilla, Forge, Neo Forge, Fabric, and more. DDoS protected and instantly deployed.',
  path: '/services/minecraft',
});

export default function MinecraftPage() {
  return <MinecraftPageContent />;
}
