export default function authUserID() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.id) {
    return user.id;
  } else {
    return null;
  }
}
