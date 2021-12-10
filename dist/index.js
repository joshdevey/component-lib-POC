'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const Button = ({
  primary,
  label,
  ...props
}) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500';
  return /*#__PURE__*/React__default["default"].createElement("button", _extends({
    type: "button",
    className: ['py-2 px-4 font-bold relative rounded-full w-min', mode].join(' ')
  }, props), label);
};

const QuickLinks = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    "data-testid": "quickLinks",
    className: "bg-gray-100"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "max-w-2xl mx-auto pt-8 pb-10 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8"
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    className: "pt-8 text-center text-4xl font-bold text-gray-900 sm:pb-8 sm:text-5xl"
  }, "Quick Links"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "mt-6 grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-2"
  }, props.quickLinks.map((product, key) => /*#__PURE__*/React__default["default"].createElement("a", {
    "data-testid": "quickLinks-link",
    href: "#",
    key: key
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "group relative group px-2 "
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3 rounded-md overflow-hidden bg-gray-100 "
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "bg-gray-300 object-center object-cover group-hover:opacity-75"
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flex items-end pt-4 px-6"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "w-full bg-white py-4 px-6 rounded-t text-left space-y-2"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "text-2xl font-semibold text-gray-900",
    "data-testid": "quickLinks-link-title"
  }, product.fields.title), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "hidden group-hover:block"
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "text-blue-500 underline"
  }, "Read more")))))))))));
};

exports.Button = Button;
exports.QuickLinks = QuickLinks;
