import { SSRComponent } from "@gitcoin/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/primitives/Carousel/Carousel";

const carouselSSR: SSRComponent<React.ComponentProps<typeof Carousel>> = {
  component: Carousel,
  cases: [
    {
      label: "Default",
      props: {
        className: "flex w-full flex-col items-center",
        children: (
          <div className="flex w-full flex-col items-center gap-6">
            <CarouselContent>
              <CarouselItem className="flex items-center justify-center">
                <div className="text-lg text-grey-500">First</div>
              </CarouselItem>
              <CarouselItem className="flex items-center justify-center">
                <div className="text-lg text-grey-500">Second</div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex gap-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        ),
      },
    },
  ],
};

export default carouselSSR;
