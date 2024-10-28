import {
  InputProps,
  Group,
  SearchField as AriaSearchField,
  SearchFieldProps as AriaSearchFieldProps,
} from 'react-aria-components';
import { composeTailwindRenderProps, inputFieldStyle } from './utils';
import { Button } from './button';
import { Input } from './field';
import { SearchIcon, XIcon } from './icons';

export interface SearchFieldProps extends AriaSearchFieldProps {}

export function SearchField(props: SearchFieldProps) {
  return (
    <AriaSearchField
      {...props}
      className={composeTailwindRenderProps(props.className, inputFieldStyle)}
    ></AriaSearchField>
  );
}

export function SearchInput(props: InputProps) {
  return (
    <Group
      data-ui="control"
      className={[
        'isolate',
        'grid',
        'grid-cols-[calc(theme(size.5)+20px)_1fr_calc(theme(size.5)+20px)]',
        'sm:grid-cols-[calc(theme(size.4)+20px)_1fr_calc(theme(size.4)+20px)]',
      ].join(' ')}
    >
      <SearchIcon className="col-start-1 row-start-1 size-5 place-self-center text-muted sm:size-4 z-10" />

      <Input
        {...props}
        className={composeTailwindRenderProps(props.className, [
          '[&::-webkit-search-cancel-button]:hidden',
          'col-span-full',
          'row-start-1',
          'pe-10',
          'sm:pe-9',
          'ps-10',
          'sm:ps-8',
        ])}
      />
      <Button
        isIconOnly
        variant="plain"
        size="sm"
        className="group-empty-invisible -col-end-1 row-start-1 place-self-center group-empty:invisible"
      >
        <XIcon aria-label="Clear" />
      </Button>
    </Group>
  );
}
