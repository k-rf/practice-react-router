import { Switch as HuiSwitch } from '@headlessui/react';
import { useState } from 'react';

const Switch = (): JSX.Element => {
  const [enabled, setEnabled] = useState(false);

  return (
    <HuiSwitch
      className={`${
        enabled ? 'bg-blue-500' : 'bg-gray-400'
      } inline-flex relative items-center w-11 h-6 rounded-full`}
      checked={enabled}
      onChange={setEnabled}
    >
      <span className='sr-only'>Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </HuiSwitch>
  );
};

export { Switch };
