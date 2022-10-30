"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    username: { type: String, unique: true, require: true },
    passwordHash: { type: String, unique: false, require: true },
    toothCount: { type: Number, unique: false, require: false },
    email: { type: String, unique: true, require: true },
    tooths: { ref: 'Tooth', type: String },
});
exports.default = (0, mongoose_1.model)('Address', User);
//# sourceMappingURL=User.js.map