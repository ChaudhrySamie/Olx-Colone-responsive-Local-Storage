
// singup page .js
function foo() {
    let arr = JSON.parse(localStorage.getItem('users')) || []
    console.log(arr, 'array')
    var a = document.getElementById('semail').value
    var b = document.getElementById('spass').value
    var c = document.getElementById('sname').value
    if (a == "" || b == "" || c == "") {
        alert(document.body.innerText = String.fromCodePoint(0x2728) +
            " PleasE! Insert the values in the empty fields.")
    }
    else {
        var obj = {
            email: a,
            pass: b,
            name: c
        }
        arr.push(obj)
        localStorage.setItem('users', JSON.stringify(arr))
        location.href = './login.html'
        alert(document.body.innerText = String.fromCodePoint(0x1F38A) +
            'Account created successfully!')
    }
}

    
// login page.js

function foo1() {
    var a = document.getElementById('lemail').value
    var b = document.getElementById('lpass').value
    let usersArr = localStorage.getItem('users');
    let isLoggedIn = false;
    usersArr = JSON.parse(usersArr)
    for (let i = 0; i < usersArr.length; i++) {
        if (usersArr[i].email == a && usersArr[i].pass == b) {
            isLoggedIn = true
        }
    }
    if (isLoggedIn) {
        alert(document.body.innerText = String.fromCodePoint(0x1F389) + 'user login successfully.');
        location.href = './New folder/olx.html'
    } else {
        alert('Data not found.')
}
}


function logout() {
    location.href = '../login.html'
}

// adds 
function add1() {
    window.location.href = '../adddescription/add1.html'
}
function add2() {
    window.location.href = '../adddescription/add2.html'
}
function add3() {
    window.location.href = '../adddescription/add3.html'
}
function add4() {
    window.location.href = '../adddescription/add4.html'
}
function add5() {
    window.location.href = '../adddescription/add5.html'
}
function add6() {
    window.location.href = '../adddescription/add6.html'
}
function add7() {
    window.location.href = '../adddescription/add7.html'
}
function add8() {
    window.location.href = '../adddescription/add8.html'
}
function addCreate() {
    window.location.href = '../adddescription/add10.html'
}



// adds posting system 


const createPost = () => {
    let addTitle = document.getElementById('addName');
    let addDesc = document.getElementById('addDescription');
    let img = document.getElementById('addImg');
    let addPrice = document.getElementById("addPrice")


    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (addTitle.value && addDesc.value && img.value && addPrice.value) {
        let postObj = { title: addTitle.value, description: addDesc.value , price: addPrice.value,  img: img.value  };
        posts.push(postObj)
        localStorage.setItem('posts', JSON.stringify(posts))
    } else {
        console.log('not created')
        alert('please fill all fields')
    }
    displayPOsts()
}



const postDiv = document.getElementById('postDiv')
const displayPOsts = () => {
    console.log('displayPOsts called')
    let posts = JSON.parse(localStorage.getItem('posts'));
    let html = '';
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i], 'post')
        html += `<div class="card col-lg-4 col-md-6 sol-sm-6 col-12">
        <img onclick="addCreate()" src=${posts[i].img} class="card-img-top"
          alt="..." style="height: 280px;">
        <div class="card-body">
          <h5 class="card-title">${posts[i].title}</h5>
          <p class="card-text">${posts[i].description}</p>
          <a href="#" class="btn btn-primary">${posts[i].price}</a>
          <button class="removebutton" onclick="viewProduct(this)">Remove</button>
          
          
        </div>
      </div> `

    }
    postDiv.innerHTML = html;
}

displayPOsts()
function viewProduct(xyz){
    xyz.parentNode.parentNode.remove()
}



