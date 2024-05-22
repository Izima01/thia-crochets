// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { productArray } from '../data';

export async function GET(request: Request, { params }: { params: { id: string} }) {
  try {
    const id = params.id;
  
    const product = productArray.find(el => el.id == id);
    if (product) {
      return Response.json({ success: true, product });
    } else {
      return Response.json({ success: false, error: 'Product Not Found' });
    }
  } catch (error) {
    return Response.json({ success: false, error });
  }
}