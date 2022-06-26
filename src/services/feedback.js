import instance from "../config/http.config"

/**
 * 
 * @param {string} id 
 */
 export const getOne = (id) => {
    return instance.get(`/feedback/${id}`);
}