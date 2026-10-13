const sharkaiDetails = `# SharkAI — AI-Powered Resume Reviewer

SharkAI is a full-stack, cloud-native resume review platform designed to help students, new graduates, and job seekers improve their resumes and prepare for competitive job applications.

Built with **React and Amazon Web Services (AWS)**, SharkAI combines a responsive web interface with a serverless backend to securely upload, store, and process resumes. The platform is being developed to leverage **Amazon Textract and Amazon Bedrock** to analyze resume content, identify areas for improvement, and generate personalized feedback based on specific job descriptions.

Whether you're applying for your first internship or preparing for a full-time software engineering position, SharkAI aims to simplify resume optimization through accessible, AI-powered insights.

---

## Deployment & Infrastructure

### Backend — AWS Lambda and API Gateway

SharkAI uses a serverless backend powered by AWS Lambda, with Amazon API Gateway routing HTTP requests to the appropriate backend operations.

This architecture supports usage-based scaling without requiring a continuously running application server.

### Database — Amazon DynamoDB

Resume metadata is stored in DynamoDB, allowing the backend to efficiently locate uploaded resumes through their associated identifiers.

### Storage — Amazon S3

Uploaded PDFs are stored in Amazon S3. Presigned URLs enable direct uploads from the frontend, while IAM permissions control backend access to stored documents.

---

## Impact

SharkAI aims to bridge the gap between job seekers and the tools needed to create competitive, professionally tailored resumes.

By combining a modern React interface with AWS serverless infrastructure and planned AI-powered analysis, SharkAI is designed to deliver:

- **Accessibility** — Resume feedback designed for students and job seekers without requiring expensive professional review services.
- **Efficiency** — Streamlined document uploads, retrieval, and eventually automated AI analysis.
- **Personalization** — Job-specific feedback intended to help applicants better communicate their skills, qualifications, and experience.
- **Scalability** — Serverless AWS infrastructure designed to accommodate changing usage without dedicated server management.

Beyond its intended user impact, SharkAI demonstrates practical experience in full-stack development, REST API design, cloud infrastructure, IAM security, database integration, and asynchronous AI processing.`;

export default sharkaiDetails;
