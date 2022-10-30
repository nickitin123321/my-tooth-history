"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const generateAccessToken = (id) => {
    const payload = { id };
    return jsonwebtoken_1.default.sign(payload, 'secret', { expiresIn: '1h' });
};
class Controller {
    async registration(req, res) {
        try {
            const { username, password, email } = req.body;
            const candidate = await User_1.default.findOne({ username });
            if (candidate) {
                return res
                    .status(400)
                    .json({ message: 'User with the same name already exists' });
            }
            const passwordHash = bcrypt_1.default.hashSync(password, 7);
            const user = new User_1.default({ username, passwordHash, email });
            await user.save();
            return res.json({ message: 'User successfully created' });
        }
        catch (e) {
            console.error(e);
            return res.status(500).send();
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User_1.default.findOne({ username });
            if (!user) {
                return res.status(400).send('User not found');
            }
            const isValidPassword = bcrypt_1.default.compareSync(password, user.passwordHash);
            if (!isValidPassword) {
                return res.status(400).send('Incorrect password');
            }
            const token = generateAccessToken(user.id);
            return res.send(token);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send();
        }
    }
    async getUsers(_, res) {
        try {
            const users = await User_1.default.find();
            res.json(users);
        }
        catch (error) {
            console.log(error);
            res.status(400).send('Cannot get users error');
        }
    }
}
exports.default = new Controller();
//# sourceMappingURL=controller.js.map