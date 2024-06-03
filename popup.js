const btn = document.querySelector('button')
let img = document.querySelector('img')
const url = 'https://dog.ceo/api/breeds/image/random'

// let promise = fetch(url, 'GET')
let test;
const getImg = async () => {
  try {
    const response = await fetch(url)
    const set = await response.json()
    img.src = set.message
    test = set.message
    console.log(test);
  } catch (error) {
    console.log('error');
  }
}

btn.addEventListener('click', () => {
  getImg()
})