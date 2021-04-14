let newUser = document.getElementById('newUser');
let admin = document.getElementById('admin');
let login = document.getElementById('login');
let count = document.getElementById('count');
let register = document.getElementById('register');
let password = document.getElementById('passwordCreate');
let createUser = document.getElementById('createUser');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let number = document.getElementById('number');
let email = document.getElementById('email');
let password1 = document.getElementById('password');
let signin = document.getElementById('signin');
let emailCreation = document.getElementById('emailCreation');
let setPassword = document.getElementById('setPassword');
let confirmPassword = document.getElementById('confirmPassword');
let confirm = document.getElementById('confirm');
let Welcome = document.getElementById("Welcome");
let forgot = document.getElementById('forgot');
let dashboard = document.getElementById('dashboard');
let adminDash = document.getElementById('adminDash');
let Signout = document.getElementById('Signout');
let Signout1 = document.getElementById('Signout1');
let changePassword = document.getElementById('changePassword');
let emailId = document.getElementById('emailId');
let setPassword1 = document.getElementById('setPassword1');
let confirmPassword1 = document.getElementById('confirmPassword1');
let confirmChange = document.getElementById('confirmChange');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');
let back4 = document.getElementById('back4');
let userList = document.getElementById('userList');

back4.onclick = () => {
    login.classList.add('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.remove('d-none');
    email.value = "";
    password.value = "";
    password1.value = "";
    firstname.value = "";
    lastname.value = "";
    number.value = "";
    emailId.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
back1.onclick = () => {
    login.classList.remove('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    emailId.value = "";
    password.value = "";
    firstname.value = "";
    password1.value = "";
    lastname.value = "";
    number.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
back2.onclick = () => {
    login.classList.add('d-none');
    register.classList.remove('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    password.value = "";
    firstname.value = "";
    password1.value = "";
    lastname.value = "";
    number.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    emailId.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
back3.onclick = () => {
    login.classList.remove('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    changePassword.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    password1.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
    number.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    emailId.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
adminDash.onclick = () => {
    dashboard.classList.add('d-none');
    admin.classList.remove('d-none');
    login.classList.add('d-none');
    // ul.textContent="";
    email.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
    emailId.value = "";
    password1.value = "";
    number.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
};
Signout.onclick = () => {
    admin.classList.add('d-none');
    login.classList.remove('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    password1.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
    number.value = "";
    emailId.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
Signout1.onclick = () => {
    admin.classList.add('d-none');
    login.classList.remove('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    password.value = "";
    password1.value = "";
    firstname.value = "";
    lastname.value = "";
    emailId.value = "";
    number.value = "";
    emailCreation.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
}
let users;
if (localStorage.getItem('users') === null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('users'));
}
count.textContent = users.length;
// console.log(count)
for (let i of users) {
    let li = document.createElement('li');
    li.textContent = `${i.firstname} ${i.lastname}`;
    userList.appendChild(li);
}

function callUser(user) {
    Welcome.textContent = `Hi ${user.firstname} ${user.lastname}`;
}
let user;
signin.onclick = () => {
    if (email.value === "") {
        alert("Email is required");
    } else if (password1.value === "") {
        alert("Password is required");
    } else {
        let ans = true;
        for (let i of users) {
            {
                if (i[email.value] === password1.value) {
                    ans = false;
                    callUser(i);
                    email.value = "";
                    password.value = "";
                    firstname.value = "";
                    lastname.value = "";
                    number.value = "";
                    emailId.value = "";
                    emailCreation.value = "";
                    password1.value = "";
                    setPassword1.value = "";
                    confirmPassword1.value = "";
                    confirmPassword.value = "";
                    setPassword.value = "";
                    login.classList.add('d-none');
                    dashboard.classList.remove('d-none');
                }
            }
        }

        if (ans === true) {
            alert("Invalid Email or password");
        }
    }
};
newUser.addEventListener('click', function() {
    login.classList.add('d-none');
    register.classList.remove('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    email.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
    number.value = "";
    emailId.value = "";
    emailCreation.value = "";
    password1.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
});
createUser.addEventListener('click', function() {
    if (firstname.value === "") {
        alert("FirstName is require");
    } else if (lastname.value === "") {
        alert("Lastname is required");
    } else if (number.value === "") {
        alert("Phone number is require");
    } else if (emailCreation.value === "") {
        alert("Email is required");
    } else {
        let ans = emailCreation.value;
        user = {
            firstname: firstname.value,
            lastname: lastname.value,
            number: number.value
        };
        // console.log(user);
        login.classList.add('d-none');
        register.classList.add('d-none');
        admin.classList.add('d-none');
        password.classList.remove('d-none');
        dashboard.classList.add('d-none');
    }
});
confirm.onclick = () => {
    if (setPassword.value === "") {
        alert("enter the password");
    } else if (confirmPassword.value === "") {
        alert("Confirm password");
    } else {
        if (setPassword.value !== confirmPassword.value) {
            alert("Enter same password");
        } else {

            user[emailCreation.value] = confirmPassword.value;
            users.push(user);
            count.textContent = users.length;
            let li = document.createElement('li');
            li.textContent = `${user.firstname} ${user.lastname}`;
            userList.appendChild(li);
            login.classList.remove('d-none');
            callUser(user);
            password.classList.add('d-none');
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
};
confirmChange.onclick = () => {
    if (emailId.value === "") {
        alert("Email is required");
    } else if (setPassword1.value === "") {
        alert("enter the password");
    } else if (confirmPassword1.value === "") {
        alert("Confirm password");
    } else {
        if (setPassword1.value !== confirmPassword1.value) {
            alert("Enter same password");
        } else {
            let ans = emailId.value;
            let abc = true;
            for (let i of users) {
                if (i[ans] != undefined) {
                    i[ans] = confirmPassword1.value;
                    abc = false;
                    localStorage.setItem('users', JSON.stringify(users));
                    changePassword.classList.add('d-none');
                    login.classList.remove('d-none');
                    callUser(i);

                    break;
                }
            }
            if (abc) {
                alert("Enter Valid Emaild");
            }
        }
    }
};
forgot.onclick = function() {
    login.classList.add('d-none');
    changePassword.classList.remove('d-none');

    email.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
    number.value = "";
    emailId.value = "";
    emailCreation.value = "";
    password1.value = "";
    setPassword1.value = "";
    confirmPassword1.value = "";
    confirmPassword.value = "";
    setPassword.value = "";
};