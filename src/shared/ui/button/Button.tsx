import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  href?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const BUTTON_TEST_IDS = {
  CHILDREN: 'button-children',
  CONTAINER: 'button-container',
  END_ICON: 'button-endIcon',
  LOADER: 'button-loader',
  START_ICON: 'button-startIcon'
};

const classNames = cva(
  'w-full flex justify-center rounded-full border-[0.094rem] items-center text-[1rem] title-2',
  {
    variants: {
      size: {
        medium: 'min-h-[3.2rem] py-[1rem] px-[1.3rem]',
        small: 'py-[0.375rem] px-[1.25rem]'
      },
      variant: {
        contained:
          'border-black-100 bg-black-100 text-white hover:border-gray-300 hover:bg-gray-300',
        outlined: 'border-black hover:border-black'
      }
    }
  }
);

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  startIcon,
  endIcon,
  href,
  size = 'medium',
  variant = 'contained',
  ...props
}) => (
  <button
    {...props}
    className={classNames({ size, variant })}
    data-testid={BUTTON_TEST_IDS.CONTAINER}
    disabled={loading || props.disabled}
  >
    {!loading && (
      <>
        {!!startIcon && (
          <span className='mr-[0.2rem]' data-testid={BUTTON_TEST_IDS.START_ICON}>
            {startIcon}
          </span>
        )}
        <span data-testid={BUTTON_TEST_IDS.CHILDREN}>{children}</span>
        {!!endIcon && (
          <span className='ml-[0.2rem]' data-testid={BUTTON_TEST_IDS.END_ICON}>
            {endIcon}
          </span>
        )}
      </>
    )}

    {loading && (
      <span data-testid={BUTTON_TEST_IDS.LOADER}>
        <svg
          aria-hidden='true'
          className='text-grey inline h-4 w-4 animate-spin'
          viewBox='0 0 100 101'
        >
          <path
            className='opacity-30'
            d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
            fill='currentColor'
          />
          <path
            className='opacity-80'
            d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
            fill='currentColor'
          />
        </svg>
      </span>
    )}
  </button>
);