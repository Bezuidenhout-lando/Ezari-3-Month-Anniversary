function openHeart() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}

function openLetter() {
    document.getElementById("envelope").classList.toggle("open");
}
function toggleSong() {
    const song = document.getElementById("dcSong");
    const button = document.querySelector(".play-button");

    if (song.paused) {
        song.play();
        button.textContent = "Ⅱ";
    } else {
        song.pause();
        button.textContent = "▶";
    }

    song.onended = function () {
        button.textContent = "▶";
    };
}