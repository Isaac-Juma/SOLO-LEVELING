import UserProfile from "../components/UserProfile.vue";
import { Api_Axios } from "../services/userService";

const userProfile = async () => {
    const img = Api_Axios.get('/users', {
        params: {
            Id: 123,
            level: 1
        }
    });
    return img.pipe()
}