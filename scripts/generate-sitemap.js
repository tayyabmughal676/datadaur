// scripts/generate-sitemap.js
import {readFileSync, writeFileSync} from 'fs';
import {globby} from 'globby';
import {SitemapStream} from 'sitemap';
import {resolve} from 'path';

(async () => {
    // 1) Static routes you always want
    const staticRoutes = [
        {url: '/', changefreq: 'daily', priority: 1.0},
        {url: '/about', changefreq: 'monthly', priority: 0.9},
        {url: '/team', changefreq: 'monthly', priority: 0.9},
        {url: '/portfolio', changefreq: 'weekly', priority: 0.9},
        {url: '/contact-us', changefreq: 'monthly', priority: 0.9},
        {url: '/partnership', changefreq: 'monthly', priority: 0.8},
        {url: '/careers', changefreq: 'monthly', priority: 0.8},
        {url: '/save-in-gold-case-study', changefreq: 'monthly', priority: 0.8},
        {url: '/socialpro-case-study', changefreq: 'monthly', priority: 0.8},
        {url: '/all-hype-case-study', changefreq: 'monthly', priority: 0.8},
        {url: '/faroo-case-study', changefreq: 'monthly', priority: 0.8},
        {url: '/privacy-policy', changefreq: 'yearly', priority: 0.5},
        {url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.5},
        {url: '/sitemap', changefreq: 'yearly', priority: 0.3},
    ];

    // 2) Optional: dynamic routes from CMS / DB
    // const blogPosts = await fetch('https://api.datadaur.com/posts').then(r => r.json());
    // const dynamicRoutes = blogPosts.map(p => ({
    //   url: `/blog/${p.slug}`,
    //   lastmod: p.updatedAt,
    //   changefreq: 'weekly',
    //   priority: 0.7,
    // }));

    const smStream = new SitemapStream({
        hostname: 'https://www.datadaur.com',
        xmlns: {news: false, xhtml: false, image: false, video: false},
    });

    staticRoutes.forEach(r => smStream.write(r));
    // if you have dynamicRoutes, do: dynamicRoutes.forEach(r => smStream.write(r));

    smStream.end();

    const sitemap = await new Promise((res, rej) => {
        let data = '';
        smStream.on('data', chunk => (data += chunk));
        smStream.on('end', () => res(data));
        smStream.on('error', rej);
    });

    writeFileSync(resolve('public/sitemap.xml'), sitemap.toString());
    console.log('✅ sitemap.xml written to public/');
})();
