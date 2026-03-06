export default function LeftSection({
  imageURL,
  productName,
  productDescription,
}) {
  return (
    <div className="container product-section">
      <div className="row align-items-center">
        <div className="col-md-6 col-12 p-4">
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-md-6 col-12 p-4">
          <h2>{productName}</h2>
          <p>{productDescription}</p>

      
        </div>
      </div>
    </div>
  );
}
