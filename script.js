const storyData = {
    start: {
        text: "週五下午的圖書館安靜得出奇，你在窗邊找了一個位子。這時，校園名人「陽光學長/學姐」坐在了你的對面，對你微微一笑。\n\n你心跳漏了一拍，你會？",
        options: [
            { text: "也回一個微笑，繼續看書", next: "read_book" },
            { text: "鼓起勇氣主動打招呼", next: "say_hi" }
        ]
    },
    read_book: {
        text: "你試著集中精神，但發現對方似乎在找東西。他/她輕聲問你：「同學，不好意思，這本書的續集好像在你那裡？」",
        options: [
            { text: "「啊，給你！」直接遞給他", next: "ending_friend" },
            { text: "「想要嗎？先聊聊這本書吧」", next: "chat_deep" }
        ]
    },
    say_hi: {
        text: "你小聲說了句「你好」。對方驚訝了一下，隨即開朗地說：「你也喜歡這本推理小說嗎？這是我最近的心頭好！」",
        options: [
            { text: "「超喜歡的！作者的伏筆很厲害」", next: "chat_deep" },
            { text: "「只是隨便翻翻，其實我比較喜歡漫畫」", next: "ending_honest" }
        ]
    },
    chat_deep: {
        text: "你們從書本聊到了電影，從電影聊到了人生。時間飛快流逝，太陽快下山了。他/她拿出一張草稿紙，寫了一些東西...",
        options: [
            { text: "接過紙條看他在寫什麼", next: "ending_love" },
            { text: "提議一起去吃晚餐續攤", next: "ending_love" }
        ]
    },
    // 結局部分
    ending_love: {
        text: "【結局：初戀的草稿紙】\n\n紙條上寫著一串聯絡電話，還畫了一個可愛的笑臉。那場午後的圖書館邂逅，成為了你們浪漫故事的序章。",
        isEnd: true
    },
    ending_friend: {
        text: "【結局：最熟悉的陌生人】\n\n他/她禮貌地道謝並拿走了書，回到位子上安靜閱讀。雖然沒有進一步發展，但你們成為了偶爾在圖書館點頭示意的好書友。",
        isEnd: true
    },
    ending_honest: {
        text: "【結局：意外的電波對位】\n\n「真的嗎？我也超愛看漫畫！」他/她興奮地拿出手機給你看收藏夾。你們在圖書館外聊了一整個下午的動漫，發現彼此意外地投緣！",
        isEnd: true
    }
};

const storyTextElement = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');
const restartArea = document.getElementById('restart-area');
const gameCard = document.getElementById('game-card');

function startGame() {
    showNode('start');
    restartArea.classList.add('hidden');
}

function showNode(nodeKey) {
    const node = storyData[nodeKey];
    
    // 清除舊動畫
    gameCard.style.animation = 'none';
    gameCard.offsetHeight; // 觸發重繪
    gameCard.style.animation = null;

    // 更新文字
    storyTextElement.innerText = node.text;
    
    // 清空並生成選項
    optionsContainer.innerHTML = '';
    
    if (node.isEnd) {
        restartArea.classList.remove('hidden');
    } else {
        node.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.onclick = () => showNode(option.next);
            optionsContainer.appendChild(button);
        });
    }
}

// 初始化遊戲
window.onload = startGame;
