export const baseUrl = 'https://craigg.dev'

export default async function sitemap() {
  let routes = ['', '/portfolio'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
