import Navbar from "@/component/Navbar";
import BlogsPage from "./blogs/page";
import Header from "@/component/Header";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <Header></Header>
     <BlogsPage></BlogsPage>
     
      </div>
    </div>
  );
}
