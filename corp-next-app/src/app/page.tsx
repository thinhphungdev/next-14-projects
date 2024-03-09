import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href='/performance'>Performance</Link>
      <Link href='/reliability'>Reliability</Link>
      <Link href='/scale'>Scale</Link>
    </>
  );
}
