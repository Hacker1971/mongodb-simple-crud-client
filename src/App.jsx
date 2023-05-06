import React from 'react'

const App = () => {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Users added successfully');
          form.reset();
        }
      })
  }
  return (
    <>
    <form onSubmit={handleAddUser}> 
      <input type="text" name="name" id="" placeholder='name' />
      <br /><br />
      <input type="text" name="email" id="" placeholder='email' />
      <br /><br />
      <input type="submit" value="submit" />
    </form>
    </>
  )
}
export default App;