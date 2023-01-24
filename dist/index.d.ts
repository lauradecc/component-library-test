import { FC, ReactNode } from 'react';
import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

declare const ProgressBar: FC;

declare const Pato: FC;

type SeverityPillColor = 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
type SeverityPillSize = 'extraSmall' | 'small' | 'medium' | 'mediumSemi' | 'mediumNarrow' | 'mediumNarrowLong' | 'mediumNarrowLonger' | 'mediumLarge' | 'large';
type SeverityPillType = true | false;
interface SeverityPillProps {
    children?: ReactNode;
    color?: SeverityPillColor;
    style?: {};
    sx?: SxProps<Theme>;
    size?: SeverityPillSize;
    isTag?: SeverityPillType;
    icon?: JSX.Element;
    left?: boolean;
    margin?: number;
}
declare const SeverityPill: FC<SeverityPillProps>;

declare const Nutria: FC;

declare const MarketingCard: FC;

interface ProgressPointerProps {
    number: number;
    text: string;
    currentStep: number;
}
declare const ProgressPointer: FC<ProgressPointerProps>;

export { MarketingCard, Nutria, Pato, ProgressBar, ProgressPointer, SeverityPill };
