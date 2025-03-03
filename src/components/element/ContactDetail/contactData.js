import LocationIcon from '../../../assets/icons/ContactInfoIcon/Loaction';
import PhoneIcon from '../../../assets/icons/ContactInfoIcon/phone';
import EmailIcon from '../../../assets/icons/ContactInfoIcon/email';

export const contacts = [
  { label: '320 SE Baseline St, Hillsboro, OR 97123, US', Icon: LocationIcon, isLink: false },
  { label: '(786) 326-4746', Icon: PhoneIcon, value: 'tel:7863264746', isLink: true },
  { label: 'cachaipoh@gmail.com', Icon: EmailIcon, value: 'mailto:cachaipoh@gmail.com', isLink: true },
];
