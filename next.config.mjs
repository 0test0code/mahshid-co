/** @type {import('next').NextConfig} */
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = { 
    // serverRuntimeConfig: {
    //     runtime: process.env.NEXT_PUBLIC_RUNTIME
    //   }
    //swcMinify: false,
    };
    if (process.env.NODE_ENV === 'development') {
        await setupDevPlatform();
      }
     

export default withNextIntl(nextConfig);
