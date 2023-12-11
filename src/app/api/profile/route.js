import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from '@/models/User';
import { UserInfo } from '@/models/UserInfo';

export const PUT = async req => {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await req.json();
  const { name, image, ...otherUserInfo } = data;

  const session = await getServerSession(authOptions);
  const email = session.user.email;

  await User.updateOne({ email }, { name, image });

  await UserInfo.findOneAndUpdate({ email }, otherUserInfo, { upsert: true });

  return Response.json(true);
};

export const GET = async () => {
  await mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  if (!email) {
    return Response.json({});
  }

  const user = await User.findOne({ email }).lean();
  const userInfo = await UserInfo.findOne({ email }).lean();

  return Response.json({ ...user, ...userInfo });
};
