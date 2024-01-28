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
  siteTitle: 'RUN',
  siteUrl: 'https://run.haozheli.com',
  logo: 'https://www.haozheli.com/assets/img/apple-touch-icon.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'About',
      url: 'https://blog.haozheli.com/#/run',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/haozheli',
    },
    {
      name: 'Github',
      url: 'https://github.com/Haozhe-Li/run',
    },
    
  ],
};

export default data;
