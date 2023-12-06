import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { User } from '@/models/User';

export const PUT = async req => {
  await mongoose.connect(process.env.MONGO_URL);

  const data = await req.json();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  await User.updateOne({ email }, data);

  return Response.json(true);
};

export const GET = async () => {
  await mongoose.connect(process.env.MONGO_URL);

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  return Response.json(await User.findOne({ email }));
};
