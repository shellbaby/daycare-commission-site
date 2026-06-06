import { Link } from "@adonisjs/inertia/react"
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    IconContext,
} from "@phosphor-icons/react"
import { Button, Carousel, ImageSlide, Surface } from "~/components"

export default function Page() {
    const exampleImgs: ImageSlide[] = [
        {
            src: "https://daycare-cdn.qilin.cafe/static/images/prices/example-4.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/prices/example-2.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/prices/example-5.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/prices/example-0.webp",
            alt: "",
        },

        {
            src: "https://daycare-cdn.qilin.cafe/static/images/prices/example-6.webp",
            alt: "",
            width: 5340,
        },
    ]

    return (
        <>
            <Surface>
                <h3 className="text-center">Commission</h3>
                <hr className="my-8" />
                <div className="mb-8 grid grid-cols-3">
                    <div className="col-span-1">
                        <h4 className="mb-2">Simple Drawing</h4>
                        <h5 className="mb-4">Price: $30/character</h5>

                        <ul className="list-inside list-[square]">
                            <li>Full body drawing</li>
                            <li>Simple background</li>
                            <li>Simple shading and highlighting</li>
                            <li>Extra character: $30</li>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <Carousel.Root
                            slideCount={exampleImgs.length}
                            loop
                            spacing="calc(var(--spacing) * 12)"
                            autoSize
                            data-blur
                        >
                            <Carousel.ItemGroup>
                                {exampleImgs.map((img, index) => (
                                    <Carousel.Item
                                        index={index}
                                        key={index}
                                        snapAlign="center"
                                    >
                                        <div
                                            style={{
                                                width: (img.width ?? 4096) / 16,
                                                height:
                                                    (img.height ?? 4096) / 16,
                                            }}
                                            className="rounded-default border-black-muted border"
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                width={img.width ?? 4096}
                                                height={img.height ?? 4096}
                                            />
                                        </div>
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

                                    <Carousel.Context>
                                        {(api) => (
                                            <Carousel.IndicatorGroup>
                                                {api.pageSnapPoints.map(
                                                    (_, index) => (
                                                        <Carousel.Indicator
                                                            key={index}
                                                            index={index}
                                                        />
                                                    )
                                                )}
                                            </Carousel.IndicatorGroup>
                                        )}
                                    </Carousel.Context>

                                    <Carousel.NextTrigger>
                                        <ArrowRightIcon />
                                    </Carousel.NextTrigger>
                                </IconContext>
                            </Carousel.Control>
                        </Carousel.Root>
                    </div>
                </div>

                <div>
                    <h5 className="mb-8 text-center">Ready to commission?</h5>
                    <div className="flex gap-4">
                        <Button.Root asChild>
                            <Link route="static.form">I want this!</Link>
                        </Button.Root>
                        <Button.Root asChild>
                            <Link route="static.tos">Terms of Service</Link>
                        </Button.Root>
                    </div>
                </div>
            </Surface>
        </>
    )
}
