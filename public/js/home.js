const socket = new WebSocket(`ws://${SERVER_URL}/test`);

socket.addEventListener("message", function (e) {
    let result = JSON.parse(e.data)
    console.log(result)

    // $('.container').append(`<p>${result.name}, ${result.time}</p>`)
})