/* FALLING HEARTS */
const heartsContainer = document.getElementById("hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);

/* CODE + TEXT */
const codeText = `
function love() {
  return "А❤️";
}

console.log(love());
`;

const text1Full =
"нанана хайрдаа төрсөн өдрийн мэнд хүргэе.Ингээд том аниа болж байгаа нумуудаа.Төрсөн өдрөөр нь цуг байж чадаагүйд хайрыгаа уучлаарай.Цаашдаа хайрыхаа хажууд дандаа байнаа зөндөө их хайртай шүү.цаашдаа зөндөө олон дурсамжийг хамтдаа бүтээнээ";

let codeIndex = 0;
let textIndex = 0;

const code = document.getElementById("code");
const text1 = document.getElementById("text1");

const s1 = document.getElementById("section1");
const s2 = document.getElementById("section2");
const s3 = document.getElementById("section3");
const s4 = document.getElementById("section4");

document.getElementById("btn1").onclick = () => {
  s1.classList.add("hidden");
  s2.classList.remove("hidden");
};

document.getElementById("btn2").onclick = () => {
  s2.classList.add("hidden");
  s3.classList.remove("hidden");
};

document.getElementById("btn3").onclick = () => {
  s3.classList.add("hidden");
  s4.classList.remove("hidden");
  startConfetti();
};

function typeCode() {
  if (codeIndex < codeText.length) {
    code.textContent += codeText[codeIndex++];
    setTimeout(typeCode, 40);
  } else {
    s1.classList.remove("hidden");
    typeText();
  }
}

function typeText() {
  if (textIndex < text1Full.length) {
    text1.textContent += text1Full[textIndex++];
    setTimeout(typeText, 55);
  }
}

typeCode();

/* CONFETTI EFFECT */
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    dy: Math.random() * 3 + 2,
    color: `hsl(${Math.random() * 360},100%,70%)`
  }));

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.dy;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(update);
  }
  update();
}
/* GIFT BUTTON LOGIC */
const giftBtn = document.getElementById("giftBtn");
const giftText = document.getElementById("giftText");

giftBtn.onclick = () => {
  giftText.classList.remove("hidden");
  giftBtn.style.display = "none";
};
