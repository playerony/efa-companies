import { AppProvider } from '@context';

export const parameters = {
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700|Raleway:400,500,700&display=swap"
        rel="stylesheet"
      ></link>
    </AppProvider>
  ),
];
