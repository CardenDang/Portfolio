function inline(text) {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, index) => {
        if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
        return part;
    });
}

export default function ProjectDetails({ markdown }) {
    const lines = markdown.split(/\r?\n/);
    const blocks = [];
    let index = 0;
    while (index < lines.length) {
        const line = lines[index];
        const key = index;
        if (!line.trim()) { index++; continue; }
        if (line.startsWith("```")) {
            const code = [];
            index++;
            while (index < lines.length && !lines[index].startsWith("```")) code.push(lines[index++]);
            index++;
            blocks.push(<pre key={key}><code>{code.join("\n")}</code></pre>);
        } else if (/^#{1,3} /.test(line)) {
            const level = line.match(/^#+/)[0].length;
            // The card already supplies the project title.
            if (level > 1) {
                const Heading = level === 2 ? "h3" : "h4";
                blocks.push(<Heading key={key}>{inline(line.replace(/^#+ /, ""))}</Heading>);
            }
            index++;
        } else if (line.startsWith("|")) {
            const rows = [];
            while (index < lines.length && lines[index].startsWith("|")) {
                const cells = lines[index++].trim().slice(1, -1).split("|").map(cell => cell.trim());
                if (!cells.every(cell => /^:?-+:?$/.test(cell))) rows.push(cells);
            }
            blocks.push(
                <div className="project-table-wrapper" key={key}>
                    <table className="project-agent-table">
                        <thead><tr>{rows[0].map((cell, i) => <th scope="col" key={i}>{inline(cell)}</th>)}</tr></thead>
                        <tbody>{rows.slice(1).map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{inline(cell)}</td>)}</tr>)}</tbody>
                    </table>
                </div>
            );
        } else if (line.startsWith("- ")) {
            const items = [];
            while (index < lines.length && lines[index].startsWith("- ")) items.push(lines[index++].slice(2));
            blocks.push(<ul key={key}>{items.map((item, i) => <li key={i}>{inline(item)}</li>)}</ul>);
        } else if (line.trim() === "---") {
            blocks.push(<hr key={key} />);
            index++;
        } else {
            const paragraph = [];
            while (index < lines.length && lines[index].trim() && !/^(#{1,3} |```|\||- |---$)/.test(lines[index])) paragraph.push(lines[index++]);
            blocks.push(<p key={key}>{inline(paragraph.join(" "))}</p>);
        }
    }
    return <div className="project-details">{blocks}</div>;
}
