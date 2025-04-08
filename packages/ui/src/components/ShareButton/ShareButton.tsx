import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

import { Modal } from "@/primitives/Modal/Modal";

import { Button } from "../../primitives/Button/Button";
import { Icon, IconType } from "../../primitives/Icon/Icon";

export const ShareButton = (props: { shareText: string }) => {
  const embedURL = "";

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    props.shareText,
  )}&url=${embedURL}`;

  const farcasterShareUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(
    props.shareText,
  )}&embeds[]=${embedURL}`;

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button icon={<Icon type={IconType.LINK} />} value="Share" />
        </DialogTrigger>
        <Modal className="w-[90vw] max-w-[500px] sm:w-[500px]">
          <div className="p-4 text-center">
            <p className="text-center text-xl font-semibold leading-6 text-black">
              Share this round's stats on social media
            </p>
            <div className="flex flex-col gap-4 pt-6">
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  onClick={() => window.open(twitterShareUrl, "_blank")}
                  icon={<Icon type={IconType.TWITTER} />}
                  variant="grey"
                  value="Share on X"
                  className="w-full sm:w-auto"
                />
                <Button
                  onClick={() => window.open(farcasterShareUrl, "_blank")}
                  icon={<Icon type={IconType.WARPCAST} />}
                  variant="grey"
                  value="Share on Warpcast"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </Modal>
      </Dialog>
    </>
  );
};
