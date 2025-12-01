"use client";

import { useState, useEffect } from 'react';

export default function TimeZoneDisplay({ locale = 'en' }) {
  const [times, setTimes] = useState([
    { zone: 'Africa/Lagos', label: 'Lagos/Kano', currentTime: '', offset: '+1', flag: '🇳🇬' },
    { zone: 'Asia/Dubai', label: 'Dubai (UAE)', currentTime: '', offset: '+4', flag: '🇦🇪' },
    { zone: 'Asia/Riyadh', label: 'Riyadh (KSA)', currentTime: '', offset: '+3', flag: '🇸🇦' },
    { zone: 'Asia/Qatar', label: 'Doha (Qatar)', currentTime: '', offset: '+3', flag: '🇶🇦' },
    { zone: 'Asia/Kuwait', label: 'Kuwait City', currentTime: '', offset: '+3', flag: '🇰🇼' },
    { zone: 'Asia/Bahrain', label: 'Manama', currentTime: '', offset: '+3', flag: '🇧🇭' },
  ]);

  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const updatedTimes = times.map(tz => {
        try {
          const timeStr = now.toLocaleTimeString('en-US', {
            timeZone: tz.zone,
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
          });
          return { ...tz, currentTime: timeStr };
        } catch {
          return { ...tz, currentTime: '--:-- --' };
        }
      });
      setTimes(updatedTimes);

      // Calculate business hours
      const lagosHour = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        hour12: false
      });
      const lagosHourNum = parseInt(lagosHour);

      const isBusinessHours = lagosHourNum >= 9 && lagosHourNum < 17;
      setAvailability(isBusinessHours ? '🟢 Available Now' : '⏰ Outside Business Hours');
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const content = {
    en: {
      title: '🕒 Business Hours & Time Zones',
      subtitle: 'Available for Gulf clients',
      currentTimes: 'Current Local Times:',
      availability: 'Availability:',
      nigeriaTime: 'Nigeria (WAT):',
      gulfTimes: 'Gulf Times (GST/AST):',
      businessHours: 'My Business Hours:',
      hoursNigeria: '9:00 AM - 5:00 PM (Lagos/Kano)',
      hoursGulf: '11:00 AM - 7:00 PM (Gulf Standard Time)',
      note: 'Schedule meetings within these hours for immediate response'
    },
    ar: {
      title: '🕒 ساعات العمل والمناطق الزمنية',
      subtitle: 'متاح لعملاء الخليج',
      currentTimes: 'الأوقات المحلية الحالية:',
      availability: 'التوفر:',
      nigeriaTime: 'نيجيريا (توقيت غرب أفريقيا):',
      gulfTimes: 'توقيت الخليج (توقيت الخليج القياسي):',
      businessHours: 'ساعات عملي:',
      hoursNigeria: '٩:٠٠ ص - ٥:٠٠ م (لاغوس/كانو)',
      hoursGulf: '١١:٠٠ ص - ٧:٠٠ م (توقيت الخليج القياسي)',
      note: 'جدولة الاجتماعات خلال هذه الساعات للرد الفوري'
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-lg p-6 border border-blue-200 mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.title}</h3>
      <p className="text-gray-600 mb-4">{t.subtitle}</p>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-700">{t.currentTimes}</h4>
          <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            {availability}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {times.map((tz, index) => (
            <div key={index} className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">{tz.flag} {tz.label}</span>
                <span className="text-sm text-gray-500">UTC{tz.offset}</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-2">{tz.currentTime}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-3">{t.businessHours}</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700">{t.hoursNigeria}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-700">{t.hoursGulf}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3">{t.note}</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-3">{t.availability}</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-gray-700">✅ Immediate response during business hours</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700">📧 Email response within 4 hours</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              <span className="text-gray-700">📅 Schedule calls via Calendly link</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
