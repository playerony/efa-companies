import { Label, SearchInputProps, SearchInput as Input } from '@ui';

export const SearchInput = (props: SearchInputProps): JSX.Element => (
  <>
    <Label>Company Name</Label>
    <Input placeholder="Example: Apple" {...props} />
  </>
);
