/** @type {import('next').NextConfig} */
const nextConfig = {
    env :{
        GOOGLE_ID: '523835250295-eeama0p8lpjjj4mfjsls08enj6r6a5fe.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        MONGODB_URI: 'mongodb+srv://tejasghlade:$tejaslade$@cluster0.o4s4g0i.mongodb.net/?retryWrites=true&w=majority',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_URL_INTERNAL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'IkbeVTLtx2GMSE4h7ThGHwhvaeM4VD4plBkB9wHX0Eg='
      },
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
  module.exports = nextConfig