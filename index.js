const contentLetterSrart_actived = "Dear Zarreen, 💖 Today is all about you! I made something special to celebrate your beautiful soul and incredible smile. Tap to begin...";

// Main content of the birthday message
const mainContentLetter = "Wishing you a magical birthday, filled with love, laughter, and endless blessings. You light up the world around you, and I hope this small surprise adds a little sparkle to your day. 🌟 Happy Birthday, Zarreen!";

// Set the introductory image
let imgStart = document.querySelector(".myAI");
imgStart.src = "./img/heart-glow.png"; // Updated for glowing heart effect

// Set the image for the letter content
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/zarreen-photo.jpg"; // Replace with a photo of Zarreen

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () {
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index === contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").style.opacity = "1";
                        document.querySelector(".recieve").style.transition = ".5s";
                    }, 1000);
                }
            }, 40 * index);
        });
    }, 1000);
});

document.querySelector("#mess").addEventListener("change", function () {
    if (this.checked) {
        document.querySelector(".content").classList.add("actived");
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index === mainContentLetter.length - 1) {
                    document.querySelector(".img1").style.opacity = "1";
                    document.querySelector(".img1").style.transition = ".5s";
                }
            }, 40 * index);
        });
    } else {
        document.querySelector(".content").classList.remove("actived");
        document.querySelector(".img1").style.opacity = "0";
        document.querySelector(".img1").style.transition = ".5s";
        document.querySelector(".mainContent").innerHTML = "";
    }
});

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").style.bottom = "100%";
            let deviceWidth = document.documentElement.clientWidth;
            deviceWidth <= 768 ? createLight(25) : createLight(50);
        }, 500);
    }, 500);
});

// Confetti animation effect
const getBackground = document.querySelector(".backgroundParty");
let width = getBackground.offsetWidth;
let height = getBackground.offsetHeight;

function createLight(count) {
    const container = document.querySelector(".backgroundParty");
    const blurLevels = [2, 4];
    const colors = ["#ff4d6d", "#ffc107", "#00bfff", "#ff69b4", "#6f42c1"];

    for (let i = 0; i < count; i++) {
        let div = document.createElement("div");
        div.className = "confetti";
        div.style.position = "absolute";
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.borderRadius = `${Math.floor(Math.random() * 15 + 5)}px`;

        let size = Math.floor(Math.random() * 5) + 10;
        div.style.width = `${size}px`;
        div.style.height = `${size * Math.floor(Math.random() * 3 + 1)}px`;
        div.style.left = `${Math.floor(Math.random() * width)}px`;
        div.style.top = `${Math.floor(Math.random() * height / 2)}px`;
        div.style.filter = `blur(${blurLevels[Math.floor(Math.random() * blurLevels.length)]}px)`;
        div.style.animation = `moveLight ${Math.floor(Math.random() * 3 + 5)}s ease-in-out infinite`;

        container.appendChild(div);
    }
}