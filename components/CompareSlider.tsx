import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  restored,
}: {
  original: string;
  restored: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="foto original" />}
      itemTwo={<ReactCompareSliderImage src={restored} alt="foto restaurada" />}
      portrait
      className="flex w-[475px] mt-5"
    />
  );
};
