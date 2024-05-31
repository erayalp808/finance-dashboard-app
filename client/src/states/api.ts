import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (builder) => ({
        getKpis: builder.query({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
    }),
})

export const { useGetKpisQuery } = api;