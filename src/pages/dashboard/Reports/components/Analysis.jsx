import AnalysisHandleData from "./AnalysisHandleData";
import analysis from "../data/analysis";

function Analysis() {
   
  return (
    <div>
      <AnalysisHandleData analysis={analysis} />
    </div>
  );
}

export default Analysis;
