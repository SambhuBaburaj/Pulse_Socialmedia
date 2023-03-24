function HandleErrors() {
  localStorage.removeItem("UserAccessToken");
  localStorage.removeItem("user");

  window.location.replace("http://localhost:3000/");
}

export default HandleErrors;
