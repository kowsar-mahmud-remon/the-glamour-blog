import { api } from "../../api/apiSlice";

const commentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllComments: build.query({
      query: () => "/comment",
      providesTags: ["comment"],
    }),

    getSingleComment: build.query({
      query: (id: any) => `/comment/${id}`,
      providesTags: ["comment"],
    }),

    createComment: build.mutation({
      query: (data: any) => ({
        url: `/comment/create-comment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),

    deleteComment: build.mutation({
      query: (id: any) => ({
        url: `/comment/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["comment"],
    }),

    updateComment: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/comment/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const {
  useGetAllCommentsQuery,
  useGetSingleCommentQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} = commentApi;
