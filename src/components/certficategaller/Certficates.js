import React from 'react';
import './certificates.css';
import frontendCertificateImage from '../../assets/images of certificates/frontend.png';
import python1 from '../../assets/images of certificates/pythonbig.png';
import webdes from '../../assets/images of certificates/webdes.png';

const CertificatesSection = () => {
  const certificates = [
    {
      title: 'Front-end Web Development',
      grade: 'Grade: 474.50 ',
      institution: 'Institution: University of Moratuwa',
      description: '',
      image: frontendCertificateImage,
      link: 'https://drive.google.com/file/d/1BiINuxW6E5eJGjpokt4bZLy0HZSzeqTj/view?usp=sharing',
    },
    {
      title: 'Python for Beginners',
      grade: 'Grade: 245.82',
      institution: 'Institution: University Of Moratuwa',
      description: '',
      image: python1,
      link: 'https://drive.google.com/file/d/138g6sW9LNB_s3QkeCgmVSNZBzxnhI2X1/view?usp=sharing',
    },
    {
      title: 'Web Design for Beginners',
      grade: 'Grade: 424.79',
      institution: 'Institution: University of Moratuwa',
      description: '',
      image: webdes,
      link: 'https://example.com/your-certificate-url-3',
    },
  ];

  return (
    <div className='whole'>
      <h1>Certificates</h1>
      <div className="certificate-list">
        {certificates.map((certificate, index) => (
          <a key={index} href={certificate.link} className="certificate-card">
            <div
              className="certificate-image"
              style={{ backgroundImage: `url(${certificate.image})` }}
            ></div>
            <div className="certificate-details">
              <h3>{certificate.title}</h3>
              <p>{certificate.grade}</p>
              <p>{certificate.institution}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
