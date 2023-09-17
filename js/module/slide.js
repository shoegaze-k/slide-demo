"use strict"

/**
 * Splideの設定 ページネーションは数字形式で表示する
 * @function
 * @see https://ja.splidejs.com/
 */

export const slideFunc = () => {
  const options = {
    type: "loop",
    rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す
    pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
    pagination: false, // ページネーション非表示
    speed: 500, // スライダーの移動時間
    perPage: 3, // スライダーの表示数
    perMove: 1 // スライダーを移動させる数
  }

  const SlideNumber = (Splide, Components) => {
    const { track } = Components.Elements

    let elm

    const mount = () => {
      elm = document.createElement("div")
      elm.classList.add("splide__length")
      elm.style.textAlign = "center"
      elm.style.marginTop = "0.5em"

      track.parentElement.insertBefore(elm, track.nextSibling)

      update()
      Splide.on("move", update)
    }

    const update = () => {
      elm.textContent = `${Splide.index + 1}/${Splide.length}`
    }

    return {
      mount
    }
  }

  var elms = document.getElementsByClassName("splide")

  for (var i = 0; i < elms.length; i++) {
    new Splide(elms[i], options).mount({
      SlideNumber
    })
  }
}
