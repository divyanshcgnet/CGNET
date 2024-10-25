import { Children } from "@/types/generics";

interface IPage extends Children {
  className?: string;
}

const Page = ({ children, className }: IPage) => {
  return <div className={`px-8 py-8 mmd:px-16 ${className} pageHeight`}>{children}</div>;
};

export default Page;
