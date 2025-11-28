import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  env: {
    _next_intl_trailing_slash: 'always'
  }
};

export default withNextIntl('./i18n.js')(nextConfig);
