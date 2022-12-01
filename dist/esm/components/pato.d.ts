import type { FC, ReactNode } from 'react';
import { Theme } from '@mui/material';
import type { SxProps } from '@mui/system';
type PatoColor = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
type PatoSize = 'extraSmall' | 'small' | 'medium' | 'mediumSemi' | 'mediumNarrow' | 'mediumNarrowLong' | 'mediumNarrowLonger' | 'mediumLarge' | 'large';
type PatoType = true | false;
interface PatoProps {
    children?: ReactNode;
    color?: PatoColor;
    style?: {};
    sx?: SxProps<Theme>;
    size?: PatoSize;
    isTag?: PatoType;
    icon?: JSX.Element;
    left?: boolean;
    margin?: number;
}
export declare const Pato: FC<PatoProps>;
export {};
