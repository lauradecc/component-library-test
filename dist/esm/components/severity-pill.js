var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
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
const SeverityPillRoot = styled('span')(({ theme, ownerState }) => {
    var _a, _b, _c, _d;
    const backgroundColor = (_a = theme.palette[ownerState.color]) === null || _a === void 0 ? void 0 : _a.main;
    const color = (_b = theme.palette[ownerState.color]) === null || _b === void 0 ? void 0 : _b.contrastText;
    const width = ownerState.isTag ? '' : (_c = size[ownerState.size]) === null || _c === void 0 ? void 0 : _c.width;
    const height = (_d = size[ownerState.size]) === null || _d === void 0 ? void 0 : _d.height;
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
export const SeverityPill = (props) => {
    const { color = 'primary', size = 'small', isTag = false, icon, left, margin, children } = props, other = __rest(props, ["color", "size", "isTag", "icon", "left", "margin", "children"]);
    const ownerState = { color, size, isTag, icon };
    return icon ? (_jsx(SeverityPillRoot, Object.assign({ ownerState: ownerState }, other, { children: _jsx(Box, Object.assign({ sx: { display: 'flex', alignItems: 'center' } }, { children: left ? (_jsxs(_Fragment, { children: [icon, _jsx(Box, Object.assign({ sx: { ml: margin || 0 } }, { children: children }))] })) : (_jsxs(_Fragment, { children: [_jsx(Box, Object.assign({ sx: { mr: 1 } }, { children: children })), icon] })) })) }))) : (_jsx(SeverityPillRoot, Object.assign({ ownerState: ownerState }, other, { children: children })));
};
SeverityPill.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'warning', 'success'])
};
//# sourceMappingURL=severity-pill.js.map