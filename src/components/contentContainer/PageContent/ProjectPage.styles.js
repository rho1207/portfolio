import styled from 'styled-components';
import { List, ListItemButton, ListItemText } from '@mui/material'

export const list = styled(List)`
  text-align: left;
  padding: none;
  
`;

export const listButton = styled(ListItemButton)`
    display: inline-flex;
    cursor: pointer;
    align-items: flex-start;
    height: 60px;
`;

export const buttonYear = styled(ListItemText)`
    max-width: 40px;
    width: 30px;
    color: #ff7700;
`;


export const buttonTitle = styled(ListItemText)`
   margin: 30px;
`;