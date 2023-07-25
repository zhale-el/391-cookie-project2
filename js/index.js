function getCookie(cookieName) {
  let cookiesArray = document.cookie.split(";");
  let mainCookie = null;
  cookiesArray.some((cookie) => {
    mainCookie = cookie.substring(cookie.indexOf("=") + 1);
    return true;
  });

  return mainCookie;
}
window.addEventListener("load", () => {
  let isLogin = getCookie("login-token");
  if (!isLogin) {
    location.href = "http://127.0.0.1:5500/login.html";
  }
});
