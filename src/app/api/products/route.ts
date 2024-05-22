// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { productArray } from './data';

export async function GET(request: Request) {
  return Response.json({ success: true, products: productArray });
}