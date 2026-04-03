import { ref, onMounted } from "vue";
import { Api_Axios } from "../services/userService";

const userName = ref('Loading...');
const userPoints = ref(0);
const userLevel = ref(0);
const userExp = ref(0);
const userPosition = ref(0);
const userPicture = ref('');

const fetchUserProfile = async () => {
  try {
    const response = await Api_Axios.get('/users/profile');
    const data = response.data.data;
    userName.value = data.username;
    userPoints.value = data.points || 0;
    userLevel.value = data.level || 0;
    userExp.value = data.experience || 0;
    userPosition.value = data.position || 0;
    userPicture.value = data.avatarUrl || '';
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    // Keep defaults or show error
  }
};

onMounted(() => {
  fetchUserProfile();
});

export const userProfile = {
  userName,
  userPoints,
  userLevel,
  userExp,
  userPosition,
  userPicture,
  profile: async () => {
    const img = await Api_Axios.get('/profile-pic');
    return img;
  },
};