/**
 * VaultScope Website
 * Copyright (c) 2025 VaultScope
 * Licensed under the Business Source License 1.1
 * See LICENSE file for details.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ replaces next export
  images: {
    unoptimized: true, // required for static export
  },
  outputFileTracingRoot: "C:/Users/toowa/OneDrive/Desktop/Projects/vs>"
};

export default nextConfig;
