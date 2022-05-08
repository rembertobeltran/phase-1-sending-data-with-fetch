//Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
    .then(response => {
        return response.json();
    })
    .then(object => {
        document.body.innerHTML = object["id"];
    })
    .catch(error => {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message;
    })
}