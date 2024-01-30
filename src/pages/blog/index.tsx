import BlogPage from "@/components/Blog/Blog";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const blog = () => {
  return (
    <div>
      <BlogPage></BlogPage>
    </div>
  );
};

export default blog;

blog.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
