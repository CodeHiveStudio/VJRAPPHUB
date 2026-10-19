# ชุดไฟล์ GitHub Pages — ระบบลา · Portable X-ray Tracking · ศูนย์รวมระบบงาน (สไตล์โปสเตอร์ป๊อป)

โฟลเดอร์ `lms/` · `xray/` · `hub/` ติดตั้งเป็นแอปแยกกันบนหน้าจอหลักได้ ไอคอนอยู่ในโฟลเดอร์ของตัวเอง

## 1) ใส่ลิงก์ระบบ
- `lms/config.js` ใส่ลิงก์ระบบลาเดิมไว้แล้ว
- `xray/config.js` วางลิงก์ Web App ของ Portable X-ray (ลงท้าย `/exec`)
- `hub/config.js` วางลิงก์ Web App ของ "ศูนย์รวมระบบงาน" ที่ได้จากชุด `hub-apps-script` (ดูไฟล์ README ในชุดนั้น)

## 2) อัปโหลดขึ้น GitHub Pages
สร้าง repository แบบ Public → อัปโหลดทุกไฟล์ในโฟลเดอร์นี้ → Settings → Pages → Deploy from a branch → `main` / root
ลิงก์ที่ได้: `https://<บัญชี>.github.io/<repo>/lms/` · `/xray/` · `/hub/`

## 3) เพิ่มลงหน้าจอหลักมือถือ
- Android (Chrome): เมนู ⋮ → ติดตั้งแอป / เพิ่มลงในหน้าจอหลัก
- iPhone (Safari): ปุ่มแชร์ → เพิ่มไปยังหน้าจอโฮม

เงื่อนไข: Web App ของ Apps Script ต้องตั้ง Who has access = Anyone · ถ้าแก้ไฟล์แล้วหน้าเก่าค้าง ให้เปลี่ยนเลขใน `CACHE` ของ `sw.js`

## คลังไอคอน
`icon-library/` มีไอคอนพร้อมใช้ 28 แบบ (SVG + PNG 512) สำหรับทำแอปแยกบนหน้าจอหลักของระบบใหม่ ส่วนการ์ดในหน้ารวมเลือกไอคอนจากหน้าผู้ดูแลได้เลย
