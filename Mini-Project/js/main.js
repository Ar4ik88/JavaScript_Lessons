fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        for (const user of value) {
            let divEl = document.createElement('div');
            let hrefEl = document.createElement('a');

            divEl.innerText = `${user.id}. ${user.name}`;
            hrefEl.setAttribute('href', 'user-details.html?id=' + JSON.stringify(user.id));
            hrefEl.innerHTML = 'More details';

            divEl.append(hrefEl);
            document.body.append(divEl);
        }


    })