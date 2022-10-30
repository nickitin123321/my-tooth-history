"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./auth/router"));
const app = (0, express_1.default)();
const port = process.env.PORT ?? 2000;
app.use(express_1.default.json());
app.use('/auth', router_1.default);
async function start() {
    try {
        await mongoose_1.default.connect('mongodb://localhost:27017/mytoothhistory');
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
}
app.get('', (request, response) => {
    try {
        response.send('hello tooth');
    }
    catch (error) {
        console.error(error);
    }
});
start();
//# sourceMappingURL=index.js.map