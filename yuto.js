// ページ読み込み後に実行
document.addEventListener("DOMContentLoaded", function() {
    // プロフィール情報
    const profileText = `
      生年：2004年<br>
      年齢：20歳<br>
      国籍：日本<br>
      血筋：日本×アメリカ（かなりアメリカの遺伝子は薄れた）<br>
      生まれ：福岡県福岡市<br>
      育ち：静岡県静岡市<br>
      居住地：神奈川県<br>
      社会的立場：大学3年生<br>
      夢：鉄道会社職員か営業マン<br>
      趣味：鉄道（乗ること・ダイヤ・技術）、バレーボール（やるのも）、ゲーム（FF7R、A列車で行こうシリーズ）、筋トレ<br>
      部活：大学の生徒会に在籍
    `;
    document.getElementById("profile-text").innerHTML = profileText;
  
    // 推しリスト
    const favorites = [
      "森川智之（声優）",
      "Nothing's Carved In Stone（バンド）",
      "西田有志（バレー日本男子代表）",
      "マイカ・クリステンソン（バレーアメリカ代表）",
      "N700S系（新幹線車両）"
    ];
  
    const favoritesList = document.getElementById("favorites-list");
    favorites.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = item;
      favoritesList.appendChild(li);
    });
  
    // お問い合わせフォーム送信
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("お問い合わせありがとうございます！");
      contactForm.reset();
    });
  });
  