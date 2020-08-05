import { Messages } from '../models/models';

export const messagesPage = async (req, res) => {
  try {
    const messages = await Messages.find();
    res.status(200).json({ messages });
  } catch (e) {
    res.status(200).json({ error: e.message });
    // next(e);
  }
};

export const addMessagePage = async (req, res) => {
  const { name, message } = req.body;
  try {
    const m = await Messages({ name, message }).save();
    res.status(200).json({ success: true, message: m });
  } catch (e) {
    res.status(200).json({ error: e.message });
  }
};
