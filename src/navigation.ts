// import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

import { getPermalink } from './utils/permalinks';


export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'Speaker',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Schedule',
    //       href: getPermalink('/schedule'),
    //     },
    //     {
    //       text: 'Venue',
    //       href: getPermalink('/homes/mobile-app'),
    //     },

    //   ],
    // },
    {
      text: 'About',
      href: '#why-attend',
    },
  ],
  actions: [{ text: 'Registration', href: 'https://gosimaiparis.eventbrite.com/', target: '_blank' }],
};

export const footerData = {
  links: [
    // {
    //   title: 'Product',
    //   links: [
    //     { text: 'Features', href: '#' },
    //     { text: 'Team', href: '#' },
    //     { text: 'Enterprise', href: '#' },
    //     { text: 'Resources', href: '#' },
    //   ],
    // },

    {
      title: 'GOSIM',
      links: [
        { text: 'Home', href: 'https://gosim.org' },
        { text: 'Blog', href: 'https://blog.gosim.org' },
        { text: 'Spotlight', href: 'https://spotlight.gosim.org' },
        { text: 'Call for Proposal', href: 'https://cfp.gosim.org' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/gosimfoundation' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@gosim' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@GOSIMFoundation' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/gosimfoundation' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/images/favicon.svg" alt="gosim logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://www.gosim.org/"> GOSIM Foundation</a> · All rights reserved.
  `,
};
