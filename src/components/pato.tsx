import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, Theme } from '@mui/material';
import { styled } from '@mui/material/styles';
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

interface PatoRootProps {
    ownerState: {
        color: PatoColor;
        size: PatoSize;
        isTag: PatoType;
        icon?: JSX.Element;
    };
}

const size = {
    extraSmall: {
        width: 25,
        height: 22
    },
    small: {
        width: 33,
        height: 22
    },
    medium: {
        width: 60,
        height: 40
    },
    mediumSemi: {
        width: 110,
        height: 40
    },
    mediumNarrow: {
        width: 78,
        height: 22
    },
    mediumNarrowLong: {
        width: 100,
        height: 22
    },
    mediumNarrowLonger: {
        width: 120,
        height: 22
    },
    mediumLarge: {
        width: 136,
        height: 40
    },
    large: {
        width: 187,
        height: 40
    }
};

const PatoRoot = styled('span')<PatoRootProps>(({ theme, ownerState }) => {
    const backgroundColor = theme.palette[ownerState.color]?.main;
    const color = theme.palette[ownerState.color]?.contrastText;
    const width = ownerState.isTag ? '' : size[ownerState.size]?.width;
    const height = size[ownerState.size]?.height;
    const borderRadius = ownerState.isTag ? 12 : 8;

    return {
        alignItems: 'center',
        backgroundColor,
        borderRadius,
        color,
        cursor: 'default',
        display: 'inline-flex',
        flexGrow: 0,
        flexShrink: 0,
        fontFamily: theme.typography.fontFamily,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: 2,
        fontWeight: 600,
        justifyContent: 'center',
        letterSpacing: 0.5,
        minWidth: 20,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        whiteSpace: 'nowrap',
        width,
        height
    };
});

export const Pato: FC<PatoProps> = (props) => {
    const { color = 'primary', size = 'small', isTag = false, icon, left, margin, children, ...other } = props;

    const ownerState = { color, size, isTag, icon };

    return icon ? (
        <PatoRoot ownerState={ownerState} {...other}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {left ? (
                    <>
                        {icon}
                        <Box sx={{ ml: margin || 0 }}>{children}</Box>
                    </>
                ) : (
                    <>
                        <Box sx={{ mr: 1 }}>{children}</Box>
                        {icon}
                    </>
                )}
            </Box>
        </PatoRoot>
    ) : (
        <PatoRoot ownerState={ownerState} {...other}>
            {children}
        </PatoRoot>
    );
};

Pato.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'warning', 'success'])
};
