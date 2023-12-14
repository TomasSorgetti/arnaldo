import errorImage from "../../assets/images/404/404_not_found.webp"

const Error = () => {
  return (
    <div className="flex items-center justify-center">
      <img className="mt-24 mb-10 w-11/12 sm:w-9/12 lg:w-5/12 lg:mt-40 xl:w-4/12" src={errorImage} alt="error image presentation" />
    </div>
  );
}

export default Error