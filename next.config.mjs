import withNextIntl from 'next-intl/plugin';

const nextConfig = withNextIntl({
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  env: {
    // your environment variables
  },
});

export default nextConfig;
