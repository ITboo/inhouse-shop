import products from "../../shared/data/products.json";
import { Button } from "../../shared/ui/button/Button";

import ProductCard from "../../widgets/productCard";

const range = [
  {
    id: 1,
    title: "Dining",
    img: "./public/dining.jpg",
  },
  {
    id: 2,
    title: "Living",
    img: "./public/living.jpg",
  },
  {
    id: 3,
    title: "Bedroom",
    img: "./public/bedroom.jpg",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero flex justify-end items-center px-[58px]">
        <div className="w-[643px] bg-orange-100 px-[41px] py-[50px]">
          <span className="text-gray-950 font-semibold text-base tracking-wide">New arrival</span>
          <h1 className="text-[52px] font-bold leading-[65px] text-yellow-600">
            Discover Our <br />
            New Collection
          </h1>
          <p className="text-gray-950 font-semibold text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="w-1/3">
            <Button>Buy now</Button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center">Browse The Range</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center gap-[20px]">
          {range.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt={item.title} className="rounded-xl" />
              <h3 className="text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center">Our Products</h2>
        <div className="flex justify-between">
          {products.map((product, key) => (
            <ProductCard key={key} data={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
