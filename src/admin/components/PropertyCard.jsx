import React from "react";

function PropertyCard({ name, location, units, price, image }) {
  const formatter = new Intl.NumberFormat("en-us");
  return (
    <div className="p-4 rounded-md shadow-md flex gap-4 flex-col">
      <div className="w-full rounded-md">
        <img src={image} alt={name} className="w-full rounded-md" />
      </div>
      <div className="flex gap-4 flex-col">
        <h3>{name}</h3>
        <p>{location}</p>
        <p className="flex justify-between gap-4 items-center">
          <span>Units:{units}</span>
          <span>Ksh {formatter.format(price)}</span>
        </p>
        <div className="grid grid-cols-3 gap-4">
          <button className="rounded-md bg-amber-400 px-4 py-2">Edit</button>
          <button className="rounded-md bg-green-600 px-4 py-2">View</button>
          <button className="rounded-md bg-red-600 px-4 py-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
