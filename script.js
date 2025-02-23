const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const textBox = document.querySelectorAll(".text-box")
const pTag = document.querySelectorAll("p");
const h1Tag = document.querySelectorAll("h1");
const h2Tag = document.querySelectorAll("h2");
const h3Tag = document.querySelectorAll("h3");
const lWord = document.getElementById("lastWord");
const button = document.querySelectorAll("button");

// Dark Light Mode styles

function toggleDarkLightMode(mode) {
    nav.style.backgroundColor = mode === "dark" ? `rgb(0 0 0 / 50%)` : `rgb(255 255 255 / 50%)`;
    textBox.forEach(element => {
        //텍스트 박스 색 앞에가 다크, 뒤에 라이트
        element.style.backgroundColor = mode === "dark" ? `#2C2C2C` : `#ebe9e9`;
    });
    button.forEach(element => {
        element.style.backgroundColor = mode === "dark" ? `#2C2C2C` : `#ebe9e9`;
        element.style.color = mode === "dark" ? `white` : `black`;
    })
    toggleText.textContent = mode === "dark"  ? 'Dark Mode' : 'Light Mode';
    mode === "dark" ? toggleIcon.children[0].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");
}
function increaseSize() {
    if (parseFloat(getComputedStyle(lWord).fontSize) > 25) return null;
    pTag.forEach(element => {
        let fontSize = parseFloat(element.style.fontSize);
        if (fontSize) {
            element.style.fontSize = `${fontSize + 0.1}rem`
        }
    })
    h1Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    h2Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    h3Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) + 2}px`);
        }
    })
    lWord.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(lWord).fontSize) + 2}px; opacity: .6; text-align: center; line-height: 150%; word-break: keep-all`);

    // lWord.style.fontSize = `${parseFloat(lWord.style.fontSize) + 0.1}vw !important`
}
function decreaseSize() {
    if (parseFloat(getComputedStyle(lWord).fontSize) < 3) return null;

    pTag.forEach(element => {
        let fontSize = parseFloat(element.style.fontSize);
        if (fontSize) {
            element.style.fontSize = `${fontSize - 0.1}rem`
        }
    })
    h1Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    h2Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    h3Tag.forEach(element => {
        if (element) {
            element.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(element).fontSize) - 2}px`);
        }
    })
    lWord.setAttribute("style", `font-size: ${parseFloat(getComputedStyle(lWord).fontSize) - 2}px; opacity: .6; text-align: center; line-height: 150%; word-break: keep-all`);
    // lWord.style.fontSize = `${parseFloat(lWord.style.fontSize) - 0.1}vw !important`

}


//Switch Theme Dynamically
function switchTheme(event) {
    let mode = document.getElementById("dayMode");
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode("dark");
        mode.href = "./은총다크.png"
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode("light");
        mode.href = "./은총라이트.png"
    }
}
//Switch Theme Dynamically
function switchMode() {
    let mode = document.getElementById("dayMode");
    let date = new Date().getHours()
    if (date >= 18 || date <= 6) {
        toggleSwitch.checked = true;
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleDarkLightMode("dark");
        mode.href = "./은총다크.png"

    } else {
        toggleSwitch.checked = false;
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleDarkLightMode("light");
        mode.href = "./은총라이트.png"
    }
}

// authentication check
function checkPassword() {
    const correctPassword = "1234";  // ✅ 원하는 비밀번호 설정
    const userInput = document.getElementById("passwordInput").value;

    if (userInput === correctPassword) {
        // ✅ 비밀번호가 맞으면 로컬 스토리지에 저장하고 index.html로 이동
        localStorage.setItem("authenticated", "true");
        window.location.href = "index.html";
    } else {
        // ❌ 틀리면 오류 메시지 표시
        document.getElementById("errorMsg").innerText = "비밀번호가 틀렸습니다!";
    }
}

// ✅ index.html에서 인증 여부를 확인하는 코드 (index.html 상단에 추가)
if (window.location.pathname.endsWith("index.html")) {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html";  // ❌ 인증되지 않았다면 로그인 페이지로 이동
    }
}
// ✅ 로그아웃 기능 추가
function logout() {
    localStorage.removeItem("authenticated");
    window.location.href = "login.html";
}


// Event Listener
toggleSwitch.addEventListener("change", switchTheme);
setTimeout(function() {
    switchMode()
  }, 1);
// Check Local Storage for Theme
// const currentTheme = localStorage.getItem("theme");
// console.log(currentTheme)
// if (currentTheme) {
//     document.documentElement.setAttribute("data-theme", currentTheme);
//     if (currentTheme === "dark") {
//         toggleSwitch.checked = true;
//         darkMode();
//     } 
// }





