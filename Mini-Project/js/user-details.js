let url = new URL(location.href);
let dataInfo = +url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(userVal => {
        return userVal.json()
    })
    .then(userVal => {
            let divDetail = document.createElement('div');
                divDetail.classList.add('detail-info');

                for (const userElement of userVal) {
                    if(userElement.id === dataInfo){
                            let addr = userElement.address;
                            let postButton = document.createElement('button');
                                postButton.setAttribute('id','btn-post');

                            document.title = `${userElement.name}`;

                            divDetail.innerHTML =
                                `
                                    <strong>id: ${userElement.id}</strong>
                                    <h2>Name: ${userElement.name}</h2>
                                    <h3>Username: ${userElement.username}</h3>
                                    <h4>Email: ${userElement.email}</h4>
                                    <ul>Adress: 
                                        <li>Street: ${addr.street}</li>
                                        <li>Suite: ${addr.suite}</li>
                                        <li>City: ${addr.city}</li>
                                        <li>Zipcode: ${addr.zipcode}</li>
                                        <li>Geo(lat): ${addr.geo.lat}</li>
                                        <li>Geo(lng): ${addr.geo.lng}</li>
                                    </ul>
                                    <p>Phone: ${userElement.phone}</p>
                                    <a href="https://www.${userElement.website}">${userElement.website}</a>
                                    <ul>Company:
                                        <li>Name: ${userElement.company.name}</li>
                                        <li>CatchPhrase: ${userElement.company.catchPhrase}</li>
                                        <li>BS: ${userElement.company.bs}</li>
                                    </ul>
                                `;

                            postButton.innerHTML = 'Post of current user';

                                postButton.onclick = () => {
                                    fetch(`https://jsonplaceholder.typicode.com/users/${userElement.id}/posts`)
                                        .then(post => post.json())
                                        .then(singlePost => {
                                            let containerPost = document.createElement('div');
                                                containerPost.classList.add('container-posts');
                                            let wrapPost = document.createElement('ul');
                                                wrapPost.classList.add('posts-list');

                                                containerPost.innerHTML = `<h3>My list posts</h3>`;

                                            for (const item of singlePost) {
                                                let listPost = document.createElement('li');
                                                let morePost = document.createElement('a');

                                                morePost.innerHTML = 'More';
                                                morePost.setAttribute(
                                                    'href',
                                                    `post-details.html?id=${item.id}`
                                                );

                                                listPost.innerHTML = `<p>${item.title}</p>`;
                                                listPost.appendChild(morePost);

                                                wrapPost.appendChild(listPost);
                                                containerPost.appendChild(wrapPost);
                                                divDetail.appendChild(containerPost);
                                            }

                                        })
                                    document.querySelector('#btn-post').disabled = true;
                                }
                            divDetail.append(postButton);
                        }
                    }
                document.body.append(divDetail);

    })

