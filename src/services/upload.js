import instance from "../config/http.config"

/**
 * 
 * @param {FormData} data 
 */
export const upload = (data) => {
    
    return instance.post('/submissions', data, {headers: {'Content-Type': 'multipart/form-data; boundary=12345'}})
}