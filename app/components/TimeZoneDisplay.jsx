"use client";

import { useState, useEffect } from 'react';

export default function TimeZoneDisplay({ locale = 'en' }) {
  const [times, setTimes] = useState([
    { zone: 'Africa/Lagos', label: 'Kano, Nigeria', currentTime: '', offset: '+1', flag: '🇳🇬' },
    { zone: 'Asia/Dubai', label: 'Dubai, UAE', currentTime: '', offset: '+4', flag: '🇦🇪' },
    { zone: 'Asia/Riyadh', label: 'Riyadh, KSA', currentTime: '', offset: '+3', flag: '🇸🇦' },
    { zone: 'Asia/Qatar', label: 'Doha, Qatar', currentTime: '', offset: '+3', flag: '🇶🇦' },
    { zone: 'Asia/Kuwait', label: 'Kuwait City', currentTime: '', offset: '+3', flag: '🇰🇼' },
    { zone: 'Asia/Bahrain', label: 'Manama, Bahrain', currentTime: '', offset: '+3', flag: '🇧🇭' },
  ]);

  const [availability, setAvailability] = useState('');
  const [isOpen, setIsOpen] = useState({
    timeZones: false,
    businessHours: false,
    availability: false
  });

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

      // Calculate business hours using Kano time
      const kanoHour = now.toLocaleTimeString('en-US', {
        timeZone: 'Africa/Lagos',
        hour: 'numeric',
        hour12: false
      });
      const kanoHourNum = parseInt(kanoHour);

      const isBusinessHours = kanoHourNum >= 9 && kanoHourNum < 17;
      setAvailability(isBusinessHours ? '🟢 Available Now' : '⏰ Outside Business Hours');
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (section) => {
    setIsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const content = {
    en: {
      title: 'Business Hours & Time Zones',
      subtitle: 'Working hours optimized for Gulf clients',
      currentTimes: 'Current Local Times',
      availability: 'Availability Status',
      businessHours: 'My Business Hours',
      hoursKano: '9:00 AM - 5:00 PM (Kano, Nigeria)',
      hoursGulf: '11:00 AM - 7:00 PM (Gulf Standard Time)',
      note: 'Schedule meetings within these hours for immediate response',
      timeZoneInfo: 'Time Zones',
      workingNow: 'Currently Working',
      notWorking: 'Outside Hours',
      immediateResponse: 'Immediate response during business hours',
      emailResponse: 'Email response within 4 hours',
      scheduleCalls: 'Schedule calls via Calendly',
      weekendAppointments: 'Weekend availability by appointment',
      bestTimeToContact: 'Best time to contact'
    },
    ar: {
      title: 'ساعات العمل والمناطق الزمنية',
      subtitle: 'ساعات عمل مُحسّنة لعملاء الخليج',
      currentTimes: 'الأوقات المحلية الحالية',
      availability: 'حالة التوفر',
      businessHours: 'ساعات عملي',
      hoursKano: '٩:٠٠ ص - ٥:٠٠ م (كانو، نيجيريا)',
      hoursGulf: '١١:٠٠ ص - ٧:٠٠ م (توقيت الخليج القياسي)',
      note: 'جدولة الاجتماعات خلال هذه الساعات للرد الفوري',
      timeZoneInfo: 'المناطق الزمنية',
      workingNow: 'أعمل الآن',
      notWorking: 'خارج ساعات العمل',
      immediateResponse: 'رد فوري خلال ساعات العمل',
      emailResponse: 'رد على البريد الإلكتروني خلال 4 ساعات',
      scheduleCalls: 'جدولة المكالمات عبر Calendly',
      weekendAppointments: 'توافر في عطلة نهاية الأسبوع بموعد',
      bestTimeToContact: 'أفضل وقت للاتصال'
    }
  };

  const t = content[locale] || content.en;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 mt-8">
      {/* Header */}
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">🕒 {t.title}</h3>
            <p className="text-sm text-gray-600">{t.subtitle}</p>
          </div>
          <div className="flex items-center">
            <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${availability.includes('Available') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {availability}
            </span>
          </div>
        </div>
      </div>

      {/* Time Zones Section */}
      <div className="border-b border-gray-100">
        <button 
          onClick={() => toggleSection('timeZones')}
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-600">🌍</span>
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-medium text-gray-700">{t.timeZoneInfo}</span>
              <p className="text-sm text-gray-500 mt-1">{t.currentTimes}</p>
            </div>
          </div>
          <span className="text-gray-400">{isOpen.timeZones ? '▼' : '▶'}</span>
        </button>
        
        {isOpen.timeZones && (
          <div className="px-5 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {times.map((tz, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{tz.flag}</span>
                      <span className="font-medium text-gray-800">{tz.label}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">UTC{tz.offset}</span>
                  </div>
                  <div className="text-xl font-mono font-bold text-gray-900">{tz.currentTime}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Business Hours Section */}
      <div className="border-b border-gray-100">
        <button 
          onClick={() => toggleSection('businessHours')}
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-green-600">📅</span>
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-medium text-gray-700">{t.businessHours}</span>
              <p className="text-sm text-gray-500 mt-1">{t.bestTimeToContact}</p>
            </div>
          </div>
          <span className="text-gray-400">{isOpen.businessHours ? '▼' : '▶'}</span>
        </button>
        
        {isOpen.businessHours && (
          <div className="px-5 pb-4">
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">{t.hoursKano}</p>
                    <p className="text-sm text-gray-600">West Africa Time (WAT)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-gray-800">{t.hoursGulf}</p>
                    <p className="text-sm text-gray-600">Gulf Standard Time (GST)</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">📅 {t.note}</p>
          </div>
        )}
      </div>

      {/* Availability Section */}
      <div>
        <button 
          onClick={() => toggleSection('availability')}
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              <span className="text-orange-600">⚡</span>
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-medium text-gray-700">{t.availability}</span>
              <p className="text-sm text-gray-500 mt-1">{t.workingNow}</p>
            </div>
          </div>
          <span className="text-gray-400">{isOpen.availability ? '▼' : '▶'}</span>
        </button>
        
        {isOpen.availability && (
          <div className="px-5 pb-5 pt-2">
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-xl border border-green-100">
                <span className="text-green-500 mr-3">✅</span>
                <span className="text-gray-700 font-medium">{t.immediateResponse}</span>
              </div>
              
              <div className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-100">
                <span className="text-blue-500 mr-3">📧</span>
                <span className="text-gray-700 font-medium">{t.emailResponse}</span>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-100">
                <span className="text-purple-500 mr-3">📅</span>
                <span className="text-gray-700 font-medium">{t.scheduleCalls}</span>
              </div>
              
              <div className="flex items-center p-3 bg-orange-50 hover:bg-orange-100 rounded-xl border border-orange-100">
                <span className="text-orange-500 mr-3">👥</span>
                <span className="text-gray-700 font-medium">{t.weekendAppointments}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}