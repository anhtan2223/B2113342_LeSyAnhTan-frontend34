import apiAxios from "./api.axios.js"
// const defaultURL = 'https://jsonplaceholder.typicode.com/users'
const defaultURL = 'http://localhost:3000'

class CreateServiceClient
{
    constructor(URL = defaultURL)
    {
        this.service = apiAxios(URL)
    }
    async getAll()
    {
        return (await this.service
            .get('/api/contact')).data 
            // .get().data)
        //Return Data but type Promise
        //Use Await or Then to catch Data
    }
    async create(data)
    {
        return (await this.service
            .post('/api/contact/',data)).data
    }
    async deleteAll()
    {
        return (await this.service
            .delete('/api/contact/')).data
    }
    async deleteByID(id)
    {
        return (await this.service
            .delete(`/api/contact/${id}`)).data
    }
    async updateByID(id,data)
    {
        return (await this.service
            .put(`/api/contact/${id}` , data)).data
    }
    async getByID(id)
    {
        return (await this.service
            .get(`/api/contact/${id}`)).data
    }
    async getFavorite()
    {
        return (await this.service
            .get('/api/contact/favorite')).data
    }
}

export default  new CreateServiceClient()