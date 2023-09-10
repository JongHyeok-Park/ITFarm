const params = new URL(location.href).searchParams;
const code = params.get('code')

if (!!code) {
    if (code == "guest") {
        alert("게스트입니다.")
        location.href = "/pages/Home.html"
    } else {
        $.get(SERVER_URL + "/api/auth/login?code=" + code).then((res) => {
            setCookie("AccessToken", res.accessToken)
            setCookie("RefreshToken", res.refreshToken)
            location.href = "/pages/Home.html"
        }).catch((err) => {
            alert("관리자에게 문의하세요.")
        })
    }
} else {
    alert("잘못된 접근입니다.");
    location.href = "/pages/index.html";
}