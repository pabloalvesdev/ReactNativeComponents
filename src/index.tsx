import { useState } from "react";
import { Text } from "react-native";
import Box from "./Components/Box";
import FilterText from "./Components/FilterText";
import { Label } from "./Components/Label";
import Layout from "./Components/Layout";
import Section from "./Components/Section";
import { useAppContext } from "./Context";
import Themes from "./Themes";

const Home = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default
    const [componentList, setComponentList] = useState<string[]|null>(null);
    return(
        <Layout scroll>
            <Label bold title>Components</Label>
            <Label>Todos os citados componentes abaxo podem ser encontrados na pasta "./src"</Label>
            <Text></Text>
            <FilterText placeholderInput="Buscar componente" setDataToFilter={setComponentList} />
            <Text></Text>
            {/* <Section primaryColor={primaryColor} title="Layout">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Section">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="NoData">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="List">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Dialog & Alerts">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Loading">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Box">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="FilterText">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Fields">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section>
            <Section primaryColor={primaryColor} title="Labels">
                <Label>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, necessitatibus laudantium aliquid sunt est quis dolorem deleniti. Voluptatibus cum praesentium dolores, cupiditate nemo ullam, fugiat, architecto ipsa eos laboriosam aliquam.</Label>
            </Section> */}
        </Layout>
    )
};

export default Home;