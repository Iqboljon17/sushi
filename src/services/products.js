import API from "./API"
export const getCategories = async () => {
    return await API.get("/get_category")
}
export const getCategorieProducts = async (id) => {
    return await API.get("/get_product", {
        params: {
            category_id: id
        }
    })

}