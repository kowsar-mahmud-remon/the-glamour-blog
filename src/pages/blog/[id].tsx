import RootLayout from "@/components/Layout/RootLayout";
import { useGetSingleBlogQuery } from "@/redux/features/blog/blogApi";

import { useRouter } from "next/router";
import React from "react";

const NestedPage = () => {
  const router = useRouter();

  const id = router.query.id;

  const { data, isLoading } = useGetSingleBlogQuery(id);

  const bikeData = data?.data;

  if (isLoading) {
    return (
      <div className="flex justify-center my-20 text-success">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-10">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Blog Details Page
      </h2>
      <div className="lg:w-[50%] mx-auto">
        <div className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl">
          <div className="mt-4">
            <h2 className="text-lg font-semibold">{bikeData?.title}</h2>

            <h2 className="text-base font-medium mt-2">{bikeData?.body}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedPage;

NestedPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
