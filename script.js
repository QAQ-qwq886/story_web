// 故事資料節點
const storyData = {
    start: {
        text: "週五下午的圖書館格外安靜，你在轉角處不小心撞到了一位拿著厚重原文書的同學。對方抬起頭，是那位傳聞中的學霸學長/學姐。",
        choices: [
            { text: "趕緊道歉並幫忙撿書", nextNode: "help_pick" },
            { text: "害羞地低頭跑開", nextNode: "run_away" }
        ]
    },
    help_pick: {
        text: "你幫忙撿起書時，發現書中夾著一張精緻的書籤。對方微笑著對你說：『謝謝，這張書籤對我很重要。』",
        choices: [
            { text: "稱讚書籤很漂亮", nextNode: "compliment" },
            { text: "好奇問書籤的故事", nextNode: "ask_story" }
        ]
    },
    run_away: {
        text: "你跑了一段路後停下來，發現自己的學生證掉在剛才的地方了！你只好硬著頭皮回去找。",
        choices: [
            { text: "尷尬地走回去看", nextNode: "go_back" }
        ]
    },
    compliment: {
        text: "對方聽了很高興，提議要請你喝杯飲料當作謝禮。你們在校園咖啡廳聊得很投緣。",
        choices: [
            { text: "交換通訊軟體", nextNode: "ending_love" },
            { text: "禮貌致謝後離開", nextNode: "ending_friend" }
        ]
    },
    ask_story: {
        text: "對方眼神閃過一絲懷念，說這是他最重要的靈感來源。他問你願不願意一起去圖書館露台聽他分享？",
        choices: [
            { text: "欣然答應", nextNode: "ending_best" },
            { text: "委婉拒絕", nextNode: "ending_friend" }
        ]
    },
    go_back: {
        text: "回到現場，發現對方還站在那裡，手裡拿著你的學生證，笑著說：『你跑得真快，這還給你。』",
        choices: [
            { text: "臉紅著接過來", nextNode: "ending_love" },
            { text: "趕快拿了就跑第二次", nextNode: "ending_miss" }
        ]
    },
    // 結局節點
    ending_love: {
        text: "【結局：心動的起點】\n雖然只是小小的插曲，但你們交換了聯絡方式，一段浪漫的關係似乎正要開始。",
        isEnding: true
    },
    ending_best: {
        text: "【結局：靈魂伴侶】\n你們在露台聊了一整個下午，發現彼此的靈魂如此契合。這不僅是戀愛的開始，更是找到了生命中的知音。",
        isEnding: true
    },
    ending_friend: {
        text: "【結局：溫暖的朋友】\n你們成為了點頭之交，雖然沒有發展成戀人，但每次在校園遇見，那份溫馨的感覺依然存在。",
        isEnding: true
    },
    ending_miss: {
        text: "【結局：擦肩而過】\n因為太過害羞，你錯失了更進一步的機會。以後在校園遇見，你總會想起那個充滿書香的下午。",
        isEnding: true
    }
};

// 遊戲邏輯
const storyText = document.getElementById('story-text');
const choiceSection = document.getElementById('choice-section');
const restartBtn = document.getElementById('restart-btn');

function showNode(nodeKey) {
    const node = storyData[nodeKey];
    storyText.innerText = node.text;
    choiceSection.innerHTML = '';

    if (node.isEnding) {
        restartBtn.classList.remove('hidden');
    } else {
        restartBtn.classList.add('hidden');
        node.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.innerText = choice.text;
            btn.onclick = () => showNode(choice.nextNode);
            choiceSection.appendChild(btn);
        });
    }
}

restartBtn.onclick = () => showNode('start');

// Canvas 裝飾背景（飄落的小愛心/粒子）
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.y -= this.speed;
        if (this.y < -10) this.y = canvas.height + 10;
    }
    draw() {
        ctx.fillStyle = `rgba(255, 175, 189, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initCanvas() {
    resize();
    particles = Array.from({ length: 50 }, () => new Particle());
    animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
initCanvas();
showNode('start');
