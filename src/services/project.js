import instance from "../config/http.config"

export const getAll = () => {
    return instance.get('/projects');
}

/**
 * 
 * @param {{name: string, threshold: number, weight: string}} project 
 */
export const create = (project) => {
    
    return instance.post('/projects', project);
}

/**
 * 
 * @param {string} id 
 */
export const getOne = (id) => {
    return instance.get(`/projects/${id}`);
}