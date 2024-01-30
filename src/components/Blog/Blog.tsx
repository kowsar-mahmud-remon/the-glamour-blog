import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});

  const blogData = data?.data;

  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-5 my-20">
        <h2 className="text-4xl font-semibold mb-8">Blog</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogData?.map((data: any) => (
            <Link href={`/blog/${data?._id}`} key={data?._id}>
              <div className=" bg-slate-200 p-4 h-80 rounded-lg hover:shadow-2xl">
                <h2 className="text-lg font-semibold mt-4">{data?.title}</h2>
                <h2 className="text-base font-medium mt-2">{data?.body}$</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
