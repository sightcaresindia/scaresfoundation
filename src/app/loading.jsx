export default function Loading() {
    return (
        <main className="container py-5" aria-busy="true">
            <p role="status" style={{ color: '#114778', textAlign: 'center' }}>Loading page…</p>
        </main>
    );
}
