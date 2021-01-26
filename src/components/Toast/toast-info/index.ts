import { Toast } from "vant";
import "./index.scss";

export default (message: string): void => {
  Toast({
    message,
    position: "bottom",
    duration: 2000,
  });
};
