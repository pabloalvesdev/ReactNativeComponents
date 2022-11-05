import React from "react";
import { FlatList } from "react-native"
import ListItem from './ListItem';
import { Container } from "./styles";

interface ListProps {
    data: any[];
    primaryColor?: string;
    onEditItem: () => void;
    onDeleteItem: () => void;
}

const List: React.FC<ListProps> = ({ data, primaryColor, onEditItem, onDeleteItem }) => {
    return(
        <Container>
            <FlatList
                data={data}
                renderItem={info =>
                  ListItem({
                    primaryColor,
                    info,
                    onEditItem,
                    onDeleteItem
                  })
                }
            />
        </Container>
    )
}

export default List;