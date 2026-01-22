<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/178Fan6Ll41DYqTPe0iM9iqLrngjSwu4H

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`



นี่คือ **Prompt** สำหรับสร้างภาพพื้นหลังลายไทยที่ดู **"เรื่องรอง สว่างไสว และขลัง"** เหมาะสำหรับแอพโหราศาสตร์ครับ

ผมแบ่งให้ 2 สไตล์นะครับ คุณสามารถ Copy ภาษาอังกฤษไปใช้ได้เลย:

---

### **แบบที่ 1: หรูหรา ลึกลับ (เน้นสีน้ำเงิน-ม่วง-ทอง)**

**เหมาะสำหรับ:** แอพดูดวงที่ต้องการให้ตัวหนังสือสีขาว/ทองอ่านง่าย ดูแพงและมีมนต์ขลัง

> **Prompt:**
> "Vertical mobile wallpaper, abstract Thai traditional art pattern (Lai Thai) forming a mystical mandala, glowing golden lines on deep midnight blue and royal purple gradient background. Radiant light, bioluminescent glow, sparkling celestial particles, ethereal atmosphere, 3D render style, luxury, premium, suitable for astrology app UI, 8k resolution, cinematic lighting."

---

### **แบบที่ 2: วิจิตรตระการตา (เน้นสีทอง-แสงสว่าง)**

**เหมาะสำหรับ:** หน้าแรก (Landing Page) หรือหน้าผลลัพธ์ที่ต้องการความ "ว้าว" แบบสวรรค์ชั้นฟ้า

> **Prompt:**
> "Thai traditional art background, intricate gold Kanok patterns, glowing with divine light, radiant aura, soft warm lighting, magical dust, ethereal white and gold theme, heavenly atmosphere, blur focus for background usage, high detail, masterpiece, 8k."

---

### **เทคนิคเพิ่มเติม:**

* ถ้าอยากให้ภาพดู **"ทันสมัย"** ขึ้น ให้เติมคำว่า **"Neon light lines"** หรือ **"Cyberpunk Thai style"** ต่อท้ายครับ
* ถ้าอยากให้ **"วางเนื้อหาได้ง่าย"** ให้เติมคำว่า **"Minimalist center, vignette edges"** (เว้นที่ว่างตรงกลาง ขอบมืด) ครับ
