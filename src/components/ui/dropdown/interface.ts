import { Dispatch, SetStateAction } from 'react';

export type DropdownProps = {
  asing?: string | undefined;
  last?: boolean;
  title: JSX.Element | string;
};

export interface IDropdownItem extends DropdownProps {
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}
