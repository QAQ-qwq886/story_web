<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>放學後的心動路線</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="page">
    <header class="hero">
      <div class="hero-badge">校園戀愛互動故事</div>
      <h1>放學後的心動路線</h1>
      <p class="intro">
        你原本只想平靜度過新學期，卻在一連串微妙巧合中，
        和那位總是剛好出現在你身邊的人越走越近。
        每一次選擇，都可能讓故事走向不同結局。
      </p>
    </header>

    <main class="story-card">
      <div class="top-bar">
        <div class="progress-wrap">
          <span>故事進度</span>
          <div class="progress-bar">
            <div id="progressFill" class="progress-fill"></div>
          </div>
        </div>
        <button id="restartTop" class="ghost-btn">重新開始</button>
      </div>

      <section class="story-section">
        <div id="chapterTag" class="chapter-tag">序章</div>
        <h2 id="storyTitle">故事開始</h2>
        <div id="storyText" class="story-text"></div>
      </section>

      <section class="choices-section">
        <h3>你的選擇</h3>
        <div id="choices" class="choices"></div>
      </section>

      <section id="endingBox" class="ending-box hidden">
        <h3 id="endingTitle"></h3>
        <p id="endingText"></p>
        <button id="restartBottom" class="primary-btn">重新開始故事</button>
      </section>
    </main>

    <footer class="footer">
      <p>純 HTML / CSS / JavaScript 製作 · 手機友善介面</p>
    </footer>
  </div>

  <script src="script.js"></script>
</body>
</html>