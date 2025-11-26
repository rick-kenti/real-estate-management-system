import React from "react";
import { useProperty } from "../../contexts/PropertyContext";

function AgentList() {
  const { agents } = useProperty();
  console.log(agents);

  return (
    <div>
      {agents?.map((agent) => (
        <div key={agent.id}>
          <img src={agent.profileImage} alt={agent.firstName} />
          <p>{agent.firstName}</p>
          <p>{agent.email}</p>
          <p>{agent.phone}</p>
          <p>{agent.status}</p>
        </div>
      ))}
    </div>
  );
}

export default AgentList;
