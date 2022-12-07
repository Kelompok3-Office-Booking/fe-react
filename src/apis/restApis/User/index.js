import axiosInstance from "configs/AxiosInstance";
import Auth from "utils/auth";

const APIUser = {
    async getAllUsers() {
        try {
            const token = Auth.getAccessToken();
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await axiosInstance.get("/admin/users", config);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    async updateUsers(data) {
        try {
            const { id } = data;
            const response = await axiosInstance.put(`/admin/users/${id}`, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async deleteUsers(id) {
        try {
            const response = await axiosInstance.delete(`/admin/users/${id}`);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async searchUsersByEmail(email) {
        try {
            const response = await axiosInstance.get(`/admin/users/email?search=${email}`);
            return response;
        } catch (error) {
            console.log(email);
        }
    },
};

export default APIUser;