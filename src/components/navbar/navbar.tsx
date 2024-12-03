import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="font-heading">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 py-4">
                <Link
                  href="/favorites"
                  className="block px-2 py-1 text-lg hover:text-primary"
                >
                  Favorites
                </Link>

                <div className="px-2 py-1">
                  <h3 className="mb-2 text-lg font-heading font-medium">
                    About
                  </h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link
                      href="/about"
                      className="block text-sm hover:text-primary"
                    >
                      About Rick and Morty
                    </Link>
                    <Link
                      href="/characters"
                      className="block text-sm hover:text-primary"
                    >
                      Meet the Characters
                    </Link>
                    <Link
                      href="/api-documentation"
                      className="block text-sm hover:text-primary"
                    >
                      API Documentation
                    </Link>
                  </div>
                </div>

                <div className="px-2 py-1">
                  <h3 className="mb-2 text-lg font-heading font-medium">
                    More
                  </h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    <Link
                      href="/docs"
                      className="block text-sm hover:text-primary"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/tech"
                      className="block text-sm hover:text-primary"
                    >
                      Technologies
                    </Link>
                    <Link
                      href="/developer"
                      className="block text-sm hover:text-primary"
                    >
                      Developer Info
                    </Link>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <Button className="w-full">Sign In</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - Centered on mobile, left on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:transform-none">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/rick-morty-logo.png"
              alt="Rick and Morty Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="inline-block font-heading font-bold">
              Rick & Morty
            </span>
          </Link>
        </div>

        {/* Main navigation - Centered on desktop */}
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2 lg:space-x-4">
              <NavigationMenuItem>
                <Link href="/favorites" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Favorites
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                    <li>
                      <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            Rick and Morty
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Learn more about Rick and Morty
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/characters" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">Characters from the animated series</div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Meet the characters and their details
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/api-documentation" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            API Documentation
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Learn how to use the API
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                    <li>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            Documentation
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Learn how to use the app and its features
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tech" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            Technologies
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            Explore the tech stack used in this project
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developer" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium">
                            Developer Info
                          </div>
                          <p className="line-clamp-2 text-sm text-muted-foreground">
                            About the developer and contact information
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <ThemeToggle />
          <Button className="hidden md:inline-flex">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}
