export const signupInput = [{
        id: 1,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage: 'User name should be More than 4 characters',
        pattern: '^[A-Za-z0-9]{4,}$',
        required: true
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        errorMessage: 'Email is not Valid',
        required: true

    },

    {
        id: 4,
        name: 'companyName',
        type: 'text',
        placeholder: 'Company Name',
        pattern: '^[A-Za-z0-9]{4,16}$',
        errorMessage: 'Company name should be More than 4 characters',
        required: true
    },
    {
        id: 5,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        pattern: null,
        errorMessage: 'Password should contain numbers and symbols',
        required: true
    },
    {
        id: 6,
        name: 'confirmPassword',
        type: 'password',
        placeholder: 'Comfirm Password',
        errorMessage: 'Passoword do not match',
        required: true
    }
]