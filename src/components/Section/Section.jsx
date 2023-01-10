import PropTypes from "prop-types";
import Container from "../Container/Container";

const Section = ({ title, children }) => {
  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
