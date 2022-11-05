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
        <Label bold>{/*{item.Title}*/}Titulo Teste</Label>
        <View>
          <Icon name="pencil" size={20} color={primaryColor || 'white'} onPress={onEditItem} />
          <Icon name="trash" size={20} color={primaryColor || 'white'} onPress={onDeleteItem} />
        </View>
      </Box>
      <Box row>
        <Label bold>Label 1: </Label>
        <Label>Descrição 1</Label>
      </Box>
      <Box row>
        <Label bold>Label 2: </Label>
        <Label>
          Descrição 2
        </Label>
      </Box>
    </Container>
  );
};

export default ListItem;
