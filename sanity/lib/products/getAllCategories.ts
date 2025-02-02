import { defineQuery } from "next-sanity"
import { sanityFetch } from "../live"

export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
        *[_type == "category" && !(_id in path("drafts.**"))] | order(title asc)

    `)
    try {
        const categories = await sanityFetch({
            query: ALL_CATEGORIES_QUERY,
        })
        return categories.data||[]
    } catch (error) {
        console.error('Error Fethching all the categories :',error);
        return [];
    }
}