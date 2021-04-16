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
let marks1 = document.getElementById('marks1');
let marks2 = document.getElementById('marks2');
let marks3 = document.getElementById('marks3');
let tenth = document.getElementById('10');
let inter = document.getElementById('inter');
let grad = document.getElementById('grad');
let submit = document.getElementById('submit');
let charts = document.getElementById('mychart');
let Cpp = document.getElementById('Cpp');
let JS = document.getElementById('JS');
let CSS = document.getElementById('CSS');
let Python = document.getElementById('Python');
let cprogram = document.getElementById('cprogram');
let jsprogram = document.getElementById('jsprogram');
let cssprogram = document.getElementById('cssprogram');
let pythonprogram = document.getElementById('pythonprogram');
let mycharts = document.getElementById('mycharts');
submit.onclick = function() {
    var myChart = new Chart(charts, {
        type: 'line',
        data: {
            labels: ['tenth', 'inter', 'grad'],
            datasets: [{
                label: 'Marks',
                data: [parseInt(tenth.value), parseInt(inter.value), parseInt(grad.value)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }

    });
    var myCharts = new Chart(mycharts, {
        type: 'pie',
        data: {
            labels: ['cpp', 'js', 'css', 'python'],
            datasets: [{
                label: 'Skills',
                data: [(parseInt(Cpp.value)), (parseInt(JS.value)), (parseInt(CSS.value)), (parseInt(Python.value))],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)'
                ],
                hoverset: 5
            }]
        },

    });
    marks1.classList.add("d-none");
    marks2.classList.add("d-none");
    marks3.classList.add("d-none");
    cprogram.classList.add('d-none');
    pythonprogram.classList.add('d-none');
    cssprogram.classList.add('d-none');
    jsprogram.classList.add('d-none');
    charts.classList.remove("d-none");
    mycharts.classList.remove("d-none");
    submit.classList.add("d-none");
};

function validate(pass) {
    if (pass.length < 8) {
        return false;
    } else {
        let cap = false;
        let sma = false;
        let special = false;
        let num = false;
        for (let i in pass) {
            if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) < 91) {
                cap = true;
            } else if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) < 123) {
                sma = true;
            } else if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) < 58) {
                num = true;
            } else if ((pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) < 48) | (pass.charCodeAt(i) >= 58 && pass.charCodeAt(i) < 65) | (pass.charCodeAt(i) >= 91 && pass.charCodeAt(i) < 97) | (pass.charCodeAt(i) >= 123 && pass.charCodeAt(i) < 127)) {
                special = true;
            }
        }

        return special && num && cap && sma;
    }
}

function reset() {
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
back4.onclick = () => {
    login.classList.add('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.remove('d-none');
    reset();
};
back1.onclick = () => {
    login.classList.remove('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    reset();
};
back2.onclick = () => {
    login.classList.add('d-none');
    register.classList.remove('d-none');
    admin.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    reset();
};
back3.onclick = () => {
    login.classList.remove('d-none');
    register.classList.add('d-none');
    admin.classList.add('d-none');
    changePassword.classList.add('d-none');
    password.classList.add('d-none');
    dashboard.classList.add('d-none');
    reset();
};
adminDash.onclick = () => {
    dashboard.classList.add('d-none');
    admin.classList.remove('d-none');
    login.classList.add('d-none');
    reset();
};
Signout.onclick = () => {
    admin.classList.add('d-none');
    login.classList.remove('d-none');
    dashboard.classList.add('d-none');
    reset();
};
Signout1.onclick = () => {
    admin.classList.add('d-none');
    login.classList.remove('d-none');
    dashboard.classList.add('d-none');
    reset();
};
let users;
if (localStorage.getItem('users') === null) {
    users = [];
} else {
    users = JSON.parse(localStorage.getItem('users'));
}
count.textContent = users.length;
for (let i of users) {
    let li = document.createElement('li');
    li.textContent = `${i.firstname} ${i.lastname} ${i.email} ${i.number}`;
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
                    reset();
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
    reset();
});
createUser.addEventListener('click', function() {
    if (firstname.value === "") {
        alert("FirstName is require");
    } else if (lastname.value === "") {
        alert("Lastname is required");
    } else if (number.value === "") {
        alert("Phone number is require");
    } else if (number.value != "" && number.value.length != 10) {
        alert("Enter a valid mobile number of 10 digits")
    } else if (emailCreation.value === "") {
        alert("Email is required");
    } else {
        let final = true;
        let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        for (let i of number.value) {
            if (!array.includes(i)) {
                alert("Phone number should contain only numbers");
                final = false;
                break;
            }
        }
        if (!emailCreation.value.endsWith(".com") | !emailCreation.value.includes("@")) {
            alert("Enter a valid email id");
            final = false;
        } else if (final) {
            let ans = emailCreation.value;
            user = {
                firstname: firstname.value,
                lastname: lastname.value,
                number: number.value,
                email: emailCreation.value
            };
            login.classList.add('d-none');
            register.classList.add('d-none');
            admin.classList.add('d-none');
            password.classList.remove('d-none');
            dashboard.classList.add('d-none');
        }
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
            let ans = validate(setPassword.value);
            if (ans) {
                user[emailCreation.value] = confirmPassword.value;
                users.push(user);
                count.textContent = users.length;
                let li = document.createElement('li');
                li.textContent = `${user.firstname} ${user.lastname} ${user.email} ${user.number}`;
                userList.appendChild(li);
                login.classList.remove('d-none');
                callUser(user);
                password.classList.add('d-none');
                localStorage.setItem('users', JSON.stringify(users));
            } else {
                alert("Enter a strong password");
            }
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
            let a = validate(setPassword1.value);
            let abc = true;
            if (a) {
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
            } else {
                alert("Enter a strong password");
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
    reset();
};