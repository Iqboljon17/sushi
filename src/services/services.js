import API from "./API";

export default {
    login(body) {
        return API.post("/token", body);
    },
    getOrders(token) {
        return API.get("/get_orders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }
};
