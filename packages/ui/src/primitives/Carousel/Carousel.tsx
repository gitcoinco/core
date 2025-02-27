"use client";

import * as React from "react";

import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { Button } from "@/primitives/Button/Button";

export const carouselVariants = tv({
  slots: {
    icon: "size-12 text-black",
  },
  variants: {
    size: {
      sm: {
        icon: "size-8",
      },
      md: {
        icon: "size-10",
      },
      lg: {
        icon: "size-12",
      },
      xl: {
        icon: "size-14",
      },
    },
  },
});

export const CarouselIcons = {
  default: {
    left: ArrowCircleLeftIcon,
    right: ArrowCircleRightIcon,
  },
  simple: {
    left: ArrowLeft,
    right: ArrowRight,
  },
} as const;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

interface CarouselContextProps extends CarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ref,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
};
Carousel.displayName = "Carousel";

interface DivWithRefProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

const CarouselContent = ({ className, ...props }: DivWithRefProps) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
};
CarouselContent.displayName = "CarouselContent";

const CarouselItem = ({ className, ...props }: DivWithRefProps) => {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
};
CarouselItem.displayName = "CarouselItem";

export interface NavigateButtonProps extends React.ComponentProps<typeof Button> {
  carouselIconType?: keyof typeof CarouselIcons;
  size?: VariantProps<typeof carouselVariants>["size"];
  ref?: React.Ref<HTMLButtonElement>;
}

const CarouselPrevious = ({
  className,
  size = "lg",
  carouselIconType = "default",
  ...props
}: NavigateButtonProps) => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  const { icon } = carouselVariants({ size });
  const Icon = CarouselIcons[carouselIconType].left;

  return (
    <Button
      className={cn("size-12 bg-transparent", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      icon={<Icon className={cn(icon(), !canScrollPrev && "text-grey-500")} />}
      {...props}
    />
  );
};
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = ({
  className,
  size = "lg",
  carouselIconType = "default",
  ...props
}: NavigateButtonProps) => {
  const { scrollNext, canScrollNext } = useCarousel();
  const { icon } = carouselVariants({ size });
  const Icon = CarouselIcons[carouselIconType].right;

  return (
    <Button
      className={cn("size-12 bg-transparent", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      icon={<Icon className={cn(icon(), !canScrollNext && "text-grey-500")} />}
      {...props}
    />
  );
};
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
