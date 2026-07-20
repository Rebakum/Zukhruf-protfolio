import { useEffect } from "react";
import { Blog } from "../components/Blog";
import { Newsletter } from "../components/Newsletter";

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog - Zukhruf Creative Design Academy";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
      <Blog />
      <Newsletter />
    </div>
  );
}
