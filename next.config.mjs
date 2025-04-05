/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

const nextConfig = { 
    serverRuntimeConfig: {
        runtime: process.env.NEXT_PUBLIC_RUNTIME
      }
    //swcMinify: false,
    };

export default withNextIntl(nextConfig);
