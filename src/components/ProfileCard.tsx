import React from 'react';
import Image from 'next/image';

type ProfileCardProps = {
  name: string;
  age: string;
  distance: string;
  height: string;
  country: string;
  status: string;
  religion: string;
  smoking: string;
  image: string;
  gender?: string; // Optional if you want to include gender
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  distance,
  height,
  country,
  status,
  religion,
  smoking,
  image,
  gender,
}) => {
  return (
    <div className="profile-card">
      <Image src={image} alt={name} width={500} height={300} />
      <h3>{name}</h3>
      <p>{age} years old</p>
      <p>{distance} miles away</p>
      <p>Height: {height}</p>
      <p>Country: {country}</p>
      <p>Status: {status}</p>
      <p>Religion: {religion}</p>
      <p>Smoking: {smoking}</p>
      {gender && <p>Gender: {gender}</p>}
    </div>
  );
};

export default ProfileCard; 