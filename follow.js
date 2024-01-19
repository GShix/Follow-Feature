var istatus = document.querySelector("#stranger");
var follow = document.querySelector("#follow");
// var unfollow = document.querySelector("#btn");
var flag = 0;
follow.addEventListener("click", function () {
    if (flag == 0) {
        confirm("You are over 18")
        istatus.innerHTML = 'Following';
        istatus.style.color = 'rgb(84, 151, 234)';
        follow.innerHTML = 'Unfollow';
        flag = 1;

    }
    else {
        istatus.innerHTML = 'Stranger';
        istatus.style.color = 'Stranger';
        istatus.style.color = 'red'
        follow.innerHTML='Follow'
        flag = 0;
    }
})