import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type template2 = {
  id: number;
  heading: string;
  body: string;
  image: string[];
};

export function Template2(props: template2) {
  return (
    <div className="m-4 p-2 bg-gray-200">
      <h1 className="text-xl text-red-700 underline">{props.heading}</h1>
      <p>{props.body}</p>
      <div className="flex justify-center">
        <Carousel className="w-3/4">
          <CarouselContent>
            {props.image.map((image, index) => (
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
