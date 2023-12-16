const jsonplaceholder_url = "https://jsonplaceholder.typicode.com/";

const posts_wrapper = document.getElementById("posts-wrapper");

const urlParams = new URLSearchParams(window.location.search);
let userId = urlParams.get("userId");

//ana sayfa linkini gösteriyor:
//console.log(window.location.origin);

async function getPosts(userId) {
    const res = await fetch(jsonplaceholder_url + "/posts?userId=" + userId);
    const data = await res.json();

    for (const post of data) {
        posts_wrapper.innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p>${post.title}</p> <hr> 
                <p>${post.id}</p>
                <p>${post.body}</p>
            </div>
        </div>
    </div>`;
    }
}

if (!userId || userId === "" || userId > 10 || userId < 1) {
    const userId = prompt("Lütfen geçerli numara giriniz:");
    const parseUserId = parseInt(userId);
    if (parseUserId < 11 && parseUserId > 0) {
        (window.location.href =
            window.location.origin + "/posts.html?userId=" + parseUserId);
    } else {
        window.location.reload();
    } 
} else {
        getPosts();
} 
