/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

'use client'

import dynamic from 'next/dynamic'

const MonochromeParticles = dynamic(() => import('./MonochromeParticles'), {
  ssr: false,
})

export function WaveWrapper() {
  return (
    <div className="fixed inset-0 z-0">
      <MonochromeParticles />
    </div>
  )
}