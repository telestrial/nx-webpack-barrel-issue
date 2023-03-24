// import { BlueBox, OrangeBox } from '@woggle/ui';
import { OrangeBox } from '@woggle/ui/orange-box';
import { BlueBox } from '@woggle/ui/blue-box';

// Don't flip this import. Just what's above.
import Link from 'next/link';

export default function page2() {
  return (
    <div>
      <Link href="/">Back</Link>
      <h3>Blue Box Tree Shake Test</h3>
      <p>
        We would expect to see both orange and blue box code here, but not
        skyblue box code.
      </p>
      <OrangeBox />
      <BlueBox />
    </div>
  );
}
