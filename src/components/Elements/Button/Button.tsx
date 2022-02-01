type Props = {
  className?: React.HTMLAttributes<HTMLButtonElement>['className'];
  children: React.ReactNode;
};

const Button = (props: Props): JSX.Element => {
  return (
    <button
      className={`py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export { Button };
export type { Props as ButtonProps };
