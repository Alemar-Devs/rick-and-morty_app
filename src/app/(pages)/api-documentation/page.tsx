export default function ApiDocumentationPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Learn how to use the Rick and Morty API. This comprehensive documentation will guide you through
        all the available endpoints, parameters, and response formats.
      </p>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <p className="text-lg text-muted-foreground">
            The base URL for all API endpoints is: <code className="bg-muted px-2 py-1 rounded">https://rickandmortyapi.com/api</code>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Available Endpoints</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">/character</h3>
              <p className="text-muted-foreground">Get all characters or a single character by ID</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">/location</h3>
              <p className="text-muted-foreground">Get all locations or a single location by ID</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">/episode</h3>
              <p className="text-muted-foreground">Get all episodes or a single episode by ID</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
