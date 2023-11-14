interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '运动',
  siteUrl: 'https://run.haozheli.com',
  logo: 'https://www.haozheli.com/assets/img/apple-touch-icon.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Github',
      url: 'https://github.com/Haozhe-Li/run',
    },
    {
      name: 'About',
      url: 'https://haozheli.com',
    },
  ],
};

export default data;
