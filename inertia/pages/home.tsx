import { Link } from "@adonisjs/inertia/react"
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ButterflyIcon,
    IconContext,
    TwitchLogoIcon,
} from "@phosphor-icons/react"
import { Button, Carousel, ImageSlide, Surface } from "~/components"

export default function Home() {
    const showcaseImgs: ImageSlide[] = [
        {
            src: "https://daycare-cdn.qilin.cafe/static/images/home/showcase-myko.webp",
            alt: "Myko, my Qilin/Pixiu OC",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/home/showcase-shellby.webp",
            alt: "Shellby, my otter OC",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/home/showcase-berry.webp",
            alt: "Berry, my bunny dragon OC",
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 flex flex-col gap-8">
                <Surface>
                    <h4 className="mb-4">About Me</h4>
                    <p className="mb-4">
                        Hey there! My name is Myko, welcome to my little
                        website.
                    </p>

                    <p>
                        I&#39;m a pink little Qilin/Pixiu who draws smol and
                        fluffy art. You may also know me as Shellby the brown
                        otter, or Berry the blue bunny dragon. Feel free to
                        stick around and have fun!
                    </p>
                </Surface>

                <Surface>
                    <h4 className="mb-4">Commission</h4>
                    <h6 className="mb-4">Commission is currently:</h6>
                    <p>What I&#39;m currently providing:</p>
                    <ul className="mb-4 list-inside list-[square] [&>li]:mt-2">
                        <li>Simple Drawing</li>
                    </ul>
                    <p className="mb-4 font-bold italic">
                        For more information, please check out the form and the
                        ToS
                    </p>
                    <div className="flex gap-4">
                        <Button.Root asChild>
                            <Link route="static.form">Commission Form</Link>
                        </Button.Root>
                        <Button.Root asChild>
                            <Link route="static.tos">Terms of Service</Link>
                        </Button.Root>
                    </div>
                </Surface>
            </div>

            <div className="flex flex-col gap-8">
                <Surface>
                    <Carousel.Root
                        slideCount={showcaseImgs.length}
                        spacing="calc(var(--spacing) * 12)"
                        data-blur
                    >
                        <Carousel.ItemGroup>
                            {showcaseImgs.map((img, index) => (
                                <Carousel.Item key={index} index={index}>
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        width={img.width ?? 4096}
                                        height={img.height ?? 4096}
                                    />
                                    <span className="absolute bottom-4 left-[50%] translate-x-[-50%] bg-white px-1 text-sm whitespace-nowrap select-none">
                                        {img.alt}
                                    </span>
                                </Carousel.Item>
                            ))}
                        </Carousel.ItemGroup>

                        <Carousel.Control>
                            <IconContext
                                value={{
                                    weight: "bold",
                                    size: 16,
                                }}
                            >
                                <Carousel.PrevTrigger>
                                    <ArrowLeftIcon />
                                </Carousel.PrevTrigger>

                                <Carousel.IndicatorGroup>
                                    {showcaseImgs.map((_, index) => (
                                        <Carousel.Indicator
                                            key={index}
                                            index={index}
                                        />
                                    ))}
                                </Carousel.IndicatorGroup>

                                <Carousel.NextTrigger>
                                    <ArrowRightIcon />
                                </Carousel.NextTrigger>
                            </IconContext>
                        </Carousel.Control>
                    </Carousel.Root>
                </Surface>

                <Surface>
                    <h6 className="mb-4">Find me here!</h6>
                    <div className="grid grid-cols-[auto_1fr] items-end gap-x-1 gap-y-2 [&>a]:underline [&>a]:hover:font-medium">
                        <span className="text-bluesky font-bold">
                            <ButterflyIcon weight="fill" size={24} />
                        </span>
                        <a
                            className="text-bluesky"
                            href="https://bsky.app/profile/poofy-eggnog.bsky.social"
                        >
                            @poofy-eggnog.bsky.social
                        </a>

                        <span className="text-twitch font-bold">
                            <TwitchLogoIcon weight="fill" size={24} />
                        </span>
                        <a
                            className="text-twitch"
                            href="https://twitch.tv/cookiecollie"
                        >
                            @cookiecollie
                        </a>
                    </div>
                </Surface>
            </div>
        </div>
    )
}
