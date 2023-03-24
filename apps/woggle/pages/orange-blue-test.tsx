import { BlueBox, OrangeBox } from '@woggle/ui';
// import { OrangeBox } from '@woggle/ui/orange-box';
// import { BlueBox } from '@woggle/ui/blue-box';

export default function page2() {
  return (
    <div>
      Blue Box Tree Shake Test
      <p>
        We would expect to see both orange and blue box code here, but not
        skyblue box code.
      </p>
      <OrangeBox />
      <BlueBox />
    </div>
  );
}
