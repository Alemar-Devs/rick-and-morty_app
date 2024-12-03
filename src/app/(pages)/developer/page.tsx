export default function DeveloperPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-6">Developer Information</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About the Developer</h2>
          <p className="text-lg text-muted-foreground">
            This Rick and Morty application was developed with passion and attention to detail,
            utilizing modern web development technologies and best practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-2">
            <p className="text-lg text-muted-foreground">
              For questions, suggestions, or collaboration opportunities:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>GitHub: <a href="https://github.com/yourusername" className="text-primary hover:underline">@yourusername</a></li>
              <li>Email: <a href="mailto:contact@example.com" className="text-primary hover:underline">contact@example.com</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-primary hover:underline">Your Name</a></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Project 1</h3>
              <p className="text-muted-foreground">Description of another interesting project you've worked on.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="text-xl font-medium mb-2">Project 2</h3>
              <p className="text-muted-foreground">Description of another interesting project you've worked on.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
