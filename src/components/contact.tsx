import React, { useState } from "react";

const FormContact = () => {
  return (
    <div className="max-w-lg mx-auto  rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Contactez-nous</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={""}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={""}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows={4}
              value={""}
              required
            ></textarea>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
