interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className=" mx-auto max-w-[1200px]">{children}</div>;
};
export default Container;
