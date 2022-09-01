export default function authUserID() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.user) {
    return user.user;
  } else {
    return null;
  }
}
