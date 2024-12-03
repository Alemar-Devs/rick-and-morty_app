export default function DocsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Welcome to the Rick and Morty App documentation. This guide will help you understand
            how to use all the features available in our application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">Character Search</h3>
              <p className="text-muted-foreground">
                Browse and search through all Rick and Morty characters. Filter by name, status,
                species, and more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Favorites</h3>
              <p className="text-muted-foreground">
                Save your favorite characters to quickly access them later. Your favorites are
                stored locally in your browser.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Dark Mode</h3>
              <p className="text-muted-foreground">
                Toggle between light and dark themes for comfortable viewing in any environment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium mb-2">How do I save a character to favorites?</h3>
              <p className="text-muted-foreground">
                Click the heart icon on any character card to add them to your favorites list.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">How do I switch between light and dark mode?</h3>
              <p className="text-muted-foreground">
                Use the theme toggle button in the navigation bar to switch between light and dark modes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
