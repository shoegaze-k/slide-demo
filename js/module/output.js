"use strict"

/**
 * jsonからSplide内に出力する画像を読み込む
 * @function
 * @see https://qiita.com/RinuxJapan69/items/06338608adcb4c265b49
 */

export const jsonOutput = () => {
  let request = new XMLHttpRequest()

  request.open("GET", "/json/output.json")
  request.send()

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      let json = JSON.parse(request.responseText)
      let html = ""

      for (let i = 0; i < json.length; i++) {
        if (json[i].display === "link") {
          let htmlParts = `
          <div class="splide__slide">
            <img src="${json[i].image}" width="400" height="300" />
          </div>`

          html += htmlParts
        }
      }

      document.querySelectorAll(".js-output").forEach((e) => {
        e.innerHTML = html
      })
    }
  }
}
