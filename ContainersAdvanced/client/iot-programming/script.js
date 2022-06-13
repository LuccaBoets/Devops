function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function showUsers(data){
    let users = JSON.parse(data);
    let userList = document.getElementById("userList");
    while(userList.childElementCount){
        userList.removeChild(userList.firstChild);
    }
    for (const [index, user] of users.entries()) {
        let listItem = document.createElement('li');
        listItem.textContent = index + " " + user.firstname + " " + user.lastname;
        if (!user.state){
            listItem.style.backgroundColor = "red";
        } else {
            listItem.style.backgroundColor = "green";
        }
        userList.appendChild(listItem);
    }
}


function refresh() {
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/";
    httpGetAsync(baseUrl + "iot-programming/api/users", showUsers);
}

document.getElementById("refreshButton").addEventListener("click", refresh);