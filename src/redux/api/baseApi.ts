import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
reducerPath:"baseApi",
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000/api"}),
endpoints:(builder)=>({
      getbooks:builder.query({
            query:()=>"/books"
      }),
      createBook:builder.mutation({
        query:(bookData)=>({
            url:'/books',
            method:'POST',
            body: bookData
        })    
      })
}),

})
export const {useGetbooksQuery,useCreateBookMutation}=baseApi;