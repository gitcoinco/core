"use client";

import { ProgramCard, ProgramCardProps } from "@/features/program/components/ProgramCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/primitives/Carousel";
import { Dialog, DialogTitle } from "@/primitives/Dialog";
import { Icon, IconType } from "@/primitives/Icon";
import { Modal } from "@/primitives/Modal";

export interface ProgramPickerModalProps {
  programs: ProgramCardProps[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  footer?: React.ReactNode;
}

export const ProgramPickerModal = ({
  programs,
  isOpen,
  onOpenChange,
  footer,
}: ProgramPickerModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <Modal className="m-0 flex flex-col gap-0 p-0 sm:max-w-fit sm:rounded-3xl">
        <div className="flex w-full items-center justify-between rounded-t-3xl bg-grey-50 p-4">
          <DialogTitle className="text-[24px]/[24px] font-semibold">Select program</DialogTitle>
          <Icon
            className="size-5 cursor-pointer hover:text-grey-500"
            type={IconType.X}
            onClick={() => onOpenChange(false)}
          />
        </div>

        <Carousel className="flex w-full flex-col items-center gap-6 p-10">
          <div className="flex w-full items-center gap-6">
            <CarouselPrevious />
            <CarouselContent className="w-[640px]">
              {programs.length === 0 ? (
                <CarouselItem className="flex h-[400px] items-center justify-center">
                  <div className="text-lg text-grey-500">No programs</div>
                </CarouselItem>
              ) : (
                Array.from({ length: Math.ceil(programs.length / 4) }, (_, index) => {
                  const startIdx = index * 4;
                  return (
                    <CarouselItem key={index} className="flex justify-center">
                      <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        {programs.slice(startIdx, startIdx + 4).map((program) => (
                          <div key={`${program.chainId}-${program.id}`} className="z-20">
                            <ProgramCard {...program} />
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  );
                })
              )}
            </CarouselContent>
            <CarouselNext />
          </div>
          {footer}
        </Carousel>
      </Modal>
    </Dialog>
  );
};
