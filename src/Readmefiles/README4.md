# Resume Analyst

A modern web application that analyzes resumes against job requirements using Google's Gemini AI. Built with Flask and modern UI components.

## Features

- 🎯 Match resumes against job requirements
- 🤖 AI-powered analysis using Google's Gemini
- 📊 Detailed skill matching and scoring
- 💼 Experience and education evaluation
- 🎨 Modern, responsive UI with glass morphism design
- 📱 Drag and drop file upload
- ⚡ Real-time API key validation

## Tech Stack

- Backend: Flask (Python)
- AI: Google Gemini AI
- Frontend: HTML, CSS, JavaScript
- Database: SQLite
- Deployment: Vercel

## Setup

1. Clone the repository:
```bash
git clone https://github.com/prajwal-git-png/Resume-analyst.git
cd Resume-analyst
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python app.py
```

4. Open http://localhost:5000 in your browser

## Usage

1. Click the Settings button and add your Google API key
2. Upload one or more resumes (PDF, DOC, DOCX, or TXT)
3. Enter the job requirements
4. Click "Analyze Resumes"
5. View detailed analysis results

## Deployment

The application is configured for deployment on Vercel:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

## License

MIT License 