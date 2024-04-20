import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type Props = {
  images: string[],
  setImages: Dispatch<SetStateAction<string[]>>
};

const SelectedImages = ({ images, setImages }: Props) => {
  const maxImageDisplayed = 5;
  return (
    <>
      <div className="absolute -top-10 flex flex-row gap-2">
        {images.map((img, idx) => {
          if (idx < maxImageDisplayed) {
            return (
              <Image
                className="h-9 w-auto shadow-md hover:h-auto max-w-96 hover:z-10 hover:shadow-2xl"
                width={100}
                height={100}
                key={idx}
                src={img}
                alt={""}
              />
            );
          }
        })}
        <span className="text-xs w-14 text-left">
          {images.length > maxImageDisplayed
            ? `${images.length - maxImageDisplayed + " more"}`
            : ""}
        </span>
        {images.length > 0 && (
          <X
            className="absolute -left-8 cursor-pointer rounded-full h-6 w-6 p-1 shadow-md"
            onClick={() => setImages([])}
          />
        )}
      </div>
    </>
  );
};

export default SelectedImages;
