import '../../styles/SkipNav.css'
export const SkipNavLink = ({ id, children = 'Skip to content', ...props }) => {
    return (
      <a {...props} href={`#${id}`} className="skip-nav-link">
        {children}
      </a>
    );
  };
  