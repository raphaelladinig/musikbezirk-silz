import { createSignal } from "solid-js";

export default function Carousel(props: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = createSignal(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === props.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? props.images.length - 1 : prev - 1));
  };

  return (
    <div class="border-black border-2 p-3">
      <button
        class="top-1/2  bg-gray-200 p-2 rounded"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <img src={props.images[currentSlide()]} alt="carousel" class="flex justify-center items-center"/>
      <button
        class="top-1/2   bg-gray-200 p-2 rounded"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
}
