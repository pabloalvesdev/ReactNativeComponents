import React, {useCallback, useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {useAppContext} from '../../Context';
import Themes from '../../Themes';
import Box from '../Box';
import Field from '../Field';
import {Label} from '../Label';
import {Container} from './styles';

interface Props {
  setDataToFilter: React.Dispatch<React.SetStateAction<any[] | null>>;
  placeholderInput: string;
  nameFieldToFilter?: string;
  dataToFilter?: any[] | null;
  callBackApi?: (textSearch: string) => Promise<any[]>;
}

const FilterText: React.FC<Props> = ({
  nameFieldToFilter,
  setDataToFilter,
  callBackApi,
  dataToFilter,
  placeholderInput,
}) => {
  const {theme} = useAppContext();
  const [inputSearch, setInputSearch] = useState<string>('');
  const [filtered, setFiltered] = useState<boolean>(false);
  const [dataOriginal, setDataOriginal] = useState<any[] | null>(null);
  const searchAsync = useCallback(
    async (textSearch: string) => {
      try {
        if (callBackApi) {
          const result = await callBackApi(textSearch);
          setDataToFilter(result);
          setFiltered(!result?.length);
        }
      } catch (error) {
        console.log(`error in Search - function searchAsync, error:${error}`);
      }
    },
    [callBackApi, setDataToFilter],
  );

  const searchHandle = async (textSearch: string) => {
    if (callBackApi && textSearch.trim()) {
      searchAsync(textSearch);
    }

    if (dataOriginal && nameFieldToFilter) {
      if (!textSearch.trim()) {
        setDataToFilter(dataOriginal);
        setFiltered(false);
      } else {
        const resultData = dataOriginal.filter(x =>
          `${x[nameFieldToFilter]}`
            .toLowerCase()
            .trim()
            .includes(textSearch.trim().toLowerCase()),
        );
        setDataToFilter(resultData);
        setFiltered(!resultData?.length);
      }
    }
  };

  const handleFilterDateClean = useCallback(() => {
    if (dataOriginal) {
      setDataToFilter(dataOriginal);
      setInputSearch('');
      setFiltered(false);
    }
  }, [dataOriginal, setDataToFilter]);

  useEffect(() => {
    if (!dataOriginal && dataToFilter) {
      const newData = dataToFilter.filter(x => true);
      setDataOriginal(newData);
    }
  }, [dataOriginal, dataToFilter]);

  return (
    <Container style={{zIndex: 4000}}>
      <Field
        large
        onChangeText={(text: string) => {
          setInputSearch(text);
          searchHandle(text);
        }}
        value={inputSearch}
        placeholder={placeholderInput}
        placeholderTextColor={Themes[theme].text.primary}
      />
    </Container>
  );
};

export default FilterText;
