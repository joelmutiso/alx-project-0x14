import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#121018] text-white">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;