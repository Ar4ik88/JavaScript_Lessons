let url = new URL(location.href);
let dataUrl = +url.searchParams.get('id');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            for (const item of value) {
                if(item.id > 0){
                    fetch(`https://jsonplaceholder.typicode.com/users/${item.id}/posts`)
                        .then(posts => posts.json())
                        .then(posts => {
                            let infoPost = document.getElementById('main-info-post');
                            for (const post of posts) {
                                if(post.id === dataUrl){
                                    infoPost.innerHTML =
                                        `
                                            <span>userId: ${post.userId}</span>
                                            <span>id: ${post.id}</span>
                                            <h3>title: ${post.title}</h3>
                                            <p>body: ${post.body}</p>
                                        `;
                                }
                            }
                        })
                }
            }
        })

    fetch(`https://jsonplaceholder.typicode.com/posts/${dataUrl}/comments`)
        .then(comments => comments.json())
        .then(comments => {
            for (const comment of comments) {
                if(comment.postId === dataUrl){
                    let listComments = document.createElement('div');
                        listComments.classList.add('item-comment');
                    let postComments = document.getElementById('comments');
                    listComments.innerHTML =
                        `
                            <p>postId: ${comment.postId}</p>
                            <span>id: ${comment.id}</span>
                            <h4>name: ${comment.name}</h4>
                            <p>body: ${comment.body}</p>
                        `;
                    postComments.append(listComments);
                }
            }
        })