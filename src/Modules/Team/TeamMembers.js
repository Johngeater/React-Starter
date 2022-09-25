import { useState } from 'react';
import { TeamMember } from "./TeamMember"

export const TeamMembers = () => {

    const [team, setTeam ] = useState([
        {
          id: 1,
          name: "John",
          department: "Development"
        },
        {
          id: 2,
          name: "Tim",
          department: "Finance"
        },
        {
          id: 3,
          name: "Sally",
          department: "Management"
        }
    
    ])

    const removeTeamMember = (id) => {

        setTeam( team.filter((t) => t.id !== id));

    }

    

      return (
        <div className="teamMembers">
            { team.map((t, i) => {
                return (
                <TeamMember key={i} name={t.name} tid={t.id} onRemove={removeTeamMember} />
                )
            })}
        </div>
      )
}
export default TeamMembers;