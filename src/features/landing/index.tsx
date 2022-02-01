import { Button } from '~/components/Elements/Button/Button';

export const Landing = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center w-full h-full'>
      <div className='text-center'>Hello World</div>
      <div className='text-center'>
        <Button className='w-20'>Hi!</Button>
      </div>
    </div>
  );
};
