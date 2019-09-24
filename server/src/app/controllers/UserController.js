import * as yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }
    const userExists = await User.findOne({ email: req.body.email });
    // Utiliza o req.body todo pq a model mapeia os dados que irao ser usados
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const { _id, name, email } = await User.create(req.body);

    return res.json({
      _id,
      name,
      email,
    });
  }

  async update(req, res) {
    console.log('entrou update');
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      oldPassword: yup.string().min(6),
      password: yup
        .string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: yup
        .string()
        .when('password', (password, field) =>
          password ? field.required().oneOf([yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail' });
    }

    const user = await User.findById(req.userId);

    if (req.body.email !== user.email) {
      const userExists = await User.findOne({ email: req.body.email });
      // Utiliza o req.body todo pq a model mapeia os dados que irao ser usados
      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id, name, email } = await User.findByIdAndUpdate(
      { _id: req.userId },
      req.body
    );

    return res.json({
      _id,
      name,
      email,
    });
  }
}

export default new UserController();
