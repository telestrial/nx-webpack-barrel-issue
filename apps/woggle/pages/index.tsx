import Link from 'next/link';

export function Index() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <div>Import Tree Shake Tests</div>
      <p>We would expect not to see orange or blue box code here</p>
      <Link href="/orange-test">With Orange Box</Link>
      <Link href="/orange-blue-test">With Orange & Blue Box</Link>
    </div>
  );
}

export default Index;
