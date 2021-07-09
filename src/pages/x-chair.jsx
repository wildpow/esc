import { Link } from "gatsby";

import Layout from "../components/Layout";

export default function Xchair() {
  return (
    <Layout>
      <div>
        <h2 style={{ textAlign: "center" }}>X-Chair</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/x-chair/x-1">
            <h2>X-1</h2>
          </Link>
          <Link to="/x-chair/x-2">
            <h2>X-2</h2>
          </Link>
          <Link to="/x-chair/x-3">
            <h2>X-3</h2>
          </Link>
          <Link to="/x-chair/x-4">
            <h2>X-4</h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
