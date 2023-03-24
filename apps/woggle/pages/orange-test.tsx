import { OrangeBox } from '@woggle/ui';
// import { OrangeBox } from '@woggle/ui/orange-box';

export default function Page1() {
  return (
    <div>
      Orange Box Tree Shake Test
      <p>We would expect to only see orange box code here</p>
      <OrangeBox />
    </div>
  );
}
