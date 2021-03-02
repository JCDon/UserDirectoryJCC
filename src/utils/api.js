import axios from "axios";

export default {
    getEmployee: () => {
        return axios.get("https://randomuser.me/API/?results=50&nat=us")
    }
}