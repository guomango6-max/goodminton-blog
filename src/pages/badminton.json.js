import { getCollection } from 'astro:content';

const BADMINTON_TAG = /羽毛球|badminton|sulkapallo/i;

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => data.published))
		.filter((post) => (post.data.tags || []).some((tag) => BADMINTON_TAG.test(tag)))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((post) => ({
			id: post.id,
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate.toISOString(),
			updatedDate: post.data.updatedDate?.toISOString() || null,
			published: post.data.published,
			tags: post.data.tags || [],
			lang: post.data.lang,
			href: new URL(`/blog/${post.id}/`, context.site).toString(),
		}))
		.slice(0, 20);

	return new Response(JSON.stringify({ articles: posts }), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=300, s-maxage=300',
		},
	});
}
