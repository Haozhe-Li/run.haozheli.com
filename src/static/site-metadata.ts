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
      name: 'Running Facts',
      url: 'https://haozheli.com/run.html',
    },
    {
      name: 'Strava',
      url: 'https://www.strava.com/athletes/haozheli',
    },
    {
      name: 'About Me',
      url: 'https://haozheli.com',
    },
    {
      name: 'About This Project',
      url: 'https://github.com/Haozhe-Li/run',
    },
    
  ],
};

export default data;
