export default async function ProductReviews ({params}:{
    params: Promise <{productId: string, reviewId: string}>
}){
    const {productId, reviewId} = await params;
    return (
        <div>Product: {productId} and Review : {reviewId}</div>
    )
}