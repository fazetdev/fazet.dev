import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n config for next-intl
  intl: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

export default withNextIntl(nextConfig);
