// import http from "./httpService";
// import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/doctors";

// export async function getAllDoctors() {
//     return await http.get(apiEndpoint);
// }

// export async function getDoctorById(doctorId) {
//     return await http.get(`${apiEndpoint}/${doctorId}`);
// }

// export async function addDoctor(doctor) {
//     return await http.post(apiEndpoint, {
//         firstName: doctor.firstName,
//         middleName: doctor.middleName,
//         lastName: doctor.lastName
//     });
// }

// export async function updateDoctor(doctor) {
//     return await http.put(`${apiEndpoint}/${doctor.id}`, {
//         id: doctor.id,
//         firstName: doctor.firstName,
//         middleName: doctor.middleName,
//         lastName: doctor.lastName
//     });
// }

// export async function deleteDoctor(doctorId) {
//     return await http.delete(`${apiEndpoint}/${doctorId}`);
// }

// export default {
//     getAllDoctors,
//     getDoctorById,
//     addDoctor,
//     updateDoctor,
//     deleteDoctor
// };
