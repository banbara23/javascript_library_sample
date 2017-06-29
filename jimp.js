const jimp = require('jimp')

//　夕日の画像
const url = "https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/e35/19367231_467395380292859_1658198160436101120_n.jpg";

// インスタ プロフィール画像
const profile = "https://scontent-nrt1-1.cdninstagram.com/t51.2885-19/11856573_1632028263742374_149162276_a.jpg";

// jimp.read(url, function (err, image) {
//   // エラーチェック
//   if (err) {
//     console.error(err);
//     return;
//   }
//   image.resize(300, 300).write("sunset.jpg")

// })

jimp.read(url)  // 読み込み
  .then(sunset => sunset.resize(310, 310))  // リサイズ
  .then(sunset => jimp.read(profile)
    .then(prof => prof.resize(150, 150))
    .then(prof => sunset.blit(prof, 0, 0))  // 合成 (jpmp, x, y)
  )
  .then(sunset => jimp.read(profile)
    .then(prof => prof.resize(150, 150))
    .then(prof => sunset.blit(prof, 0, 160))
  )
  .then(sunset => jimp.read(profile)
    .then(prof => prof.resize(150, 150))
    .then(prof => sunset.blit(prof, 160, 0))
  )
  .then(sunset => jimp.read(profile)
    .then(prof => prof.resize(150, 150))
    .then(prof => sunset.blit(prof, 160, 160))
  )
  .then(sunset => sunset.write("./sunset.jpg")) // 書き出し
  .catch(err => console.error(err))