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
                            divDetail.innerHTML =
                                `
                                    <strong>id: ${userElement.id}</strong>
                                    <h2>Name: ${userElement.name}</h2>
                                    <h3>Username: ${userElement.username}</h3>
                                    <h4>Email: ${userElement.email}</h4>
                                    <ul>Adress: 
                                        <li>${userElement.address.street}</li>
                                        <li>${userElement.address.suite}</li>
                                        <li>${userElement.address.city}</li>
                                        <li>${userElement.address.zipcode}</li>
                                    </ul>
                                `;
                        }
                    }
                document.body.append(divDetail);

    })