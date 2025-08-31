import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
      reducerPath: "baseApi",
      baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
      tagTypes: ["Books", "Borrows"],
      endpoints: (builder) => ({
            getbooks: builder.query({
                  query: () => "/books",
                  providesTags: ["Books"]
            }),
            createBook: builder.mutation({
                  query: (bookData) => ({
                        url: '/books',
                        method: 'POST',
                        body: bookData
                  }),
                  invalidatesTags: ["Books"]
            }),
            deleteBook: builder.mutation({
                  query: (bookId) => ({
                        url: `/books/${bookId}`,
                        method: 'DELETE',
                  }),
                  invalidatesTags: ["Books"],
            }),
            getSingleBook: builder.query({
                  query: (bookId) => `/books/${bookId}`,
                  providesTags: (result, error, arg) => [{ type: 'Books', id: arg }],
            }),
            updateBook: builder.mutation({
                  query: ({ bookId, updatedData }) => ({
                        url: `/books/${bookId}`,
                        method: 'PUT',
                        body: updatedData,
                  }),
                  invalidatesTags: ["Books"],
            }),
            borrowBook: builder.mutation({
                  query: (borrowData) => ({
                        url: '/borrow',
                        method: 'POST',
                        body: borrowData,
                  }),
                  invalidatesTags: ["Books", "Borrows"],
            }),
            getBorrowSummary: builder.query({
                  query: () => '/borrow',
                  providesTags: ["Borrows"],
            }),
      }),

})
export const { useGetbooksQuery, useCreateBookMutation, useDeleteBookMutation, useGetSingleBookQuery, useUpdateBookMutation,useBorrowBookMutation,useGetBorrowSummaryQuery } = baseApi;