import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

import type { Response, Request } from 'express';

const generateAccessToken = (id: number) => {
  const payload = { id };
  return jwt.sign(payload, 'secret', { expiresIn: '1h' });
};

type AuthBody = {
  username: string;
  password: string;
};

type RegistrationBody = AuthBody & { email: string };

type AuthRequest = Request<{}, {}, AuthBody>;
type RegistrationRequest = Request<{}, {}, RegistrationBody>

class Controller {
  async registration(req: RegistrationRequest, res: Response) {
    try {
      const { username, password, email } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'User with the same name already exists' });
      }

      const passwordHash = bcrypt.hashSync(password, 7);
      const user = new User({ username, passwordHash, email });
      await user.save();

      return res.json({ message: 'User successfully created' });
    } catch (e) {
      console.error(e);
      return res.status(500).send();
    }
  }

  async login(req: AuthRequest, res: Response) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).send('User not found');
      }

      const isValidPassword = bcrypt.compareSync(password, user.passwordHash!);

      if (!isValidPassword) {
        return res.status(400).send('Incorrect password');
      }

      const token = generateAccessToken(user.id);

      return res.send(token);
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }
  }

  async getUsers(_: Request, res: Response) {
    try {
      const users = await User.find();

      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(400).send('Cannot get users error');
    }
  }
}

export default new Controller();
