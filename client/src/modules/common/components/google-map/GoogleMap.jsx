import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.223177618445!2d67.06021991487052!3d24.95852038400776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34090e22140ff%3A0xaabbcd7a5db612d1!2sErum%20Shopping%20Mall%20Phase-I!5e0!3m2!1sen!2s!4v1677346789351!5m2!1sen!2s"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default GoogleMap;