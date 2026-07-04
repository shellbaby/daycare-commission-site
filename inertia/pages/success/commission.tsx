import { Data } from "@generated/data"
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    IconContext,
} from "@phosphor-icons/react"
import { Carousel, Field, Surface } from "~/components"
import { InertiaProps } from "~/types"

type PageProps = InertiaProps<{ commission: Data.Commission }>
export default function Page({ commission }: PageProps) {
    const refSheetsUrls: string[] = JSON.parse(commission.refSheetUrls)

    return (
        <>
            <div className="grid grid-cols-8 gap-x-8">
                <div className="rounded-default col-span-3 bg-amber-300">
                    image
                </div>

                <Surface className="col-span-5">
                    <div className="col-span-5">
                        <h3 className="mb-4">Thank you for ordering!</h3>
                        <h6 className="mb-16">
                            Your commission form is being processed. Should it
                            be accepted, I will contact you shortly!
                        </h6>

                        <div>
                            <p className="text-lg">
                                <span className="font-bold">
                                    Commission number:{" "}
                                </span>
                                {commission.commissionNumber}
                            </p>

                            <hr className="my-8 border-t-2 border-dashed" />

                            <p className="mb-2 text-lg font-bold">
                                Reference sheet
                            </p>

                            <Carousel.Root
                                slideCount={refSheetsUrls.length}
                                loop
                                spacing="calc(var(--spacing) * 12)"
                                slidesPerPage={2}
                                className="mb-8"
                            >
                                <Carousel.ItemGroup>
                                    {refSheetsUrls.map((url, index) => (
                                        <Carousel.Item
                                            index={index}
                                            key={index}
                                            snapAlign="center"
                                        >
                                            <div className="rounded-default border-black-muted border">
                                                <img src={url} />
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

                            <p className="mb-2 text-lg font-bold">
                                Commission Idea
                            </p>
                            <Field.Root className="mb-8">
                                <Field.Textarea
                                    value={commission.idea}
                                    disabled
                                />
                            </Field.Root>

                            <p className="mb-2 text-lg font-bold">
                                Additonal Notes
                            </p>
                            <Field.Root>
                                <Field.Textarea
                                    value={commission.notes ?? ""}
                                    placeholder={commission.notes ? "" : "N/A"}
                                    disabled
                                />
                            </Field.Root>
                        </div>
                    </div>
                </Surface>
            </div>
        </>
    )
}
