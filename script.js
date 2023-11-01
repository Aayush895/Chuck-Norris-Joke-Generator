const jokeBtn = document.querySelector('button')
const jokesDiv = document.querySelector('.jokes')

function randomJoke() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onload = function () {
    if (this.readyState === 4) {
      if(this.status === 200) {
        let data = JSON.parse(this.responseText)
        if(jokesDiv.querySelectorAll('p').length != 0) {
          const para = document.querySelector('p')
          para.remove();
        }
        const para = document.createElement('p')
        para.innerText = `${data.value}`
        jokesDiv.appendChild(para)
      } else {
        jokesDiv.innerHTML = `<p>Something Went Wrong (Not Funny!)</p>`
      }
      
    }
  }

  xhr.send()
}

jokeBtn.addEventListener('click', randomJoke)
window.addEventListener('load', randomJoke)
