import config from "../config/config";
import AxiosService from "../services/axios-service.js";

export default class EmployeeService {
  baseUrl = config.baseUrl;
  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}employee`, data);
  }
  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}employee`);
  }
  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}employee/${id}`);
  }
}
