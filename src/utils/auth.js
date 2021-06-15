// 根据token判定用户是否已经登录
export default function isLogin() {
    let jwt = localStorage.getItem('jwt');
    if (jwt) return JSON.parse(jwt);
}