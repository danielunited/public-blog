const config = require(`../../.ghost.json`).production;
module.exports = {
    siteUrl:
        process.env.NODE_ENV === `production`
            ? process.env.SITE_URL || config.siteUrl || `https://public.community/blog`
            : `https://public.community/blog`, // Site domain. Do not include a trailing slash!

    postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    siteTitleMeta: `Tips & advice for creating successful online communities`, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `Discover how to create your own successful social network. Get expert tips and advice for content creators and influencers on building thriving online communities.`, // This allows an alternative site description for meta data for pages.

    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image

    shortTitle: `Blog | Public`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `images/favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#15171A`, // Used for Offline Manifest
};
