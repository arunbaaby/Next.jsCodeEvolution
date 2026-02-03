import { notFound } from "next/navigation";

export default async function ProductReviews ({params}:{
    params: Promise <{productId: string, reviewId: string}>
}){
    const {productId, reviewId} = await params;

    if(parseInt(reviewId)>1000){
        notFound();
    }
    
    return (
        <div>Product: {productId} and Review : {reviewId}</div>
    )
}