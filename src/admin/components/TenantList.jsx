import React from "react";
import { useProperty } from "../../contexts/PropertyContext";

function TenantList() {
  const { tenants } = useProperty();
  return (
    <div>
      {tenants?.map((tenant) => (
        <div key={tenant.id}>
          <img src={tenant.profileImage} alt={tenant.firstName} />
          <p>{tenant.firstName}</p>
          <p>{tenant.email}</p>
          <p>{tenant.phone}</p>
          <p>{tenant.status}</p>
          <p>{tenant.unit}</p>
        </div>
      ))}
    </div>
  );
}

export default TenantList;
