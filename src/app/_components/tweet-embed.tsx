import { Tweet } from "react-tweet";

type Props = {
    id: string;
    caption?: string;
};

export function TweetEmbed({ id, caption }: Props) {
    return (
        <figure className="my-[30px] flex flex-col items-center">
            <Tweet id={id} />
            {caption && (
                <figcaption className="text-[0.85em] opacity-60 mt-[8px] text-center max-w-[400px]">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
