import {getPosts} from './api.js';

const posts = await getPosts();

function createPosts() {
    let block = document.createElement('div');
    block.className = 'out';
    document.body.appendChild(block);
    posts.forEach((post) => {
            let titleText = `${post.id} Title: ${post.title}`;
            let bodyText = `Body: ${post.body}`;

            let wrapper = document.createElement('div');
            let title = document.createElement('p');
            let body = document.createElement('div');

            title.textContent = titleText;
            body.textContent = bodyText;

            block.appendChild(wrapper);
            wrapper.appendChild(title);
            wrapper.appendChild(body);
        }
    )
}

let btn = document.querySelector('.btn')
btn.addEventListener('click', createPosts)
