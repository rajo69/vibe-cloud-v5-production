import React from 'react';
import logo from '@/assets/vibecloudlogo.png';

export function VibeCloudLogo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={logo} alt="Vibe Cloud Logo" {...props} />;
}
