fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let wrapUsers = document.createElement('div');
            wrapUsers.classList.add('block-users');
        for (const user of value) {
            let divEl = document.createElement('div');
            let hrefEl = document.createElement('a');

            divEl.innerHTML = `<p>${user.id}. ${user.name}</p>`;
            hrefEl.setAttribute('href', 'user-details.html?id=' + user.id);
            hrefEl.innerHTML = 'More details';

            divEl.append(hrefEl);
            wrapUsers.append(divEl);

            document.body.append(wrapUsers);
        }


    })