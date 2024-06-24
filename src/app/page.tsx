import React from "react";
import EventCard from "@/components/eventCard";
import Navbar from "@/components/navbar";
import FormContact from "@/components/contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <EventCard
          imageSrc="/images/image1.jpg"
          title="Ny Ainga"
          date="07 Juillet 2024"
          location="Antsahamanitra"
          description="2 ora sy 30mn Tolakandro"
        />
        <EventCard
          imageSrc="/images/image2.jpg"
          title="Conference"
          date="Événements"
          location="Immédiatement"
          description="Découvrez de superbes événements et obtenez votre ticket immédiatement"
        />
        <EventCard
          imageSrc="/images/image3.jpg"
          title="Masterclass"
          date="Prochainement"
          location="En ligne"
          description="Surpassez les maîtres"
        />
        <EventCard
          imageSrc="/images/image1.jpg"
          title="Masterclass"
          date="Prochainement"
          location="En ligne"
          description="Surpassez les maîtres"
        />
      </div>
      {/** Ici l'affichage des events categories */}
      <div className="container mx-auto py-8">
        <p className="py-2 font-medium ">Categorie 1</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  w-full">
          <div className="bg-white shadow-lg  rounded-lg overflow-hidden flex w-full">
            <img src={"/images/image1.jpg"} alt={"test"} className="w-1/3 h-auto object-cover" />
            <div className="w-full p-4 flex-1 text-gray-600 text-sm">
              <h2 className="text-md font-bold mb-2">Event name</h2>
              <p className="py-1">Date: 12/02/23</p>
              <p className="py-1">Location: Antananarivo</p>
              <p className="py-1">Category: A</p>
              <p className="py-1">Remaining Tickets: 30</p>
              <p className="py-1">
                Price: <span className="font-medium">100 000 MGA</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg  rounded-lg overflow-hidden flex w-full">
            <img src={"/images/image3.jpg"} alt={"test"} className="w-1/3 h-auto object-cover" />
            <div className="w-full p-4 flex-1 text-gray-600 text-sm">
              <h2 className="text-md font-bold mb-2">Event name</h2>
              <p className="py-1">Date: 12/02/23</p>
              <p className="py-1">Location: Antananarivo</p>
              <p className="py-1">Category: A</p>
              <p className="py-1">Remaining Tickets: 30</p>
              <p className="py-1">
                Price: <span className="font-medium">100 000 MGA</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg  rounded-lg overflow-hidden flex w-full">
            <img src={"/images/image2.jpg"} alt={"test"} className="w-1/3 h-auto object-cover" />
            <div className="w-full p-4 flex-1 text-gray-600 text-sm">
              <h2 className="text-md font-bold mb-2">Event name</h2>
              <p className="py-1">Date: 12/02/23</p>
              <p className="py-1">Location: Antananarivo</p>
              <p className="py-1">Category: A</p>
              <p className="py-1">Remaining Tickets: 30</p>
              <p className="py-1">
                Price: <span className="font-medium">100 000 MGA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** Ici pour le form contact */}
      <hr />
      <div className="bg-white py-8">
        <div className="container mx-auto">
          <FormContact />
        </div>
      </div>
    </div>
  );
}
