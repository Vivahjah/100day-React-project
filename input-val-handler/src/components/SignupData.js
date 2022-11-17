export const inputs = [{
        id: 1,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage: 'User name should be More than 4 characters',
        pattern: '^[A-Za-z0-9]{4,16}$',
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
        id: 3,
        name: 'fullname',
        type: 'text',
        placeholder: 'Full Name',
        pattern: '^[A-Za-z0-9]{4,16}$',
        errorMessage: 'Name should be More than 4 characters',
        required: true,
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
        type: 'text',
        placeholder: 'Password',
        // pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$",
        pattern: null,
        errorMessage: 'Password should contain numbers and symbols',
        required: true
    },
    {
        id: 6,
        name: 'confirmPassword',
        type: 'text',
        placeholder: 'Comfirm Password',
        errorMessage: 'Passoword do not match',
        // pattern: inputs.password,
        // pattern: values.password,
        required: true
    }
]