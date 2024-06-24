import React from "react";

const EventCard = ({ imageSrc, title, date, location, description }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <img src={imageSrc} alt={title} className="w-full h-80 object-cover  rounded-t-lg" />
      <div className="p-2">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-600">{location}</p>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
