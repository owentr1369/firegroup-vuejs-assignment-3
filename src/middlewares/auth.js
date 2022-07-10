/* eslint-disable no-unused-vars */
import cookieData from "@/plugins/cookie";

export default async function ({ next, to }) {
  if (!cookieData) {
    next({ name: "Login" });
    return false;
  }
  return true;
}
