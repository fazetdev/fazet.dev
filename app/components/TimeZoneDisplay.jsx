"use client";

import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  Clock, 
  Calendar, 
  Zap, 
  Mail, 
  Phone, 
  Globe, 
  MapPin,
  CheckCircle,
  AlertCircle,
  CalendarDays,
  Users,
  Sun,
  Moon
} from 'lucide-react';

export default function TimeZoneDisplay({ locale = 'en' }) {
  const [times, setTimes] = useState([
    { zone: 'Africa/Lagos', label: 'Kano, Nigeria', currentTime: '', offset: '+1', flag: '🇳🇬', icon: <MapPin className="w-4 h-4" /> },
    { zone: 'Asia/Dubai', label: 'Dubai, UAE', currentTime: '', offset: '+4', flag: '🇦🇪', icon: <Sun className="w-4 h-4" /> },
    { zone: 'Asia/Riyadh', label: 'Riyadh, KSA', currentTime: '', offset: '+3', flag: '🇸🇦', icon: <Sun className="w-4 h-4" /> },
    { zone: 'Asia/Qatar', label: 'Doha, Qatar', currentTime: '', offset: '+3', flag: '🇶🇦', icon: <Sun className="w-4 h-4" /> },
    { zone: 'Asia/Kuwait', label: 'Kuwait City', currentTime: '', offset: '+3', flag: '🇰🇼', icon: <Sun className="w-4 h-4" /> },
    { zone: 'Asia/Bahrain', label: 'Manama, Bahrain', currentTime: '', offset: '+3', flag: '🇧🇭', icon: <Sun className="w-4 h-4" /> },
  ]);

  const [availability, setAvailability] = useState('');
  const [availabilityIcon, setAvailabilityIcon] = useState(<AlertCircle className="w-4 h-4" />);
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
      
      if (isBusinessHours) {
        setAvailability('Available Now');
        setAvailabilityIcon(<CheckCircle className="w-4 h-4 text-green-500" />);
      } else {
        setAvailability('Outside Business Hours');
        setAvailabilityIcon(<AlertCircle className="w-4 h-4 text-yellow-500" />);
      }
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
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
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
      expandAll: 'توسيع الكل',
      collapseAll: 'طي الكل',
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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 mt-8 overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{t.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {availabilityIcon}
            <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${availability.includes('Available') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {availability}
            </span>
          </div>
        </div>
      </div>

      {/* Expand/Collapse Controls */}
      <div className="px-5 py-3 border-b border-gray-100 bg-gray-50 flex justify-end space-x-3 rtl:space-x-reverse">
        <button 
          onClick={() => setIsOpen({ timeZones: true, businessHours: true, availability: true })}
          className="flex items-center text-sm text-gray-600 hover:text-gray-800 px-3 py-1.5 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ChevronDown className="w-4 h-4 mr-1" />
          {t.expandAll}
        </button>
        <button 
          onClick={() => setIsOpen({ timeZones: false, businessHours: false, availability: false })}
          className="flex items-center text-sm text-gray-600 hover:text-gray-800 px-3 py-1.5 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ChevronRight className="w-4 h-4 mr-1" />
          {t.collapseAll}
        </button>
      </div>

      {/* Time Zones Section */}
      <div className="border-b border-gray-100">
        <button 
          onClick={() => toggleSection('timeZones')}
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
        >
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg mr-3 group-hover:bg-purple-200 transition-colors">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-semibold text-gray-800">{t.timeZoneInfo}</span>
              <p className="text-sm text-gray-500 mt-1">{t.currentTimes}</p>
            </div>
          </div>
          {isOpen.timeZones ? 
            <ChevronDown className="w-5 h-5 text-gray-400" /> : 
            <ChevronRight className="w-5 h-5 text-gray-400" />
          }
        </button>
        
        {isOpen.timeZones && (
          <div className="px-5 pb-5 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {times.map((tz, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-lg mr-3">
                        {tz.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800 block">{tz.flag} {tz.label}</span>
                        <span className="text-xs text-gray-500">UTC{tz.offset}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-mono font-bold text-gray-900 bg-gray-100 p-2 rounded-lg text-center">
                    {tz.currentTime}
                  </div>
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
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
        >
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg mr-3 group-hover:bg-green-200 transition-colors">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-semibold text-gray-800">{t.businessHours}</span>
              <p className="text-sm text-gray-500 mt-1">{t.bestTimeToContact}</p>
            </div>
          </div>
          {isOpen.businessHours ? 
            <ChevronDown className="w-5 h-5 text-gray-400" /> : 
            <ChevronRight className="w-5 h-5 text-gray-400" />
          }
        </button>
        
        {isOpen.businessHours && (
          <div className="px-5 pb-5 pt-2">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-lg mr-4 shadow-sm">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{t.hoursKano}</p>
                    <div className="flex items-center mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <p className="text-sm text-gray-600">West Africa Time (WAT)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-4">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-lg mr-4 shadow-sm">
                    <Sun className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{t.hoursGulf}</p>
                    <div className="flex items-center mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <p className="text-sm text-gray-600">Gulf Standard Time (GST)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 flex items-center">
                <CalendarDays className="w-4 h-4 mr-2" />
                {t.note}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Availability Section */}
      <div>
        <button 
          onClick={() => toggleSection('availability')}
          className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
        >
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div className="text-left rtl:text-right">
              <span className="font-semibold text-gray-800">{t.availability}</span>
              <p className="text-sm text-gray-500 mt-1">{t.workingNow}</p>
            </div>
          </div>
          {isOpen.availability ? 
            <ChevronDown className="w-5 h-5 text-gray-400" /> : 
            <ChevronRight className="w-5 h-5 text-gray-400" />
          }
        </button>
        
        {isOpen.availability && (
          <div className="px-5 pb-5 pt-2">
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-white hover:bg-green-100 rounded-xl border border-green-100 transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700 font-medium">{t.immediateResponse}</span>
              </div>
              
              <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white hover:bg-blue-100 rounded-xl border border-blue-100 transition-colors">
                <Mail className="w-5 h-5 text-blue-500 mr-3" />
                <span className="text-gray-700 font-medium">{t.emailResponse}</span>
              </div>
              
              <div className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-white hover:bg-purple-100 rounded-xl border border-purple-100 transition-colors">
                <Calendar className="w-5 h-5 text-purple-500 mr-3" />
                <span className="text-gray-700 font-medium">{t.scheduleCalls}</span>
              </div>
              
              <div className="flex items-center p-3 bg-gradient-to-r from-orange-50 to-white hover:bg-orange-100 rounded-xl border border-orange-100 transition-colors">
                <Users className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-gray-700 font-medium">{t.weekendAppointments}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}