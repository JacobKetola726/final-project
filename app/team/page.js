
import TeamCard from "../components/TeamCard";
import Image from "next/image";

export default function TeamPage() {
    const members = [
        { name: "Grady Hamilton", role: "Mechanical Engineer"},
        { name: "Jordan Hernandez", role: "Mechanical Engineer"},
        { name: "Thomas Waters", role: "Mechanical Engineer"},
        { name: "William Bayless", role: "Mechanical Engineer"}
    ];

    return (
        <div style={{ maxWidth: 900, margin: '2rem auto' }}>
            <h1>The Team</h1>
            <Image src="/images/team.png" alt="The Team" width={1200} height={800} style={{ width: '100%', height: 'auto', borderRadius: 16, marginBottom: '2rem' }} />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {members.map(m => <TeamCard key={m.name} name={m.name} role={m.role} />)}
            </div>
            <blockquote style={{ marginTop: '1rem', fontStyle: 'italic' }}> "Trust us bro you really want one" - Barack Obama</blockquote>
        </div>
    );
}