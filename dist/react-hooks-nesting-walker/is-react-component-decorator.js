"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_react_api_expression_1 = require("./is-react-api-expression");
const reactComponentDecorators = ['forwardRef', 'memo', 'observer'];
/**
 * Tests is an expression is a React top-level API component decorator (e.g. `React.forwardRef`,
 * `React.memo`)
 */
exports.isReactComponentDecorator = is_react_api_expression_1.isReactApiExpression(identifier => reactComponentDecorators.includes(identifier.text));
