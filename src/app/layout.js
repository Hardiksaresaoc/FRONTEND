import Header from "@/component/header";
import "./globals.css";
import Footer from "@/component/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // console.log({ children });

  return (
    <html>
      <body>{children}</body>
      <Footer />
    </html>
  );
}
