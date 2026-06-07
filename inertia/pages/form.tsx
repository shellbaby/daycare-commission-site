import { CheckIcon, UploadSimpleIcon, XIcon } from "@phosphor-icons/react"
import {
    Button,
    Checkbox,
    Field,
    Fieldset,
    FileUpload,
    Select,
    Surface,
    useFileUpload,
} from "~/components"

export default function Page() {
    const otherContacts = Select.createListCollection({
        items: [
            { label: "Telegram", value: "telegram" },
            { label: "Discord", value: "discord" },
        ],
    })

    const fileUploadContext = useFileUpload({
        maxFiles: 5,
        maxFileSize: 1024 * 1024 * 5,
        accept: ["image/jpeg", "image/png", "image/webp", "image/avif"],
    })

    return (
        <>
            <Surface>
                <h3 className="text-center">Commission Form</h3>
                <hr className="my-8" />
                <div className="grid grid-cols-8 gap-8">
                    <div className="col-span-3 flex flex-col gap-8">
                        <Field.Root className="col-span-3" required>
                            <Field.Label>What should I call you?</Field.Label>
                            <Field.Input type="text" />
                        </Field.Root>

                        <Field.Root className="col-span-3" required>
                            <Field.Label>
                                What is your Paypal email?
                            </Field.Label>
                            <Field.Input type="email" />
                        </Field.Root>

                        <Fieldset.Root className="col-span-3">
                            <Fieldset.Legend>
                                How should I contact you?
                            </Fieldset.Legend>
                            <div className="grid grid-cols-5 gap-x-4 gap-y-3">
                                <Field.Root className="col-span-2">
                                    <Select.Shorthand
                                        collection={otherContacts}
                                        placeholder="Contact"
                                    />
                                </Field.Root>
                                <Field.Root className="col-span-3">
                                    <Field.Input />
                                </Field.Root>

                                <Field.Root className="col-span-2">
                                    <Select.Shorthand
                                        collection={otherContacts}
                                        placeholder="Contact"
                                    />
                                </Field.Root>
                                <Field.Root className="col-span-3">
                                    <Field.Input />
                                </Field.Root>
                            </div>
                        </Fieldset.Root>
                    </div>

                    <div className="col-span-4 col-start-5 flex flex-col gap-8">
                        <Field.Root required>
                            <FileUpload.RootProvider value={fileUploadContext}>
                                <FileUpload.Label>
                                    Reference Sheet
                                    <Field.RequiredIndicator>
                                        *
                                    </Field.RequiredIndicator>
                                </FileUpload.Label>

                                <FileUpload.Dropzone>
                                    <div className="flex flex-col items-center gap-2 select-none">
                                        <span>
                                            <UploadSimpleIcon size={24} />
                                        </span>
                                        <span>Drag and drop files here</span>
                                        <span className="text-black-subtle text-sm">
                                            .png, .jpg, .webp, .avif up to 5MB
                                        </span>
                                    </div>
                                </FileUpload.Dropzone>

                                <FileUpload.ItemGroup asChild>
                                    <FileUpload.Context>
                                        {({ acceptedFiles }) => (
                                            <>
                                                {acceptedFiles.length > 0 && (
                                                    <ul className="mt-4 flex gap-4">
                                                        {acceptedFiles.map(
                                                            (file) => (
                                                                <FileUpload.Item
                                                                    key={
                                                                        file.name
                                                                    }
                                                                    file={file}
                                                                    className="relative block! h-24 w-24 border-0! p-0!"
                                                                >
                                                                    <FileUpload.ItemPreview type="image/*">
                                                                        <FileUpload.ItemPreviewImage className="rounded-default h-24! w-24! object-cover!" />
                                                                    </FileUpload.ItemPreview>
                                                                    <FileUpload.ItemDeleteTrigger className="bg-error absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] rounded-full p-1 text-white">
                                                                        <XIcon />
                                                                    </FileUpload.ItemDeleteTrigger>
                                                                </FileUpload.Item>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </>
                                        )}
                                    </FileUpload.Context>
                                </FileUpload.ItemGroup>

                                <FileUpload.ClearTrigger asChild>
                                    <Button.Root
                                        color="var(--color-error)"
                                        className="mt-4"
                                    >
                                        Clear all files
                                    </Button.Root>
                                </FileUpload.ClearTrigger>
                                <FileUpload.HiddenInput />
                            </FileUpload.RootProvider>
                        </Field.Root>

                        <Field.Root required>
                            <Field.Label>Commission Idea</Field.Label>
                            <Field.Textarea autoresize />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Additional Notes</Field.Label>
                            <Field.Textarea autoresize />
                        </Field.Root>
                    </div>
                </div>

                <hr className="my-8" />

                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-3 flex flex-col gap-8">
                        <Field.Root required>
                            <Checkbox.Root>
                                <Checkbox.Control>
                                    <Checkbox.Indicator>
                                        <CheckIcon />
                                    </Checkbox.Indicator>
                                </Checkbox.Control>
                                <Checkbox.Label>
                                    I have read and agreed to the Terms of
                                    Service{" "}
                                    <Field.RequiredIndicator>
                                        *
                                    </Field.RequiredIndicator>
                                </Checkbox.Label>
                                <Checkbox.HiddenInput />
                            </Checkbox.Root>
                        </Field.Root>

                        <Field.Root required>
                            <Checkbox.Root>
                                <Checkbox.Control>
                                    <Checkbox.Indicator>
                                        <CheckIcon />
                                    </Checkbox.Indicator>
                                </Checkbox.Control>
                                <Checkbox.Label>
                                    I agree that this form is not a way to
                                    reserve commission slot, and the artist has
                                    all rights to accept or decline it at their
                                    discretion{" "}
                                    <Field.RequiredIndicator>
                                        *
                                    </Field.RequiredIndicator>
                                </Checkbox.Label>
                                <Checkbox.HiddenInput />
                            </Checkbox.Root>
                        </Field.Root>
                    </div>
                </div>
                <Button.Root className="mt-8">Submit</Button.Root>
            </Surface>
        </>
    )
}
