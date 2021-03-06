import { Link } from "gatsby";

export default function ProductStuff({ products, productUrl, productTitle }) {
  return (
    <>
      <header className="top second">
        <Link to={`/accessories/${productUrl}`} className="first">
          {productTitle}
        </Link>
      </header>
      <ul>
        {products.map((pro) => (
          <li key={pro.id}>
            <Link to={`/accessories/${pro.slug}`}>{pro.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
