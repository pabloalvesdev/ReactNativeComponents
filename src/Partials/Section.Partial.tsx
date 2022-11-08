import { Text } from "react-native";
import styled from "styled-components/native";
import { Label } from "../Components/Label";
import Section from "../Components/Section";
import { useAppContext } from "../Context";
import Themes from "../Themes";

const TesteComponent = styled.View`
height: 136px;
`;

const SectionPartial: React.FC = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Section primaryColor={primaryColor} title="Section">
            <Label>Uma seção que começa com uma espécie de botão que ao ser pressionado expande e revela o conteúdo que existe dentro dele, conteúdo este que é passado como children dentro da section.</Label>
            <Text />
            <Label bold>Props</Label>
            <Text />
            <Label bold>primaryColor: string</Label>
            <Label>Uma string que referencia uma cor que será usada para estilizar o Título e o Indicador de abertura localizado a direita.</Label>
            <Text />
            <Label bold>primaryColor: string</Label>
            <Label>Uma string que referencia uma cor que será usada para estilizar o Título e o Indicador de abertura localizado a direita.</Label>
            <Text />
            <Label bold>primaryColor: string</Label>
            <Label>Uma string que referencia uma cor que será usada para estilizar o Título e o Indicador de abertura localizado a direita.</Label>
        </Section>
    )
};
export default SectionPartial;

