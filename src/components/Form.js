import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Enter Your Name"
                    />
                </label>

                <label>Email
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="Enter Your Email"
                    />
                </label>

                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Good Dog">Good Dog</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
            <div>
                <button>Submit</button>
            </div>
            </div>
        </form>
    )
}