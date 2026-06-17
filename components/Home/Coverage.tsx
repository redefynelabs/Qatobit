import { coverageData } from '@/constants/CoverageData';
import Marquee from './Marquee';

const Coverage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <h2 className="text-xl">
            Researched coverage across  100+ digital assets.  Crypto, Tokenized Stocks, RWAs, and emerging digital assets.
          </h2>

         
        </div>

        <Marquee items={coverageData} speed={20} />
      </div>
    </section>
  );
};

export default Coverage;