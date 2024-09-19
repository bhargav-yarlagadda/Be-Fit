interface HorizontalScrollbarProps {
    data: string[];
  }
  
  const HorizontalScrollbar: React.FC<HorizontalScrollbarProps> = ({ data }) => {
    return (
      <div className="flex overflow-x-scroll">
        {data.map((item, index) => (
          <div key={index} className="p-2">
            {item}
          </div>
        ))}
      </div>
    );
  };
  
  export default HorizontalScrollbar;
   