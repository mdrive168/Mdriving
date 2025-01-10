let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide .carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // 注意：這裡我們不需要使用translateX，因為我們現在是垂直布局
    // 但是，如果我們想讓文字項目有滑動效果，我們需要調整布局和動畫
    // 為簡單起見，這裡我們只是隱藏和顯示項目（這不是一個真正的滑動效果）
    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });

    // 或者，如果您想使用transform來實現滑動效果，您需要重新設置布局
    // 例如，您可以使用overflow: hidden和position: absolute來定位項目
    // 然後使用transform: translateX來移動整個.carousel-slide容器
    // 但這需要更多的CSS和JavaScript工作來設置
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// 可選：自動播放輪播圖（例如，每3秒切換一次）
setInterval(nextSlide, 10000);

// 可選：頁面加載時顯示第一個項目（雖然默認情況下已經這樣做了，但為了清晰起見，這裡還是寫出來）
window.onload = function () {
    showSlide(0);
};
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var links = document.querySelectorAll('a[id^="link"]'); // 选择所有id以"link"开头的<a>标签
var spans = document.getElementsByClassName("close");



var spans = document.getElementsByClassName("close");
// 将 HTMLCollection 转换为数组
var spansArray = Array.from(spans);

// 获取所有链接，并为它们添加点击事件监听器
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = "block";
        if (link.id === "link1") {
            modalImg.src = "static\\wh.jpg"; // 替换为实际路径
        } else if (link.id === "link2") {
            modalImg.src = "static\\wechat.jpg"; // 替换为实际路径
        }
    });
});

// 获取 <span> 元素，当点击 <span> (x), 关闭模态框
spansArray.forEach(function (span) {
    span.addEventListener('click', function () {
        modal.style.display = "none";
    });
});

// 当用户点击模态框外的区域时，关闭模态框
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};