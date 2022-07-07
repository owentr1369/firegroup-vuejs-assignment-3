/* eslint-disable no-unused-vars */
let isAuthenticated = true;
export default async function ({ next, to }) {
  if (!isAuthenticated) {
    next({ name: "Login" });
    return false;
  }
  return true;
}
