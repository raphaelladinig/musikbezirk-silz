import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Template2(props: {
  title: string;
  content: string;
  images: string[];
}) {
  return (
    <div className="m-4 p-2 bg-gray-200">
      <h1 className="text-xl text-red-700 underline">{props.title}</h1>
      <p>{props.content}</p>
      <div className="flex justify-center">
        <Carousel className="w-3/4">
          <CarouselContent>
            {props.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="flex items-center justify-center p-1">
                  <img src={image} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
