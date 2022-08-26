export default function authUserID() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.id) {
    return { id: user.id };
  } else {
    return {};
  }
}
