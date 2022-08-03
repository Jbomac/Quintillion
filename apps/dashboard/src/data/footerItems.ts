const FooterItems = [
  {
    title: 'Quanty',
    items: [
      {
        name: 'Discord',
        route: process.env.NEXT_PUBLIC_QUANTY_DISCORD_SERVER_INVITE,
      },
      { name: 'Docs', route: '/docs' },
      {
        name: 'Support',
        route: process.env.NEXT_PUBLIC_QUANTY_DISCORD_SERVER_INVITE,
      },
      {
        name: 'GitHub',
        route: '/github',
      },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'Terms of Use', route: '/terms-of-use' },
      { name: 'Privacy Policy', route: '/privacy-policy' },
      {
        name: 'Cookie Policy',
        route: '/cookie-policy',
      },
      {
        name: 'End User License Agreement',
        route: '/end-user-agreement',
      },
    ],
  },
]
// TODO: Possibly change company routes later on

export default FooterItems
