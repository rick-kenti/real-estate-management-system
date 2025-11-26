import { useProperty } from "../../contexts/PropertyContext";

function PropertyList() {
  const { properties } = useProperty();
  return (
    <div>
      {properties?.map((property) => (
        <div key={property.id}>
          <img src={property.image} alt={property.name} />
          <p>{property.name}</p>
          <p>{property.location}</p>
          <p>{property.numOfUnits}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
