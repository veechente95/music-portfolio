# Music Portfolio

A simple, stylish one-page music portfolio. No build step, no dependencies — just HTML, CSS, and JavaScript.

## Quick start

1. **Personalize** `index.html` — replace "Your Name", bio, tools, contact links
2. **Add images**
   - `images/profile.jpg` — your photo
   - `images/covers/track-1.jpg`, etc. — cover art per track
3. **Add audio** — drop MP3 files into `audio/` matching the filenames in `index.html`:
   - `audio/track-1.mp3`
   - `audio/track-2.mp3`
   - `audio/track-3.mp3`
4. **Preview locally**

   ```bash
   cd "Music Portfolio"
   python3 -m http.server 8000
   ```

   Open http://localhost:8000

## Adding a new track

1. Add `audio/your-track.mp3` and `images/covers/your-track.jpg`
2. Copy a `.track-card` block in `index.html`
3. Update `data-src`, image paths, title, and description

## Publish for free (GitHub Pages)

1. Create a public repo on GitHub (e.g. `music-portfolio`)
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial music portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/music-portfolio.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
4. Your site will be live at `https://YOUR_USERNAME.github.io/music-portfolio/`

## Tips

- Export MP3s at 192–256 kbps to keep the repo under ~80 MB
- Keep total repo size reasonable for fast deploys
- Replace placeholder track cards with your real projects
# music-portfolio
