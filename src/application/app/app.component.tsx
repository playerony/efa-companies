import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from '../context';

import { List, Table, ListItem, Label, Button, BigHeading, SearchInput, Text } from '@ui';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const App = (): JSX.Element => (
  <BrowserRouter>
    <AppProvider>
      <BigHeading>big heading</BigHeading>
      <Button>test</Button>
      <Label>Input label</Label>
      <SearchInput placeholder="xD" />
      <Label>List label</Label>
      <List>
        <ListItem>first item</ListItem>
        <ListItem>second item</ListItem>
      </List>
      <Table dataSource={dataSource} columns={columns} />
      <Text>
        asddasdsajafsuihfhhufhufsdhjkfjkshefjkfjksjksfdjkfsdfjkasddasdsajafsuihfhhufhufsdhjkfjk
        shefjkfjksjksfdjkfsdfjkasddasdsajafsuihfhhufhufsdhjkfjkshefjkfjksjksfdjkfsdfjkasddasdsa
        jafsuihfhhufhufsdhjkfjkshefjkfjksjksfdjkfsdfjkasddasdsajafsuihfhhufhufsdhjkfjkshefjkfjk
        sjksfdjkfsdfjkasddasdsajafsuihfhhufhufsdhjkfjkshefjkfjksjksfdjkfsdfjk
      </Text>
    </AppProvider>
  </BrowserRouter>
);
