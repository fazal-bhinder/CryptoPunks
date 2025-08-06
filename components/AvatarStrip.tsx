'use client'
import PunkAvatar from './PunkAvatar';

interface Props { punkAvatars: number[]; }

const AvatarStrip = ({ punkAvatars }: Props) => (
  <div className="avatar-strip flex justify-center space-x-4 px-4">
    {punkAvatars.map((id) => (
      <PunkAvatar key={id} id={id} size="w-24 h-24" />
    ))}
  </div>
);

export default AvatarStrip;
