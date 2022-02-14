const mount = (el) => {
  const account = {
    address: 'East Bay Residences',
    email: 'pmofrancisco@yahoo.com',
    name: 'Paul Michael Francisco'
  };
  
  let accountHtml = '';
  accountHtml += `<div>Email: ${account.email}</div>`;
  accountHtml += `<div>Name: ${account.name}</div>`;
  accountHtml += `<div>Address: ${account.address}</div>`;
  
  el.innerHTML = accountHtml;
};

export { mount };

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-account');

  // Assuming our container doesn't have an element with an id 'dev-account'
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}
