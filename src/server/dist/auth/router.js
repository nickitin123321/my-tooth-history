"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
router.post('/registration', controller_1.default.registration);
router.post('/login', controller_1.default.login);
router.get('/users', controller_1.default.getUsers);
exports.default = router;
//# sourceMappingURL=router.js.map