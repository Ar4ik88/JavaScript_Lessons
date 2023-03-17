let url = new URL(location.href);
let dataInfo = +url.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(userVal => {
        return userVal.json()
    })
    .then(userVal => {

            let divDetail = document.createElement('div');

                for (const userElement of userVal) {
                    if(userElement.id === dataInfo){
                            let addr = userElement.address;
                            divDetail.innerHTML =
                                `
                                    <strong>id: ${userElement.id}</strong>
                                    <h2>Name: ${userElement.name}</h2>
                                    <h3>Username: ${userElement.username}</h3>
                                    <h4>Email: ${userElement.email}</h4>
                                    <ul>Adress: 
                                        <li>${addr.street}</li>
                                        <li>${addr.suite}</li>
                                        <li>${addr.city}</li>
                                        <li>${addr.zipcode}</li>
                                    </ul>
                                `;
                        }
                    }
                document.body.append(divDetail);

    })