import React, { ReactNode } from "react";
import "./globals.css";
import Header from "../components/Header";

interface LayoutProps {
  children: ReactNode; // Specifies that children can be any valid React node
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Root HTML structure */}
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Portfolio of Nyamwe Cliff Jansen, showcasing projects and skills."
          />
          <meta name="author" content="Nyamwe Cliff Jansen" />
          <link rel="icon" href="/favicon.ico" />
          <title>Nyamwe Cliff Jansen | Portfolio</title>
        </head>
        <body className="bg-gray-50 text-gray-900 font-sans">
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="container mx-auto py-12 px-6">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center py-6 mt-16 shadow-inner">
            <p className="text-sm">
              © {new Date().getFullYear()} Nyamwe Cliff Jansen. All rights
              reserved.
            </p>
          </footer>
        </body>
      </html>
    </>
  );
};

export default Layout;
