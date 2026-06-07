# MilPath - AI-Powered PCS Relocation Assistant

MilPath is a web application designed to assist military families with PCS (Permanent Change of Station) relocations. Leveraging AI technology, MilPath generates personalized relocation plans that cover timelines, housing, schools, healthcare, logistics, finances, base resources, and quick wins—tailored to each family's specific situation.

## Features

- **Personalized AI-Generated Plans**: Uses OpenAI to create customized PCS relocation guides
- **Comprehensive Coverage**: Timelines, housing, schools, healthcare, logistics, finances, base resources, and quick wins
- **Military-Specific Knowledge**: Deep understanding of PCS procedures, allowances, benefits, and installation-specific resources
- **User-Friendly Interface**: Clean, responsive design built with React and Tailwind CSS
- **Secure API Integration**: OpenAI API calls handled through Vercel serverless functions to keep API keys hidden
- **Virginia Installation Focus**: Specialized resources for Fort Gregg-Adams, MCB Quantico, Joint Base Langley-Eustis, Naval Station Norfolk, and NAS Oceana

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: Vercel Serverless Functions (for OpenAI API integration)
- **Deployment**: Vercel

## Project Structure

```
milpath/
├── api/
│   └── generate.js        # Vercel serverless function (proxies OpenAI API)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Form.jsx
│   │   └── Results.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── favicon.ico
├── .env.example
├── vercel.json
├── index.html
├── package.json
├── tailwind.config.js
└README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Vercel account (for deployment)
- OpenAI API key (for AI features)

### Local Development

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd milpath
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Then add your OpenAI API key to the `.env` file:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser to `http://localhost:3000`

### Deployment to Vercel

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Configure the environment variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your actual OpenAI API key
4. Vercel will automatically detect and run the build command

## How It Works

1. Users visit the landing page and click "Get Started"
2. They fill out a detailed form with their PCS information (service branch, rank, bases, family details, etc.)
3. Upon submission, the form data is sent to the `/api/generate` Vercel serverless function
4. The serverless function calls the OpenAI API securely (keeping the API key hidden)
5. The AI generates a personalized PCS plan following the required format with specific section headers
6. The results page displays the plan organized into cards for each section
7. Users can print, save, or start over with a new plan

## System Prompt for AI

The AI is instructed to act as "MilPath, an expert military PCS relocation assistant" with knowledge of:
- PCS move procedures and timelines
- BAH/BAS allowances by rank and location
- TriCare Prime/Select enrollment transfers
- DoDEA and on-base school enrollment
- Base housing waitlists and off-base housing markets
- HHG shipments and weight allowances
- DITY/PPM move reimbursements
- MyCAA spouse education benefits
- MSEP spouse employment program
- Vehicle shipping via PCSmyPOV
- Pet relocation and breed restrictions
- Base-specific resources for major US installations

Responses must be warm, specific, and actionable—never generic—and must use EXACTLY these section headers in ALL CAPS:
```
TIMELINE
HOUSING
SCHOOLS & CHILDCARE
HEALTHCARE
LOGISTICS
FINANCES
BASE RESOURCES
QUICK WINS
```

## Contributing

This project was built for the 2026 Congressional App Challenge. Contributions, issues, and feature requests are welcome!

## License

MIT

## Acknowledgments

- Built for the 2026 Congressional App Challenge — Virginia's First District (VA-01) · Rep. Robert J. Wittman
- Powered by OpenAI's GPT-4o-mini
- Inspired by the challenges faced by military families during PCS relocations
- Free tier API keys available at [platform.openai.com](https://platform.openai.com)