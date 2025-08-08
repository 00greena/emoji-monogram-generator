# Emoji Monogram Generator 🎨

AI-powered monogram generator that creates custom patterns using selected emojis and your logo, powered by KEI.ai and Midjourney.

## Features

- ✨ Select from 170+ diverse emojis
- 🤖 Generate custom emojis with Midjourney AI
- 🖼️ Upload your logo for center placement
- 🎨 AI-generated monogram patterns
- 📥 Direct download links to high-quality results
- 📱 Responsive design for all devices

## Setup

1. **Deploy to Vercel:**
   - Import this repository to Vercel
   - Add environment variable: `KEI_AI_API_KEY=your_api_key_here`

2. **Get KEI.ai API Key:**
   - Sign up at [KEI.ai](https://kei.ai)
   - Get your API key from the dashboard

3. **Configure Environment:**
   - In Vercel dashboard: Settings → Environment Variables
   - Add `KEI_AI_API_KEY` with your actual API key

## Usage

1. **Select Emojis:** Choose up to 4 emojis from the grid
2. **Generate Custom:** Optionally create AI emojis with Midjourney
3. **Upload Logo:** Add your logo image (PNG, JPG, SVG)
4. **Generate Monogram:** Click to create your unique pattern
5. **Download:** Get the high-quality result image

## API Endpoints

- `/api/kei-ai/generate` - Start Midjourney generation
- `/api/kei-ai/status` - Check generation progress

## Development

```bash
# Install dependencies
npm install

# Start development server
vercel dev

# Open http://localhost:3000
```

## Environment Variables

```env
KEI_AI_API_KEY=your_kei_ai_api_key_here
```

## Tech Stack

- **Frontend:** Pure HTML/CSS/JavaScript
- **Backend:** Vercel Serverless Functions
- **AI:** KEI.ai + Midjourney integration
- **Deployment:** Vercel

## License

MIT License - feel free to use and modify!