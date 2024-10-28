import AnimateToTop from "../wrappers/animation/AnimateToTop";

type TCoreComponent = {
  imgSrc: string;
  imgTitle: string;
  imgCaption: string;
};
const Our_Cores_Component: React.FC<TCoreComponent> = ({
  imgSrc,
  imgTitle,
  imgCaption,
}) => {
  return (
    <>
      <div>
        <AnimateToTop>
          <div>
            <figure>
              <img
                src={imgSrc}
                alt="patient centered icon"
                className="w-[150px] mx-auto"
              />
              <figcaption className="text-center font-bold text-lg">
                {imgTitle}
              </figcaption>
            </figure>

            <p className="text-center">{imgCaption}</p>
          </div>
        </AnimateToTop>
      </div>
    </>
  );
};

export default Our_Cores_Component;
