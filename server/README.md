# Job Application Backend

This is the backend server for handling job applications with file uploads and email notifications.

## Setup Instructions

1. Install dependencies:
```bash
cd server
npm install
```

2. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the following variables in `.env`:
  - `MONGODB_URI`: Your MongoDB connection string
  - `EMAIL_USER`: Your Gmail address
  - `EMAIL_PASS`: Your Gmail app-specific password
  - `ADMIN_EMAIL`: Email address where applications will be sent

3. Create uploads directory:
```bash
mkdir uploads
```

4. Start the server:
```bash
npm run dev
```

## API Endpoints

### POST /api/job-applications
Submit a new job application with the following fields:
- name (required)
- email (required)
- phone (required)
- position (required)
- experience (required)
- qualification (required)
- coverLetter (optional)
- resume (required, PDF file, max 5MB)

## Security Notes

1. Make sure to use an app-specific password for Gmail
2. Set appropriate file size limits in your reverse proxy if using one
3. Implement rate limiting in production
4. Add CORS configuration for production
