import React from 'react';

const NewUserForm = ({onNewUser = f => f}) => {
    let email
    const submit = e => {
        e.preventDefault()
        onNewUser(email.value)
        email.value = ''
        email.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => email = input}
                    type="text"
                    placeholder="Email..." required />
            <button>Add User</button>
        </form>
    )
}

export default NewUserForm;