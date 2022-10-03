import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
