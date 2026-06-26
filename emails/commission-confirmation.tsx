import * as React from "react"
import {
    Body,
    Font,
    Head,
    Heading,
    Hr,
    Html,
    pixelBasedPreset,
    Preview,
    Section,
    Tailwind,
} from "react-email"

type EmailProps = {
    commissionNumber: string
    clientName: string
}
export default function CommissionConfirmation({
    commissionNumber,
    clientName,
}: EmailProps) {
    return (
        <Html>
            <Preview>Your commission info has been recorded!</Preview>
            <Head>
                <Font
                    fontFamily="Montserrat"
                    fallbackFontFamily={["sans-serif"]}
                    webFont={{
                        url: "https://fonts.gstatic.com/s/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTn89ddpQ.woff2",
                        format: "woff2",
                    }}
                    fontWeight={"100 900"}
                />
            </Head>

            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            fontSize: {
                                h1: "47.776px",
                                h2: "39.808px",
                                h3: "33.184px",
                                h4: "27.648px",
                                h5: "23.04px",
                                h6: "19.2px",
                            },
                        },
                    },
                }}
            >
                <Body>
                    <Section className="max-w-xl text-center">
                        <Heading as="h5" className="text-h5">
                            Commission Confirmation
                        </Heading>

                        <Hr className="border-t-2 border-dashed" />

                        <p className="mt-12">
                            <span className="font-bold">
                                Commission Number:{" "}
                            </span>
                            {commissionNumber ?? "########"}
                        </p>

                        <p>Hey there, {clientName ?? "NAME"}!</p>

                        <p>
                            Thank you for your interest. Should your commission
                            be accepted, I will contact you shortly.
                        </p>

                        <p className="mt-16 text-sm font-bold italic">
                            Please note that this is merely a confirmation that
                            your commission info has been recorded, not an
                            indication that your commission is accepted.
                        </p>

                        <p className="my-16 text-xs">
                            Copyright © 2026 shellbaby. All rights reserved.
                        </p>
                    </Section>
                </Body>
            </Tailwind>
        </Html>
    )
}
