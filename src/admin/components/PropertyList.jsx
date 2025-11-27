import { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";
import PropertyCard from "./PropertyCard";

function PropertyList() {
  const { properties, propertyUrl, addNewProperty } = useProperty();
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");

  function handlePropertyName(e) {
    setPropertyName(e.target.value);
  }
  function handleLocation(e) {
    setLocation(e.target.value);
  }
  function handlePrice(e) {
    setPrice(e.target.value);
  }
  function handleUnit(e) {
    setUnit(e.target.value);
  }
  function handleChangeImage(e) {
    setImage(e.target.value);
  }

  let newProperty = {
    name: propertyName,
    unit: unit,
    location: location,
    price: price,
    image: image,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProperty),
  };
  function handleAddProperty(e) {
    e.preventDefault();
    fetch(propertyUrl, options)
      .then((res) => res.json())
      .then((data) => addNewProperty(data))
      .catch((err) => console.error(err));
  }
  return (
    <>
      <h2 className="text-lg font-bold mb-8">Properties</h2>
      <form
        onSubmit={handleAddProperty}
        className="shadow-lg p-4 rounded-md grid grid-cols-1 gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="propertyName">Property Name:</label>
            <input
              type="text"
              name="propertyName"
              id="propertyName"
              value={propertyName}
              onChange={handlePropertyName}
              required
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={handleLocation}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="units">Units:</label>
            <input
              type="number"
              name="units"
              id="units"
              value={unit}
              onChange={handleUnit}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={handlePrice}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={handleChangeImage}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-green-600 px-4 py-2"
        >
          Add Property
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {properties?.map((property) => (
          <PropertyCard
            key={property.id}
            name={property.name}
            location={property.location}
            units={property.numOfUnits}
            price={property.price}
            image={property.image}
          />
        ))}
      </div>
    </>
  );
}

export default PropertyList;
