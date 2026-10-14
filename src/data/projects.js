import financialAdvisor from "../assets/financial-advisor.png";
import sharkai from "../assets/sharkai.png";
import sleepQuality from "../assets/sleep-quality.png";
import marketplace from "../assets/marketplace.png";
import sharkaiDetails from "./sharkaiDetails";
import marketplaceDetails from "./marketplaceDetails";
import sleepQualityDetails from "./sleepQualityDetails";

const projects = [
    {
        id: "financial-advisor",
        title: "AI Personal Financial Advisor",
        image: financialAdvisor,
        imageAlt: "AI Personal Financial Advisor interface with portfolio holdings and an investment advisory chat",
        description: "IBM watsonX multi-agent system geared towards guiding users in making informed investment decisions.",
        detailsHeading: "Project details",
        projectDescription: `Smiley is a multi-agent financial advisory application built for the IBM WatsonX Hackathon. It puts institutional-grade investment tools in the hands of everyday investors through a conversational AI interface backed by real-time market data. Whether you're a first-time investor or a seasoned trader looking to move fast, Smiley analyzes your portfolio, checks macroeconomic conditions, evaluates risk, and delivers personalized, actionable recommendations all in one place.`,
        features: [
            "Seven-agent AI system powered by IBM WatsonX Orchestrate",
            "Real-time market data via Finnhub API (live quotes, news, analyst ratings)",
            "Risk-aware recommendations tailored to your risk tolerance and goals",
            "Portfolio analysis with sector concentration and rebalancing insights",
            "Macroeconomic context integrated into every recommendation",
            "Tax optimization strategies to maximize after-tax returns",
            "Onboarding flow that personalizes every interaction from the start",
        ],
        impactDescription: "Smiley bridges the gap between novice investors and institutional-grade tools previously available only to the wealthy. By combining IBM WatsonX Orchestrate's multi-agent framework with real-time market intelligence, Smiley delivers:",
        benefits: [
            { label: "Accessibility", description: "personalized financial advice without a financial advisor" },
            { label: "Speed", description: "decisive investment insights in seconds, not hours" },
            { label: "Confidence", description: "risk-checked, tax-aware, macro-informed recommendations" },
        ],
    },
    {
        id: "sleep-quality",
        detailsMarkdown: sleepQualityDetails,
        title: "Sleep Quality Monitor",
        image: sleepQuality,
        imageAlt: "Sleep Quality Monitor dashboard with sleep scores, duration, efficiency, and heart rate charts",
        description: "Monitors conditions important to quality of sleep. Data is combined with a Machine Learning model to optimize sleeping conditions.",
    },
    {
        id: "sharkai",
        detailsMarkdown: sharkaiDetails,
        title: "SharkAI Resume Reviewer",
        image: sharkai,
        imageAlt: "SharkAI Resume Reviewer interface with a resume upload form",
        description: "Amazon Bedrock AI automatically extracts and analyzes resumes; can filter through keywords and provide suggestions under secure AWS cloud.",
        projectDescription: "Amazon Bedrock AI automatically extracts and analyzes resumes; can filter through keywords and provide suggestions under secure AWS cloud.",
    },
    {
        id: "sjsu-marketplace",
        detailsMarkdown: marketplaceDetails,
        title: "SJSU Marketplace",
        image: marketplace,
        imageAlt: "SJ-Bay student marketplace with product filters and listings for a pen, room rental, and textbook",
        description: "Buyer and seller marketplace created by SJSU students for SJSU students.",
        projectDescription: "Buyer and seller marketplace created by SJSU students for SJSU students.",
    },
];

export default projects;
