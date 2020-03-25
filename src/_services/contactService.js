import http from "./httpService";
import { mailUrl } from "../config.json";

export function SendMail(data) {
    http.post(mailUrl, data)
    .then(res => {
        console.log(res);
        if ( res['data']['status_code']  == 200) {
            alert('Your message has been successfully sent. We will contact you very soon!');
        } else {
            alert('Error Found upon submitting, please reload your browser, or check your email and try again');
        }
    })
    .catch(err => {
        console.log(err);
            alert('Error Found upon submitting, please reload your browser, or check your email and try again');
    });;
}

export default {
    SendMail
}