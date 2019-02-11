import API from '../Api'
const ParticipantController = {
    getAll: (limit,sigla) => API.get(`Participant/getAll/?limit=${limit}&state=${sigla}`), 
}
export default ParticipantController