import { Music } from "lucide-react";

type Props = {
  item: {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    type: string;
  };
};

export default function CardItemContent({ item }: Props) {
  return (
    <div className="h-full cursor-pointer rounded-lg bg-input/30 p-4 transition duration-300 hover:bg-secondary">
      {item.image ? (
        <img
          alt={item.title}
          className={`aspect-square w-full object-cover ${
            item.type === "artists" ? "rounded-full" : "rounded-md"
          }`}
          height={160}
          src={item.image}
          width={160}
        />
      ) : (
        <div className="h-40 w-full">
          <Music className="h-full w-full rounded-md" />
        </div>
      )}
      <h3 className="mt-5 truncate font-bold">{item.title}</h3>
      {item.subtitle && (
        <h6 className="mt-1 truncate font-semibold text-muted-foreground text-xs">
          {item.subtitle}
        </h6>
      )}
    </div>
  );
}
