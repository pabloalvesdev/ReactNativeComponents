import { useState } from "react";
import { Text } from "react-native";
import Box from "./Components/Box";
import FilterText from "./Components/FilterText";
import { Label } from "./Components/Label";
import Layout from "./Components/Layout";
import Section from "./Components/Section";
import { useAppContext } from "./Context";
import BoxPartial from "./Partials/Box.Partial";
import DialogAlertsPartial from "./Partials/DialogAlerts.Partial";
import DropdownSelectPartial from "./Partials/DropdownSelect.Partial";
import FieldsPartial from "./Partials/Fields.Partial";
import FilterTextPartial from "./Partials/FilterText.Partial";
import LabelsPartial from "./Partials/Labels.Partial";
import LayoutPartial from "./Partials/Layout.Partial";
import ListPartial from "./Partials/List.Partial";
import LoadingPartial from "./Partials/Loadings.Partial";
import NoDataPartial from "./Partials/NoData.Partial";
import SectionPartial from "./Partials/Section.Partial";
import Themes from "./Themes";

const Home = () => {
    const {theme} = useAppContext();
    const primaryColor = Themes[theme].primary.default;
    return(
        <Layout scroll>
            <Label bold title>Components</Label>
            <Label>Todos os citados componentes abaxo podem ser encontrados na pasta "./src"</Label>
            <Text></Text>
            <SectionPartial />
            <NoDataPartial />
            <ListPartial />
            <DropdownSelectPartial />
            {/* <LayoutPartial />
            <DialogAlertsPartial />
            <LoadingPartial />
            <BoxPartial />
            <FilterTextPartial />
            <FieldsPartial />
            <LabelsPartial /> */}
        </Layout>
    )
};

export default Home;