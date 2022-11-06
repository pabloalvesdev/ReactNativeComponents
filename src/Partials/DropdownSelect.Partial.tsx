import { Label } from "../Components/Label";
import Section from "../Components/Section";
import { useAppContext } from "../Context";
import Themes from "../Themes";

const DropdownSelectPartial: React.FC = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Section primaryColor={primaryColor} title="DropdownSelect">
            <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
        </Section>
    )
};
export default DropdownSelectPartial;

