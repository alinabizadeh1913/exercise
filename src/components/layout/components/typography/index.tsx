const Typography = ({
  children,
  tag,
  color,
  className,
}: {
  children?: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: string;
  className?: string;
}) => {
  return (
    <>
      {tag == "h1" && (
        <h1 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h1>
      )}
      {tag == "h2" && (
        <h2 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h2>
      )}
      {tag == "h3" && (
        <h3 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h3>
      )}
      {tag == "h4" && (
        <h4 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h4>
      )}
      {tag == "h5" && (
        <h5 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h5>
      )}
      {tag == "h6" && (
        <h6 className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </h6>
      )}
      {tag == "p" && (
        <p className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </p>
      )}
      {!tag && (
        <p className={className} style={{ color: !color ? "white" : color }}>
          {children}
        </p>
      )}
    </>
  );
};

export default Typography;
