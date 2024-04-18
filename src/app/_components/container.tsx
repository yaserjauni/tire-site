type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto p-5 justify-center flex">{children}</div>;
};

export default Container;
