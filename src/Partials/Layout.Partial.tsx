import { Text } from "react-native";
import { Label } from "../Components/Label";
import Section from "../Components/Section";
import { useAppContext } from "../Context";
import Themes from "../Themes";

const LayoutPartial: React.FC = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Section primaryColor={primaryColor} title="Layout">
            <Label>Layout padrão, composto por uma View de 100% x 100% com o background padrao de acordo com o tema utilizado na aplicação. Display é "flex".</Label>
            <Text />
            <Label bold>Props</Label>
            <Text />
            <Label bold>scroll: boolean</Label>
            <Label>Altera de um layout fixo para um layout em modo de Scroll.</Label>
        </Section>
    )
};
export default LayoutPartial;