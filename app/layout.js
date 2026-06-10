export const metadata = {
  title: "One Space Studio",
  description: "Creative Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#06080A" }}>
        {children}
      </body>
    </html>
  );
}
