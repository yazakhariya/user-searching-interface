import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gitApi = createApi({
  reducerPath: 'gitApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/search/' }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: ({ username, order, page }) => {
        return {
          url: `users?q=${username}&sort=repositories&order=${order}&page=${page}`,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      },
    }),
  }),
})

export const { useGetUserByNameQuery } = gitApi