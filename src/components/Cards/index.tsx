import clsx from "clsx";

interface IProps {
    width: number;
    height: number;
    additionalClassname?: any
}
const RenderCard:React.FC<IProps> = ({ width, height, additionalClassname }, children) => {
  return (
    <div
      className={clsx({ [additionalClassname]: additionalClassname })}
      style={{ width:`${width}px`, height:`${height}px` }}
    >
      {children}
    </div>
  );
}

export default RenderCard