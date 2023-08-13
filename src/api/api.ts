import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gitApi = createApi({
  reducerPath: 'gitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/' }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: ({username, order, page}) => `users?q=${username}&sort=repositories&order=${order}&page=${page}`,
    }),
  }),
})

export const { useGetUserByNameQuery } = gitApi