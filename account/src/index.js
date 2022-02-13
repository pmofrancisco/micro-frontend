const account = {
  address: 'East Bay Residences',
  email: 'pmofrancisco@yahoo.com',
  name: 'Paul Michael Francisco'
};

let accountHtml = '';
accountHtml += `<div>Email: ${account.email}</div>`;
accountHtml += `<div>Name: ${account.name}</div>`;
accountHtml += `<div>Address: ${account.address}</div>`;

document.querySelector('#my-account').innerHTML = accountHtml;
