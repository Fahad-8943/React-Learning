import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router";
import Header from "../components/Header";

function PageNotFound() {
  return (
    <>
      <Header />

      <main className="bg-body-tertiary min-vh-100 d-flex align-items-center py-5">
        <Container className="text-center">
          <p className="display-1 fw-bold text-success mb-0">404</p>
          <h1 className="h2 fw-bold mt-3">Page not found</h1>
          <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "420px" }}>
            The page you are looking for does not exist or may have moved.
          </p>
          <Button as={Link} to="/" variant="success" className="px-4 py-2">
            Back to home
          </Button>
        </Container>
      </main>
    </>
  );
}

export default PageNotFound;
