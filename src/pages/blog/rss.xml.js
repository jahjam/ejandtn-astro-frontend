import rss from '@astrojs/rss';
import { ARTIST_NAME } from '../../consts';

export async function get(context) {
  const items = [];

  const API = import.meta.env.API;
  const res = await fetch(`${API}/blogs`);
  const { data: blogs } = await res.json();

  blogs.forEach(blog => {
    items.push({
      link: `${context.site}/blog/${blog.attributes.slug}`,
      title: blog.attributes.title,
      pubDate: blog.attributes.publishedAt,
      description: blog.attributes.description || '',
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
