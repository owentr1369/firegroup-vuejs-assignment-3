/* eslint-disable no-unused-vars */
import { getCookie } from "@/plugins/cookie";
("@/plugins/cookie");

export default async function ({ next, to }) {
  let tokenExist = !!getCookie("userToken");
  if (!tokenExist) {
    next({ name: "Login" });
    return false;
  }
  return true;
}
