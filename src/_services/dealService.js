import http from "./httpService";
import { boundGetDeals } from '../_actions/dealActions';
import { apiUrl } from "../../config.json";

const apiEndpoint = apiUrl + "/deal";

export const getDeals = () => {
    http.get(apiEndpoint)
    .then((res) => {
        let deals = res.data;
        if (deals) {
            boundGetDeals(deals);
            return deals;
        }
    });
}

export default {
    getDeals
};
