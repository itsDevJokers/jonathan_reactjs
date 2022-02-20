import React, { Component } from 'react';
import * as Validator from 'validatorjs';

const Input = ({label, type, placeholder, onChange}) => {
    return (
        <>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
        </>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <div>
            {
                errors.map((error,i) => <p key={i} className="pb-2 text-red-600 text-sm italic font-semibold">{error}</p>)
                
            }
        </div>
    )
}

export class Form extends Component {
    state = {
        email: '',
        password: '',
        errors: [], 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        const data = {email, password};
        
        const rules = {
            email: 'required|email',
            // for multiple rules
            password: ['required', 'regex:/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm'],
        };

        let validation = new Validator(data, rules, {
            regex: 'Password min 8 characters with at least 1 letter, 1 number and 1 special character'
        });
        validation.passes(() => {
          alert(`
          Registration Success!!
          Your Email is ${email}
          Your Password is ${password}
        `)
        });
        

        this.setState({
            errors: [
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
            ]
        })

        setTimeout(() => this.setState({errors: []}), 2000);
        
    }
  render() {
    return (
        <div className="w-full max-w-xs">
        <form className="bg-blue-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
            <ShowErrors errors={this.state.errors} />
          <div className="mb-4">
            <Input label="Email" type="email" placeholder="Email" onChange={value => this.setState({email: value})}/>
          </div>
          <div className="mb-6">
            <Input label="Password" type="password" placeholder="********" onChange={value => this.setState({password: value})}/>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
              Register
            </button>
            <p className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </p>
          </div>
        </form>
        </div>
    )
  }
}

export default Form