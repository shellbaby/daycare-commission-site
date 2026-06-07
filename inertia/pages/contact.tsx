import { Button, Field, Surface } from "~/components"

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-8">
                <div>
                    <Surface>
                        <h5 className="mb-8 text-center">
                            Contact me through here
                        </h5>
                        <div className="flex flex-col gap-4">
                            <Button.Root color="var(--color-bluesky)" asChild>
                                <a href="https://bsky.app/profile/poofy-eggnog.bsky.social">
                                    Bluesky
                                </a>
                            </Button.Root>
                            <Button.Root color="var(--color-telegram)" asChild>
                                <a href="https://t.me/littlelambyderg">
                                    Telegram
                                </a>
                            </Button.Root>
                            <Button.Root color="var(--color-discord)" asChild>
                                <a href="https://discord.com/users/845590906543407104">
                                    Discord
                                </a>
                            </Button.Root>
                        </div>
                    </Surface>
                </div>

                <Surface>
                    <h5 className="mb-8 text-center">
                        ...or through this form
                    </h5>
                    <form className="flex flex-col gap-8">
                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Field.Input />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email</Field.Label>
                            <Field.Input type="email" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Subject</Field.Label>
                            <Field.Input />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Message</Field.Label>
                            <Field.Textarea autoresize />
                        </Field.Root>

                        <Button.Root>Submit</Button.Root>
                    </form>
                </Surface>
            </div>
        </>
    )
}
