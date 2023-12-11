import { Category } from '@/models/Category';
import mongoose from 'mongoose';

export const POST = async req => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name } = await req.json();
  const categoryDoc = await Category.create({ name });
  return Response.json({ categoryDoc });
};

export const PUT = async req => {
  await mongoose.connect(process.env.MONGO_URL);
  const { _id, name } = await req.json();
  await Category.updateOne({ _id }, { name });
  return Response.json(true);
};

export const GET = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  return Response.json(await Category.find());
};

export const DELETE = async req => {
  await mongoose.connect(process.env.MONGO_URL);
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  await Category.deleteOne({ _id });
  return Response.json(true);
};
