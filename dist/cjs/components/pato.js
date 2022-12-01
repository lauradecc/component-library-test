"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pato = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
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
const PatoRoot = (0, styles_1.styled)('span')(({ theme, ownerState }) => {
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
const Pato = (props) => {
    const { color = 'primary', size = 'small', isTag = false, icon, left, margin, children } = props, other = __rest(props, ["color", "size", "isTag", "icon", "left", "margin", "children"]);
    const ownerState = { color, size, isTag, icon };
    return icon ? ((0, jsx_runtime_1.jsx)(PatoRoot, Object.assign({ ownerState: ownerState }, other, { children: (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ sx: { display: 'flex', alignItems: 'center' } }, { children: left ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [icon, (0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ sx: { ml: margin || 0 } }, { children: children }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ sx: { mr: 1 } }, { children: children })), icon] })) })) }))) : ((0, jsx_runtime_1.jsx)(PatoRoot, Object.assign({ ownerState: ownerState }, other, { children: children })));
};
exports.Pato = Pato;
exports.Pato.propTypes = {
    children: prop_types_1.default.node,
    color: prop_types_1.default.oneOf(['primary', 'secondary', 'error', 'info', 'warning', 'success'])
};
//# sourceMappingURL=pato.js.map