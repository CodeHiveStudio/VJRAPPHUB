// ตั้งค่าศูนย์รวมระบบงาน
// apiUrl  : ลิงก์ Web App ของ "ศูนย์รวมระบบงาน (Apps Script + Google Sheet)" ลงท้ายด้วย /exec — รายการระบบทั้งหมดจัดการจากหน้าผู้ดูแล ไม่ต้องแก้ไฟล์นี้อีก
// fallback: รายการสำรอง แสดงเมื่อยังไม่ได้ตั้ง apiUrl หรือเชื่อมต่อไม่ได้และยังไม่เคยโหลดรายการ
window.HUB_CONFIG = {
  apiUrl: '',
  fallback: [
      {
          "name": "ระบบลาออนไลน์",
          "desc": "ยื่นใบลา ติดตามการอนุมัติ",
          "url": "https://script.google.com/macros/s/AKfycbzTaUgxJz06xEZ9NoAR0d4MgHboAViDXrJsUQex4ZjEnsQeSApyoJO52fr01ncmSQscqw/exec",
          "icon": "leave",
          "color": "#ff9f9f",
          "mode": "frame"
      }
  ]
};
