import PageLayout from "../components/PageLayout";

const contacts = [
    { label: "Phone", text: "408-643-2726", href: "tel:+14086432726" },
    { label: "Email", text: "dangcarden@gmail.com", href: "mailto:dangcarden@gmail.com" },
    { label: "School email", text: "carden.dang@sjsu.edu", href: "mailto:carden.dang@sjsu.edu" },
    { label: "LinkedIn", text: "linkedin.com/carden-dang", href: "https://www.linkedin.com/in/carden-dang-344a72256/", external: true },
    { label: "Handshake", text: "app.joinhandshake.com/profiles/g3zqrf", href: "https://app.joinhandshake.com/profiles/g3zqrf", external: true },
];

export default function Contacts() {
    return (
        <PageLayout title="Contacts">
            <section className="contact-panel" aria-labelledby="contact-name">
                <h2 id="contact-name">Carden Dang</h2>
                <dl className="contact-list">
                    {contacts.map(({ label, text, href, external }) => (
                        <div key={label} className="contact-item">
                            <dt>{label}</dt>
                            <dd><a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{text}</a></dd>
                        </div>
                    ))}
                </dl>
            </section>
        </PageLayout>
    );
}
