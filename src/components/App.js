import React, { useState } from 'react';
import TeamMember from './TeamMember';
import Form from './Form';

const initialTeamMembers = [
  {
      id: 0,
      name: 'Andrew',
      email: 'youngandy@gmail.com',
      role: 'Frontend Engineer',
  },
  {
      id: 1,
      name: 'Ivanelle',
      email: 'lilivy@icloud.com',
      role: 'Designer',
  },
  {
      id: 2,
      name: 'Koba',
      email: 'bigyeet@yahoo.com',
      role: 'Good Dog',
  },
]

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {

  const [teamMember, setTeamMember] = useState(initialTeamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputeName, inputValue) => {
    setFormValues({ ...formValues, [inputeName]: inputValue });
  }

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMember(teamMember.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

  return (
    <div>
      <TeamMember />
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
