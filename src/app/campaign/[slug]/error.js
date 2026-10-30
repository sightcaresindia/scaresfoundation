'use client';
export default function Error({ reset }) {
    return <main style={{ padding: '5rem 2rem', textAlign: 'center' }}><h1>Unable to load campaign</h1><p>Please try again shortly.</p><button onClick={reset}>Try again</button></main>;
}
