export default async function productDetails({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;
    return (
        <div>Details of product: {productId}</div>
    )
}