
export default function TeamCard({ name, role }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '1rem', width: 220 }}>
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    );
}