import axios from "axios";

class ApiService {
    static async connect(host, api_key) {
        try {
            const {data: {data: {username}}} = await axios.post(`${host}/api/connect`, {api_key});
            return username;
        } catch (e) {
            return false;
        }
    }

    static async histories(host, api_key) {
        try {
            const {data: {data: {clips}}} = await axios.get(`${host}/api/all?api_key=${api_key}`);
            return clips;
        } catch (e) {
            return false;
        }
    }
}

export default ApiService;