export default {
  repository: 'https://github.com/lalit2005/staticshield',
  titleSuffix: ' Documentation',
  logo: (
    <>
      <img
        src="https://staticshield.vercel.app/staticshield.png"
        style={{
          height: '25px',
          width: '25px',
          marginRight: '10px',
        }}
        alt="asd"
      />
      <span className="hidden mr-2 font-bold md:inline">StaticShield</span>
      <span className="hidden mr-2 text-gray-600 md:inline">Documentation</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#78f8e1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="StaticShield Docs: Easiest way to password protect websites"
      />
      <meta
        name="og:description"
        content="StaticShield Docs: Easiest way to password protect websites"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <style>{`
        html {
          font-family: Inter, system-ui, sans-serif !important;
        }
      `}</style>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © StaticShield.</>,
}
