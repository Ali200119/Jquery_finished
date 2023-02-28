$(document).ready(function () {
    let users = [];
    let usersList = $("main ul");


    if (JSON.parse(localStorage.getItem("users")) != null) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    let createUser = $("main .inputs button");

    createUser.click(function () {
        let userName = $("main .inputs input").first().val();
        let userSurname = $("main .inputs").children().eq(1).val();

        if (userName != "" && userSurname != "") {
            usersList.html("");

            users.push({
                id: userName + new Date().getMilliseconds(),
                name: userName,
                surname: userSurname
            })

            localStorage.setItem("users", JSON.stringify(users));

            for (const user of users) {
                usersList.append(`<li data-id="${user.id}">${user.name} ${user.surname}</li>`);
            }

            $("main .inputs").first().val("");
            $("main .inputs").children(1).val("");

            let li = usersList.children();

            removeLi(li);
        }
    })

    for (const user of users) {
        usersList.append(`<li data-id="${user.id}">${user.name} ${user.surname}</li>`);
    }

    let li = usersList.children();

    removeLi(li);

    
    
    
    
    
    function removeLi(li) {
        li.click(function () {
            users = users.filter(u => u.id != $(this).attr("data-id"));
            localStorage.setItem("users", JSON.stringify(users));
            $(this).remove();
        })
    }
})