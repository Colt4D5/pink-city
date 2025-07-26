/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const baseUrl = 'https://pinkcitycakestudio.com';
	
	// Define your site's main pages
	const pages = [
		{ url: '', priority: '1.0', changefreq: 'monthly' },
		// Add any other pages you have
	];

	const lastmod = new Date().toISOString().split('T')[0];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="https://www.w3.org/1999/xhtml"
	xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
>
	${pages.map(page => `
	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`).join('')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
