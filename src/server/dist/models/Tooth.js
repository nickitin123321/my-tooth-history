"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Tooth = new mongoose_1.Schema({
    diseases: { ref: 'Disease', type: String },
});
exports.default = (0, mongoose_1.model)('Tooth', Tooth);
//# sourceMappingURL=Tooth.js.map