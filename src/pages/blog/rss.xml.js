import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ARTIST_NAME } from '../../consts';

export async function GET(context) {
  const items = [];

  const blogs = await getCollection('blog');
  console.log(blogs);
  blogs.forEach(blog => {
    items.push({
      link: `${context.site}/blog/${blog.slug}`,
      title: blog.data.title,
      pubDate: blog.data.pubDate,
      description: blog.data.description || '',
    });
  });

  return rss({
    title: `${ARTIST_NAME}' Blog`,
    description: `A source of regular updates for what ${ARTIST_NAME} is upto.`,
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
