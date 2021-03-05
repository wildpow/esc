import { Link } from "gatsby";

export default function MattressStuf({ mattresses, learnMore }) {
  return (
    <>
      <header className="top second">
        <Link to={`/brands/${mattresses[0].brand.urlName}`} className="first">
          {mattresses[0].brand.displayName}
        </Link>
        {learnMore && (
          <>
            <div className="divider" />
            <Link to={`/brands/${mattresses[0].brand.urlName}/landing`}>
              Brand Info
            </Link>
          </>
        )}
      </header>
      <ul>
        {mattresses.map((matt) => (
          <li key={matt.id}>
            <Link to={`/brands/${matt.brand.urlName}/${matt.slug}`}>
              {`${matt.subline.name} ${matt.nameWithout}`}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
