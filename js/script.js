fetch("https://reqres.in/api/users").then(response => response.json()).then(objetJson => {
    let listUser = objetJson.data;
    console.log(listUser);
});


