import http from "./httpService";
import { boundGetDeal } from '../_actions/hubspotActions';
import { hubspotUrl, hubspotKey } from "../../config.json";

export const getDeal = hubspotDealId => {
    http.get(hubspotUrl + hubspotDealId + "?hapikey=" + hubspotKey)
    .then((res) => {
        let deal = res.data;
        if (deal) {
            boundGetDeal(deal);
            return deal;
        }
    })
}

export const postDeal = deal => {
    return http.post(hubspotUrl, deal);
}

export default {
    getDeal,
    postDeal
};
