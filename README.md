# 🌼 NavVarsh Utsav – Celebrating Vikram Samvat in 3D

![NavVarsh Utsav](https://github.com/user-attachments/assets/yourpreviewimage.png)

**An immersive, animated, and responsive 3D web experience that celebrates the Hindu New Year — Vikram Samvat.**  
Merge spiritual tradition with modern 3D visuals: interactive temples, glowing diyas, divine blessings, and a Journey of Light.

---

## 🔗 Live Demo
**View the app:** [NavVarsh Utsav Website](https://ai.studio/apps/drive/1FT-YRTz5oZKb0oDkhChcZrgCh6vNFkyH)

---

## ✨ Features

- 🎆 **3D Animated Welcome Scene** — Temple bells, diyas lighting, and rising-sun animation  
- 🌏 **Cultural Symbolism** — Interactive 3D map of India highlighting state-wise Vikram Samvat traditions  
- 🪔 **Divine Blessings** — Animated idols (Ganesha, Lakshmi, Vishnu) with aura and interaction  
- 🌸 **Journey of Light** — Scroll-triggered diya lighting (GSAP + ScrollTrigger)  
- 💌 **Personalized Blessing Card** — Enter a name → receive a glowing New Year message in Sanskrit & English  
- 🔊 **Dynamic Music** — Choose between temple bells, bhajans, or flute melodies  
- 📱 **Responsive Design** — Mobile, tablet, and desktop optimized  
- 🎇 **3D Fireworks Finale** — Sanskrit blessings appear in the sky: “शांति”, “सुख”, “आयु”, “धन”

---

## 🧭 Website Flow

1. **Welcome Screen** — 3D Kalash and mantra animation  
2. **Journey of Light** — Scroll to light diyas and progress through the scene  
3. **Divine Blessings** — Interact with deities for blessings and animations  
4. **Cultural Symbolism** — Explore how different states celebrate Vikram Samvat  
5. **Blessing Message** — Generate a personalized New Year card  
6. **Finale** — 3D fireworks & Sanskrit words in the night sky

---

## 🛠️ Tech Stack

- React.js  
- Three.js / React Three Fiber (3D scenes)  
- GSAP + ScrollTrigger (scroll-based animations)  
- Lottie (lightweight animated icons)  
- Tailwind CSS (styling & responsiveness)  
- Next.js (optional, for SSR & deployment)  
- (Optional) Web Audio API for dynamic background music

---

## 🚀 Quick Start (Run Locally)

**Prerequisites:** Node.js v16+ and npm/yarn

```bash
# 1. Clone repository
git clone https://github.com/yourusername/navvarsh-utsav.git
cd navvarsh-utsav

# 2. Install dependencies
npm install
# or
yarn

# 3. Set environment variables
# Create .env.local in project root (if required)
# Example:
# NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
# NEXT_PUBLIC_MUSIC_PROVIDER_KEY=your_music_key_here

# 4. Run dev server
npm run dev
# or
yarn dev

# 5. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
/public            # static assets, music, models, textures
/src
  /components      # React components (UI + 3D UI wrappers)
  /scenes          # Three.js / R3F scene components
  /lib             # helpers, audio manager, animation utils
  /styles          # Tailwind + global styles
  /pages           # Next.js pages (if using Next)
  /data            # localization, blessing text, state-data.json
/models            # GLTF / Draco compressed models
```

---

## 🧭 Future Enhancements

- Multilingual support (Sanskrit, Hindi, Gujarati, Marathi, English)  
- Real-time global diya-lighting counter (shared experience)  
- 3D Rangoli Maker & Festival Card Generator (exportable PNG/PDF)  
- Voice-guided mantra chanting and audio narration  
- Social sharing presets for personalized blessing cards

---

## 🤝 Contributing

Contributions, ideas, and bug reports are welcome!

1. Fork the repo  
2. Create a feature branch: `git checkout -b feat/your-feature`  
3. Commit your changes: `git commit -m "feat: add ..."`  
4. Push to your fork: `git push origin feat/your-feature`  
5. Open a Pull Request describing your change

---

## 🧾 License

This project is released under the **MIT License**. See `LICENSE` for details.

---

## 🙏 Acknowledgements

- Cultural concept & direction — inspired by Vikram Samvat traditions  
- 3D visuals powered by Three.js and WebGL  
- Animations — GSAP & Lottie contributors  
- Music & sounds — traditional Indian instruments & bhajans

---

## 📸 Preview

> Add slices/screenshots of the welcome scene, Journey of Light, Divine Blessings, and Finale here for the README.

---

## 📬 Contact

**Dhruv Shah** — Web Developer | Designer | AI/ML Enthusiast  
📧 shahdhruvp16@gmail.com  
🌐 [Portfolio](https://dhruv-shah-portfolio.vercel.app/)  
💼 [LinkedIn](https://www.linkedin.com/in/dhruv-shah-27111b28a)

---

## ❤️ Closing Blessing

**“नव संवत्सर की हार्दिक शुभकामनाएँ — May this Vikram Samvat fill your life with peace, prosperity, and divine energy.”**
