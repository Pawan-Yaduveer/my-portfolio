// src/pages/Certificate.js
import React from 'react';
import "../styles/Certificate.css";


const certificates = [
  {
    id: 1,
    title: 'Full-Stack using MERN',
    image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_1',
    description: 'I have successfully completed a comprehensive Full-Stack Web Development training program using the MERN stack (MongoDB, Express.js, React.js, and Node.js) from CipherSchools during January–February 2024. Through this training, I gained hands-on experience in building full-stack web applications, including designing dynamic user interfaces using React, creating RESTful APIs with Express and Node.js, and managing data with MongoDB. .',
    link: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view',
  },
  {
    id: 2,
    title: 'Data Structures and Algorithms',
    image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_2',
    description: 'I have completed the Data Structures and Algorithms (C++) course from GeeksforGeeks, where I learned core concepts like arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming. This course enhanced my problem-solving skills and deepened my understanding of algorithmic thinking using C++.Through hands-on coding exercises and problem-solving challenges, I significantly improved my logical thinking and problem-solving skills.',
    link: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view',
  },


   {
    id: 3,
    title: 'React Certificate',
    image: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_2',
    description: 'React specialization on Coursera.',
    link: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view',
  },
  // Add more certificates below
];

const Certificates = () => {
  return (
  <div className="certificates">
    <h1 className="certificateTitle">My Certificates</h1>
    <div className="certificateList">
      {certificates.map((cert) => (
        <div key={cert.id} className="certificateItem">
          <img src={cert.image} alt={cert.title} />
          <h2>{cert.title}</h2>
          <p>{cert.description}</p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Certificate
          </a>
        </div>
      ))}
    </div>
  </div>
);
}

export default Certificates;
