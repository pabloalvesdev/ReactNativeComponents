import { Text } from "react-native";
import styled from "styled-components/native";
import { Label } from "../Components/Label";
import Section from "../Components/Section";
import { useAppContext } from "../Context";
import Themes from "../Themes";

const SectionPartial: React.FC = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Section height={400} primaryColor={primaryColor} title="Section">
            <Label>Uma seção que começa com uma espécie de botão que ao ser pressionado expande e revela o conteúdo que existe dentro dele, conteúdo este que é passado como children dentro da section.</Label>
            <Text />
            <Label bold>Props</Label>
            <Text />
            <Label bold>primaryColor: string | undefined</Label>
            <Label>Uma string que referencia uma cor que será usada para estilizar o Título e o Indicador de abertura localizado a direita.</Label>
            <Label bold>Props</Label>
            <Text />
            <Label bold>height: number | undefined</Label>
            <Label>Um número que define a altura que deverá ter o componente expandido. Caso não seja definido um valor para o height, será considerado como padrão o valor 200.</Label>
        </Section>
    )
};
export default SectionPartial;

