module.exports = {
  plugins: [
    require('tailwindcss')(),
    require('@fullhuman/postcss-purgecss')({
      content: [ `./public/**/*.html`, `./src/**/*.vue` ],
      defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
      },
      whitelist: [],
      whitelistPatterns: [ /list/, /^bg-/, /^hover:bg-/, /^dark:hover:bg-/, /^dark:bg-/, /^font-bold$/, /^text-/, /^hover:text-/, /^dark:hover:text-/, /^dark:text-/, /^mx-/, /^ml-/],
      safelist: [ /list/, /^bg-/, /^hover:bg-/, /^dark:hover:bg-/, /^dark:bg-/, /^font-bold$/, /^text-/, /^hover:text-/, /^dark:hover:text-/, /^dark:text-/, /^mx-/, /^ml-/]
    }),
    require('autoprefixer')(),
  ],
}
