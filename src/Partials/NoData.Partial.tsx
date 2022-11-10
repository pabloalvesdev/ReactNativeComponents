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
        <Section height={500} primaryColor={primaryColor} title="NoData">
            <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            <NoData />
        </Section>
    )
};
export default NoDataPartial;

