import Image from 'next/image';

export default function TechPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Built with Modern Technologies
            </h1>
            <p className="text-xl text-gray-200">
              Discover the cutting-edge tech stack that powers our Rick and Morty application,
              featuring Next.js 14, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <Image
              src="/tech-stack.png"
              alt="Technology Stack"
              width={500}
              height={300}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        {/* Core Technologies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Core Technologies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/next.svg"
                  alt="Next.js"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">Next.js 15.0.3</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                The React framework for production, providing features like server-side
                rendering, static site generation, and API routes.
              </p>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/typescript.svg"
                  alt="TypeScript"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">TypeScript 5</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Adds static typing to JavaScript, enhancing code quality and developer
                experience with better tooling and error detection.
              </p>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/node.svg"
                  alt="Node.js"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">Node.js 20.11.1</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                JavaScript runtime built on Chrome's V8 JavaScript engine,
                enabling server-side JavaScript execution.
              </p>
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </section>

        {/* UI Framework & Styling */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">UI Framework & Styling</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/tailwind.svg"
                  alt="Tailwind CSS"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">Tailwind CSS 3.4.1</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Utility-first CSS framework for rapid UI development, with built-in
                dark mode support and responsive design capabilities.
              </p>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/radix.svg"
                  alt="Radix UI"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">Radix UI</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Unstyled, accessible components for building high-quality design systems
                and web applications.
              </p>
              <a
                href="https://www.radix-ui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/lucide.svg"
                  alt="Lucide Icons"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">Lucide React 0.462.0</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Beautiful and consistent icons for React applications, with support
                for customization and theming.
              </p>
              <a
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Development Tools</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/pnpm.svg"
                  alt="pnpm"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">pnpm Package Manager</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Fast, disk space efficient package manager that supports monorepos
                and has strict dependency resolution.
              </p>
              <a
                href="https://pnpm.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/eslint.svg"
                  alt="ESLint"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">ESLint</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Static code analysis tool for identifying problematic patterns in
                JavaScript code and enforcing code style.
              </p>
              <a
                href="https://eslint.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/postcss.svg"
                  alt="PostCSS"
                  width={40}
                  height={40}
                />
                <h3 className="text-xl font-semibold">PostCSS</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Tool for transforming CSS with JavaScript, enabling modern CSS features
                and optimizations.
              </p>
              <a
                href="https://postcss.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </section>

        {/* Utility Libraries */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Utility Libraries</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">CV</span>
                </div>
                <h3 className="text-xl font-semibold">class-variance-authority</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                CSS-in-TS library for creating variant-aware components with TypeScript
                support.
              </p>
              <a
                href="https://cva.style"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">TM</span>
                </div>
                <h3 className="text-xl font-semibold">tailwind-merge</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Utility for merging Tailwind CSS classes without style conflicts.
              </p>
              <a
                href="https://github.com/dcastil/tailwind-merge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">NT</span>
                </div>
                <h3 className="text-xl font-semibold">next-themes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Perfect dark mode in Next.js with support for system preference and
                manual switching.
              </p>
              <a
                href="https://github.com/pacocoursey/next-themes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
