import React, {ReactNode, SetStateAction} from 'react';
import {Button, ListRenderItemInfo, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Label, Box} from './styles';

import {Container} from './styles';

interface ListItemProps {
  info: ListRenderItemInfo<any>;
  onEditItem: () => void;
  onDeleteItem: () => void;
  primaryColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({onEditItem, onDeleteItem, info, primaryColor}) => {
  const {item} = info;
  return (
    <Container>
      <Box row spaced>
        <Box flexSize={5}>
          <Label bold>{/*{item.Title}*/}Titulo Teste</Label>
        </Box>
        <Box flexSize={1} spaced row>
          <Icon name="pencil" size={20} color={primaryColor || 'white'} onPress={onEditItem} />
          <Icon name="trash" size={20} color="#ee5253" onPress={onDeleteItem} />
        </Box>
      </Box>
      <Box marginVertical={5} row>
        <Label bold>Label 1: </Label>
        <Label>Descrição 1</Label>
      </Box>
      <Box marginVertical={5} row>
        <Label bold>Label 2: </Label>
        <Label>
          Descrição 2
        </Label>
      </Box>
    </Container>
  );
};

export default ListItem;
