import PropTypes from 'prop-types';

const Heading = ({ text, headingType }) => {
  const HeadingTag = headingType || 'h1';

  return <HeadingTag>{text}</HeadingTag>;
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  headingType: PropTypes.string,
};

export default Heading;
