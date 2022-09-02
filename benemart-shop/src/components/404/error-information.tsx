import Image from 'next/image';


const ErrorInformation: React.FC = () => {
  const backgroundThumbnail = '/assets/images/404-bg.png';
  const errorThumbnail = '/assets/images/404.png';
  return (
    <div
      className="text-center px-12 py-16 sm:py-20 lg:py-24 xl:py-32 flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundThumbnail})`,
      }}
    >
      <div className="max-w-md xl:max-w-lg">
        <Image
          src={errorThumbnail}
          alt={'error-heading'}
          width={150}
          height={150}
        />

        <h2 className="text-6xl md:text-7xl 2xl:text-8xl font-bold text-skin-base pt-5 xl:pt-9">
          {'404'}
        </h2>
        <p className="text-15px md:text-base 2xl:text-[18px] leading-7 md:leading-8 pt-4 font-medium">
          {"We're sorry! This page is currently unavailable. We request you to please try again later."}
        </p>
      </div>
    </div>
  );
};

export default ErrorInformation;
