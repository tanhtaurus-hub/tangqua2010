
// 1. Chuyển từ màn hiện tại sang màn được chọn
function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2. Màn chào mừng
document.getElementById("startBtn").addEventListener("click", () => {
    showScreen("question1");
});

// 3. Câu hỏi Có / Không
document.getElementById("yesBtn").addEventListener("click", () => {
    showScreen("question2");
});

document.getElementById("noBtn").addEventListener("click", () => {
    document.getElementById("feedback1").textContent =
        "Hí hí, bí mật mà cũng quên sao? Thử đoán lại nào! 🌸";
});

// 4. Câu hỏi ngày lễ
document.getElementById("answerA").addEventListener("click", () => {
    document.getElementById("feedback2").textContent =
        "Sai một chút rồi! 8/3 mới là ngày Quốc tế Phụ nữ nha. Thử lại nào! 😂";
});

document.getElementById("answerB").addEventListener("click", () => {
    showScreen("celebration");
    launchFireworks();
});

// 5. Pháo hoa bằng emoji
function launchFireworks() {
    const area = document.getElementById("fireworks");
    area.innerHTML = "";

    const symbols = ["🎆", "✨", "💖", "🌟", "🎉"];

    for (let i = 0; i < 28; i++) {
        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";
        sparkle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        sparkle.style.left = Math.random() * 95 + "%";
        sparkle.style.top = Math.random() * 85 + "%";
        sparkle.style.animationDelay = Math.random() * 1.2 + "s";

        area.appendChild(sparkle);
    }
}


 // 6. Mở video
document.getElementById("videoBtn").addEventListener("click", () => {
    const video = document.getElementById("myVideo");
    const error = document.getElementById("videoError");

    showScreen("videoScreen");

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;

    error.textContent = "";

    video.play().catch((err) => {
        error.textContent =
            "Không tự phát được video. Hãy nhấn nút phát trên video nhé! 🎬";
        console.log("Lỗi phát video:", err);
    });
});


// 7. Video phát xong thì sang lời chúc
function finishVideo() {
    const video = document.getElementById("myVideo");

    video.pause();
    showScreen("wishScreen");
}

document.getElementById("myVideo").addEventListener("ended", finishVideo);

document.getElementById("finishVideoBtn").addEventListener("click", finishVideo);

// 8. Chuyển sang màn kết thúc
document.getElementById("finalBtn").addEventListener("click", () => {
    showScreen("finalScreen");
});

// 9. Nút vỗ tay
document.getElementById("clapBtn").addEventListener("click", () => {
    const message = document.getElementById("clapMessage");

    message.innerHTML =
        '<span class="clap">👏</span> Hoan hô! Chúc mừng 20/10! 🎉💖';
});

// 10. Chơi lại từ đầu
document.getElementById("replayBtn").addEventListener("click", () => {
    const video = document.getElementById("myVideo");

    video.pause();
    video.currentTime = 0;

    document.getElementById("feedback1").textContent = "";
    document.getElementById("feedback2").textContent = "";
    document.getElementById("videoError").textContent = "";
    document.getElementById("clapMessage").textContent = "";

    showScreen("welcome");
});

const video = document.getElementById("myVideo");

if (video) {
    video.muted = false;
    video.volume = 1;
}
