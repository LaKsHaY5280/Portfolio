import { Quote } from "lucide-react";

const Quotes = (props) => {
  return (
    <div className=" bg-dark_bg p-16 z-10 border-t-2 border-b-2 border-primary">
      <div className=" flex flex-1 justify-between items-center">
        <div className=" flex flex-1 justify-center gap-5">
          <span className=" scale-x-[1]  rotate-180 ">
            <Quote
              size={100}
              color="#8E05C2"
              strokeWidth={5}
              absoluteStrokeWidth
              className="animate-[quoteJump_1s_infinite]"
            />
          </span>
        </div>
        <p className=" font-bold text-slate-100 text-5xl text-center">{props.quote}</p>
        <div className=" flex flex-1 justify-center text-7xl gap-5 text-secondary">
          <span className=" scale-x-[1] bounce">
            <Quote
              size={100}
              color="#8E05C2"
              strokeWidth={5}
              absoluteStrokeWidth
              className="animate-[quoteJump_1s_infinite]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
