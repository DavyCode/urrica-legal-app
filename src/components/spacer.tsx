interface SpacerProps {
  width?: number;
  height?: number;
}

const Spacer: React.FC<SpacerProps> = ({ width = 0, height = 0 }) => {
  return <div style={{ width: `${width}px`, height: `${height}px` }} />;
};

export default Spacer;
