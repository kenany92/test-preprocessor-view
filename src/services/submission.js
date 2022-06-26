import instance from "../config/http.config"

export const getAll = () => {
    return instance.get('/submissions');
}