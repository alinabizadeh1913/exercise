const Section = ({
  children,
  container,
  space,
}: {
  children?: React.ReactNode;
  container?: boolean;
  space?: "small" | "medium" | "large";
}) => {
  return (
    <section
      className={`${
        space == "small"
          ? "mt-10"
          : space == "medium"
          ? "mt-14"
          : space == "large"
          ? "mt-20"
          : "mt-0"
      }`}
    >
      {container && <div className="container mx-auto">{children}</div>}
      {!container && children}
    </section>
  );
};

export default Section;
