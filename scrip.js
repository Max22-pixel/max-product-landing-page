var navMenuBar = document.getElementById('nav-bar')
var icon = document.getElementById('icon')
var navLink = document.querySelectorAll('.nav-link')

console.log(icon)
console.log(navMenuBar)

icon.addEventListener('click', function () {
    console.log('dipencet')
    navMenuBar.classList.toggle('active')
})

function ilangin() {
    navMenuBar.classList.remove('active')
}

navLink.forEach(link => link.addEventListener('click', ilangin))