import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const OptionsValue = [
    {value: 'politique', label: 'Politique'},
    {value: 'sciences', label: 'Sciences'},
    {value: 'tech', label: 'Tech'},
    {value: 'pop-culture', label: 'Pop culture'},
]

const SelectInputStyle = styled(Select)`
    width: auto;
    flex-grow: 1;
    margin-right: 8px;
    .react-select__control {
        border-radius: 0;
        height: 48px;
        border: 1px solid #dbdbdb;
    }
`

export const SelectInput = ({onChange}) => (
    <SelectInputStyle 
        options={OptionsValue} 
        onChange={onChange} 
        classNamePrefix="react-select"
    />
)

   
    


