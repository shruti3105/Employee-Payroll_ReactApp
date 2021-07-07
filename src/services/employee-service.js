import config from "../config/config";
import AxiosService from "./axios-service";

const URL = config.baseUrl + "employeepayrollservice";

export default class EmployeeService {
  addEmployee(employeeData) {
    return AxiosService.postService(`${URL}/create`, employeeData);
  }
  getAllEmployees() {
    return AxiosService.getService(`${URL}/get`);
  }
  getEmployeeById(id) {
    return AxiosService.getService(`${URL}/get/${id}`);
  }
  updateEmployee(data) {
    return AxiosService.putService(`${URL}/update/${data.id}`, data);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${URL}/delete/${id}`);
  }
}
