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
      url: 'https://haozheli.notion.site/About-My-Running-29f48946466646ae9d4dda75789169eb?pvs=4',
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
