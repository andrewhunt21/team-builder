import React, { useState } from 'react';
import TeamMember from './TeamMember';

function App() {

  const [teamMember, setTeamMember] = useState([]);

  return (
    <div>
      <TeamMember />
    </div>
  );
}

export default App;
