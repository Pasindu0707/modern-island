import React, { useState } from 'react';
import { motion } from 'framer-motion';
import base from '../assets/Base.jpg';
import drummer from '../assets/Drummer.jpg';
import Lead from '../assets/Lead.jpg';
import organ from '../assets/organ.jpg';
import percution from '../assets/Percution.jpg';
import singer from '../assets/singer.jpg';

const members = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Lead Vocalist',
    photo: singer, // Use imported image
    details:
      'John has been the lead vocalist of Modern Island since its inception. His powerful voice and stage presence captivate the audience.',
  },
  {
    id: 2,
    name: 'Emily Smith',
    role: 'Drummer',
    photo: drummer, // Use imported image
    details:
      'Emily is the heartbeat of the band, driving the rhythm and energy with her extraordinary drumming skills.',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Guitarist',
    photo: Lead, // Use imported image
    details:
      'Mike’s guitar riffs and solos are legendary, adding depth and melody to the band’s unique sound.',
  },
  {
    id: 4,
    name: 'Sophia Brown',
    role: 'Bassist',
    photo: base, // Use imported image
    details:
      'Sophia’s bass lines are the backbone of the band’s music, providing a steady and groovy foundation.',
  },
  {
    id: 5,
    name: 'Chris Lee',
    role: 'Keyboardist',
    photo: organ, // Use imported image
    details:
      'Chris’s keyboard melodies add a layer of sophistication and harmony to Modern Island’s soundscape.',
  },
  {
    id: 6,
    name: 'Chris Lee',
    role: 'Keyboardist',
    photo: percution, // Use imported image
    details:
      'Chris’s keyboard melodies add a layer of sophistication and harmony to Modern Island’s soundscape.',
  },
];

function BandMembers() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="band" className="py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Band Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedMember(member)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedMember && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-gray-800 rounded-lg p-6 max-w-md w-full text-white relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setSelectedMember(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedMember.photo}
              alt={selectedMember.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center">
              {selectedMember.name}
            </h3>
            <p className="text-sm text-gray-400 text-center mb-4">
              {selectedMember.role}
            </p>
            <p className="text-sm">{selectedMember.details}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default BandMembers;
