# WordPress + Next.js Headless CMS Demo

A modern headless CMS implementation showcasing how to build a decoupled frontend with Next.js 16 that consumes WordPress REST API data. This project demonstrates the integration between a traditional WordPress backend and a modern React-based frontend.

> **🔗 Companion Repository**: This frontend works in conjunction with [consid-wordpress-learner](https://github.com/michaelclaesson/consid-wordpress-learner), which provides the WordPress backend with custom post types, taxonomies, and REST API endpoints.

## What This Project Is

This is a **Next.js 16 frontend application** that connects to a WordPress installation via the WordPress REST API. It demonstrates:

- **Headless WordPress Architecture**: Using WordPress solely as a content management system while delivering content through a modern JavaScript framework
- **Custom Post Types**: Integration with WordPress custom post types (Books) and custom taxonomies (Genres)
- **Server-Side Rendering**: Leveraging Next.js App Router for optimal performance and SEO
- **TypeScript Implementation**: Fully typed API interactions and component props
- **Modern React Patterns**: Using React 19 with Server Components and Client Components

### Key Features

- 📚 **Book Library Management**: Display books from WordPress custom post types
- 🏷️ **Genre Filtering**: Browse books by genre taxonomy
- 🎨 **Tailwind CSS**: Modern, utility-first styling
- 🔄 **Dynamic Routing**: Server-side rendered pages for books and genres
- 🌐 **REST API Integration**: Clean abstraction layer for WordPress API calls

## What You Can Learn

This project serves as an educational resource for:

1. **Headless CMS Architecture**
   - Separating content management from presentation
   - Benefits and tradeoffs of decoupled systems
   - API-first content delivery

2. **Next.js 16 App Router**
   - Server Components vs Client Components
   - Dynamic routes and parameters
   - Data fetching patterns with async/await
   - Server-side rendering (SSR) strategies

3. **WordPress REST API**
   - Consuming WordPress content via REST endpoints
   - Working with custom post types and taxonomies
   - Handling WordPress data structures

4. **TypeScript in Practice**
   - Type-safe API interactions
   - Interface definitions for WordPress data
   - Generic functions for reusable code

5. **Modern React Development**
   - React 19 features
   - Component composition
   - Client-side navigation with Next.js
   - Active link state management

6. **Professional Project Structure**
   - Separation of concerns (API layer, components, utilities)
   - Environment configuration
   - Clean code organization

## Requirements

### System Requirements

- **Node.js**: Version 20.x or higher
- **npm**: Version 10.x or higher (comes with Node.js)
- **WordPress Installation**: Version 5.x or higher with REST API enabled

### WordPress Backend Requirements

Your WordPress installation must have:

1. **Custom Post Type**: A `book` post type registered
2. **Custom Taxonomy**: A `genre` taxonomy associated with books
3. **REST API Access**: WordPress REST API must be accessible (enabled by default)
4. **CORS Configuration**: Properly configured if WordPress and Next.js run on different domains

### Environment Variables

Create a `.env.local` file in the project root:

```env
WP_REST_ENDPOINT=https://your-wordpress-site.com/wp-json/wp/v2
WP_ROOT=https://your-wordpress-site.com
```

- `WP_REST_ENDPOINT`: Full URL to your WordPress REST API v2 endpoint
- `WP_ROOT`: Base URL of your WordPress installation

### Development Dependencies

All dependencies are listed in `package.json`:

- React 19.2.0
- Next.js 16.0.1
- TypeScript 5.x
- Tailwind CSS 4.x
- ESLint for code linting

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env.local` file with your WordPress site URLs:

```env
WP_REST_ENDPOINT=http://localhost/wp-json/wp/v2
WP_ROOT=http://localhost
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
wp-test-frontend/
├── app/                    # Next.js App Router pages
│   ├── books/             # Book listing and detail pages
│   ├── genre/             # Genre-filtered book pages
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   └── Header.tsx         # Navigation header
├── lib/                   # Core utilities and API
│   ├── api.ts            # API function exports
│   ├── rest-client.ts    # WordPress REST client
│   └── types.ts          # TypeScript type definitions
├── public/               # Static assets
└── package.json          # Project dependencies
```

## API Layer

The project includes a clean abstraction for WordPress API calls:

- **`rest-client.ts`**: Low-level fetch wrapper for REST API
- **`api.ts`**: High-level functions for specific data types
- **`types.ts`**: TypeScript interfaces for WordPress data

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### WordPress Resources
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Custom Post Types](https://developer.wordpress.org/plugins/post-types/)
- [Custom Taxonomies](https://developer.wordpress.org/plugins/taxonomies/)

## License

This project is for educational and demonstration purposes.