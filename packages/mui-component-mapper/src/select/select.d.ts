import { UseFieldApiComponentConfig } from '@guyathomas/data-driven-forms-react-form-renderer';
import { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import { ReactNode } from 'react';
import { GridProps, TextFieldProps, InputProps } from '@material-ui/core';

interface InternalSelectProps<T> extends AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined> {
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  isMulti?: boolean;
  isClearable?: boolean;
  disableClearable?: boolean;
  loadingMessage?: ReactNode;
  loadingText?: ReactNode;
  noOptionsMessage?: ReactNode;
  noOptionsText?: ReactNode;
  closeMenuOnSelect?: boolean;
  FormFieldGridProps?: GridProps;
  TextFieldProps?: TextFieldProps;
  inputProps?: InputProps;
}

export type SelectProps<T> = InternalSelectProps<T> & UseFieldApiComponentConfig;

declare const Select: React.ComponentType<SelectProps<any>>;

export default Select;
