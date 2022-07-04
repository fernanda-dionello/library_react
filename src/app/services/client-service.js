import httpService from "./http-service";

const clientService = {

  getClients: async () => {
    return await httpService.getAll('client');
  },

  deleteClient: async (id) => {
    return await httpService.deleteRegister('client', id);
  },

  updateClient: (id) => {
    window.location = '/update/' + id
  },
}

export default clientService;
