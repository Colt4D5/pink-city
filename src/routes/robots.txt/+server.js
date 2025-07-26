/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const robotsTxt = `User-agent: *
Allow: /

# Block crawling of SvelteKit internal files
Disallow: /_app/

# Allow important static assets
Allow: /_app/immutable/

# Sitemap location
Sitemap: https://pinkcitycakes.com/sitemap.xml

# Crawl-delay for politeness (optional)
Crawl-delay: 1
`.trim();

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
