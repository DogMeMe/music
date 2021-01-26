import { App } from "vue";
import { PhoneRegexp } from "./regexp";

export default {
  install: (app: App<Element>, option: object) => {
    app.config.globalProperties.phoneFormat = (
      phone: string,
      ctcode: string | number = 86
    ) => {
      if (!phone || !PhoneRegexp.test(phone)) {
        console.warn(`phone need 11's number begin width 1, but got ${phone}`);
        return "";
      }
      return `+${ctcode} ${phone.substr(0, 3)}****${phone.substr(7, 4)}`;
    };
    app.config.globalProperties.numberFormat = (
      number: number
    ): string | number => {
      if (number > 9999999999999) {
        return `${Number((number / 10000000000000).toFixed(2)) / 1}兆`;
      }
      if (number > 99999999) {
        return `${Number((number / 100000000).toFixed(2)) / 1}亿`;
      }
      if (number > 9999) {
        return `${Number((number / 10000).toFixed(2)) / 1}万`;
      }
      return number;
    };
  },
};
