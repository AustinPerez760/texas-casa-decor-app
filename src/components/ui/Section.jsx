'use client';

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  fullWidth = false,
  paddingY = 'py-16',
  id
}) => {
  // Define background styles
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-amber-50',
    dark: 'bg-amber-900 text-white',
    transparent: 'bg-transparent',
  };

  return (
    <section 
      id={id}
      className={`${backgroundStyles[background]} ${paddingY} ${className}`}
    >
      <div className={`${fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
