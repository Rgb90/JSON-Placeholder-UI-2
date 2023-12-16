const jsonplaceholder_url = "https://jsonplaceholder.typicode.com/";

const users_wrapper = document.getElementById("users-wrapper");

async function getUsers() {
    const res = await fetch(jsonplaceholder_url + "/users");
    const data = await res.json();
    for (user of data) {
        users_wrapper.innerHTML += `<div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body shadow">
                <h4 class="card-title"><i class="bi bi-person-circle"></i> User</h4> <hr>
                <p><strong>ID: </strong>${user.id}</p>
                <p><strong>Name: </strong>${user.name}</p>
                <p><strong>Username: </strong>${user.username}</p>
                <p><strong>Street: </strong>${user.address.street}</p>
                <p><strong>City: </strong>${user.address.city}</p>
                <p><strong>Company: </strong>${user.company.name}</p>
                <h5><i class="bi bi-globe"></i> Contact</h5> <hr> 
                <p><strong>Email: </strong>${user.email}</p>
                <p><strong>Phone: </strong>${user.phone}</p>
                <p><strong>Website: </strong>${user.website}</p>
            </div>
        </div>
    </div>`;
    }
}

getUsers();