import React from 'react';
import DropDown from './dropDown'; // Import reusable component
import ClockIconn from '../../assets/icons/BuisnessDetailIcon/Clockk';
const OpenHoursDropdown = () => {
  const businessHours = [
    { day: 'Monday', hours: 'Closed' },
    { day: 'Tuesday', hours: 'Closed' },
    { day: 'Wednesday', hours: '11am - 7:30pm' },
    { day: 'Thursday', hours: '11am - 8pm' },
    { day: 'Friday', hours: '11am - 8pm' },
    { day: 'Saturday', hours: '11am - 7:30pm' },
    { day: 'Sunday', hours: '11am - 8pm' },
  ];
  
  return (
    <DropDown
      title="Open Hours"
      icon={ClockIconn}
      data={businessHours}
    />
  );
};

export default OpenHoursDropdown;
