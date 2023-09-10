$('#login').click(function (e) {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${SERVER_URL}/api/auth/login`;
})

$('#login-guest').click(function (e) {
    window.location.href = `/pages/login.html?code=guest`;
})