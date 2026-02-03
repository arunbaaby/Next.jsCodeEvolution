import "../globals.css";

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="">
          <h1 className="bg-red-400">Custom Auth Header</h1>
        </header>
        {children}
        <footer>
          <h1 className="bg-green-500">Custom Auth Footer</h1> 
        </footer>
      </body>
    </html>
  );
}
