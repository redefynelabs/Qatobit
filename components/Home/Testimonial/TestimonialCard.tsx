import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
  image: string | StaticImageData;
  name: string;
  company: string;
  comment: string;
}

const TestimonialCard = ({
  image,
  name,
  company,
  comment,
}: TestimonialProps) => {
  return (
    <div className="w-full rounded-3xl border border-white/5 bg-[#211E1D] p-6 font-inter">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-medium text-white tracking-tight">
            {name}
          </h3>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      <p className="mt-5 text-gray-400 leading-7 tracking-tight">
        "{comment}"
      </p>
    </div>
  );
};

export default TestimonialCard;