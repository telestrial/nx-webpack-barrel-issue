// import { OrangeBox } from '@woggle/ui';
import { OrangeBox } from '@woggle/ui/orange-box';

// Don't flip this import. Just what's above.
import Link from 'next/link';

export default function Page1() {
  return (
    <div>
      <Link href="/">Back</Link>
      <h3>Orange Box Tree Shake Test</h3>
      <p>We would expect to only see orange box code here</p>
      <OrangeBox />
    </div>
  );
}
