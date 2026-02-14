//search intractive

const sOverlay = document.getElementById('search-overlay');

    function openSearch() {
        sOverlay.style.display = "flex"
    };

    function closeSearch() {
        sOverlay.style.display = "none"
    }

//login intractive

const lOverlay = document.getElementById('login-overlay')

    function openLogin() {
        lOverlay.style.display = "flex"
    }

    function closeLogin() {
        lOverlay.style.display = "none"
    }

//login/signup

const logContent = document.getElementById('log-content')
const signContent = document.getElementById('sign-content')
const signupBtn = document.getElementById('signup-btn')
const loginBtn = document.getElementById('login-btn')

loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    logContent.classList.add('active');
    signContent.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signContent.classList.add('active');
    logContent.classList.remove('active');
})

//wishlist intractive

const wOverlay = document.getElementById('whishlist-overlay')

    function openWishlist() {
        wOverlay.style.display = "flex"
    }

    function closeWishlist() {
        wOverlay.style.display = "none"
    }