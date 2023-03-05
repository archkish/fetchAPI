
function getPosts () {
  fetch('https://jsonplaceholder.typicode.com/posts')  
  .then(response => response.json())
  .then(json => {

    let block = document.createElement('div')
    block.className = 'out'
    document.body.appendChild(block)

    json.slice(0 ,10).map((value) => {
      
      let titleText = `${value.id} Title: ${value.title}`
      let bodyText = `Body: ${value.body}`
      let text = `${titleText} ${bodyText}`
      console.log(text)

      let wrapper = document.createElement('div')
      let title = document.createElement('p');
      let bodyDiv = document.createElement('div')

      title.textContent = titleText;
      bodyDiv.textContent = bodyText;

      block.appendChild(wrapper)
      wrapper.appendChild(title); 
      wrapper.appendChild(bodyDiv)
    })

  })
}


let btn = document.querySelector('.btn')
btn.addEventListener('click', getPosts)
