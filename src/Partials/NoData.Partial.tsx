import { Text } from "react-native";
import Box from "../Components/Box";
import { Label } from "../Components/Label";
import NoData from "../Components/NoData";
import Section from "../Components/Section";
import { useAppContext } from "../Context";
import Themes from "../Themes";

const NoDataPartial: React.FC = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Section primaryColor={primaryColor} title="NoData">
            <Label>Um container em branco para tabelas que nao possuem dados.</Label>
            <NoData />
        </Section>
    )
};
export default NoDataPartial;

