export const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={`w-full md:max-w-3xl lg:max-w-5xl mx-auto ${className}`}
      {...props}>
      {children}
    </div>
  );
};
