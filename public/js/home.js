const socket = new WebSocket(`ws://${SERVER_URL}/no-auth/level`);
const level1Container = document.getElementById('level1-container');
const level2Container = document.getElementById('level2-container');
let config1;
let config2;

function toTime(date) {
    let hour = date.substring(11, 13);
    let minute = date.substring(14, 16);

    return hour + ':' + minute;
}

socket.addEventListener("message", function (e) {
    let result = JSON.parse(e.data)
    console.log(result)
    let label = [];
    let wlevel1 = [];
    let wlevel2 = [];

    for (let i = result.length - 30; i < result.length; i++) {
        label.push(toTime(result[i].time));
        wlevel1.push(result[i].first);
        wlevel2.push(result[i].second);
    }

    level1Container.innerHTML = "";
    level2Container.innerHTML = "";

    let level1 = document.createElement('canvas');
    level1.setAttribute('id', 'level1')
    level1Container.insertAdjacentElement('beforeend', level1)
    let level2 = document.createElement('canvas');
    level2.setAttribute('id', 'level2')
    level2Container.insertAdjacentElement('beforeend', level2)

    config1 = {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'Water level1',
                data: wlevel1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
        }
    };

    config2 = {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: 'Water level2',
                data: wlevel2,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
              }]
        }
    }

    new Chart(document.getElementById('level1'), config1);
    new Chart(document.getElementById('level2'), config2);
})