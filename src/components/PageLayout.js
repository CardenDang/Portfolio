import "../styles/styling.css";


export default function PageLayout({ title, children }) {
    return (
        <div className="home inner-page">
            <main className="page-content">
                <h1 className="title page-title"><span className="name-highlight">{title}</span></h1>
                {children}
            </main>
        </div>
    );
}
