import { Form } from "@adonisjs/inertia/react"
import {
    CaretUpDownIcon,
    CheckIcon,
    UploadSimpleIcon,
    XIcon,
} from "@phosphor-icons/react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import {
    Button,
    Checkbox,
    Field,
    Fieldset,
    FileUpload,
    Portal,
    Select,
    Surface,
    useFileUpload,
} from "~/components"

interface Contact {
    type: "telegram" | "discord"
    handle: string
}

interface FormValues {
    name: string
    email: string
    contacts: Contact[]
    "ref_sheets[]": File[]
    idea: string
    notes: string
    tos_agreement: boolean
    no_reserve_agreement: boolean
}

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

    const {
        register,
        formState: { isValid },
        control,
    } = useForm<FormValues>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "contacts",
    })

    return (
        <>
            <Surface>
                <h3 className="text-center">Commission Form</h3>
                <hr className="my-8" />
                <Form route="api.commission.store" noValidate>
                    {({ errors, processing, clearErrors }) => (
                        <>
                            <div className="grid grid-cols-8 gap-8">
                                <div className="col-span-3 flex flex-col gap-8">
                                    <Field.Root
                                        className="col-span-3"
                                        required
                                        invalid={!!errors.name}
                                    >
                                        <Field.Label>
                                            What should I call you?
                                        </Field.Label>
                                        <Field.Input
                                            type="text"
                                            {...register("name", {
                                                required:
                                                    "Please fill out your name",
                                                onChange: () =>
                                                    clearErrors("name"),
                                            })}
                                        />
                                        <Field.ErrorText>
                                            {errors.name}
                                        </Field.ErrorText>
                                    </Field.Root>

                                    <Field.Root
                                        className="col-span-3"
                                        required
                                        invalid={!!errors.email}
                                    >
                                        <Field.Label>
                                            What is your Paypal email?
                                        </Field.Label>
                                        <Field.Input
                                            type="email"
                                            {...register("email", {
                                                required:
                                                    "Please fill out your email",
                                                onChange: () =>
                                                    clearErrors("email"),
                                            })}
                                        />
                                        <Field.ErrorText>
                                            {errors.email}
                                        </Field.ErrorText>
                                    </Field.Root>

                                    <Fieldset.Root className="col-span-3">
                                        <Fieldset.Legend className="mb-2!">
                                            How should I contact you?
                                        </Fieldset.Legend>
                                        <div>
                                            {fields.map((_, index) => (
                                                <div className="relative mb-4">
                                                    <div className="grid grid-cols-5 gap-x-4">
                                                        <Controller
                                                            control={control}
                                                            name={`contacts.${index}.type`}
                                                            render={({
                                                                field: {
                                                                    onChange,
                                                                    value,
                                                                    name,
                                                                    ref,
                                                                },
                                                            }) => (
                                                                <Select.Root
                                                                    value={[
                                                                        value,
                                                                    ]}
                                                                    onValueChange={(
                                                                        e
                                                                    ) =>
                                                                        onChange(
                                                                            e
                                                                                .value[0]
                                                                        )
                                                                    }
                                                                    collection={
                                                                        otherContacts
                                                                    }
                                                                    className="col-span-2"
                                                                    name={name}
                                                                >
                                                                    <Select.Control>
                                                                        <Select.Trigger
                                                                            ref={
                                                                                ref
                                                                            }
                                                                        >
                                                                            <Select.ValueText />
                                                                            <Select.Indicator>
                                                                                <CaretUpDownIcon />
                                                                            </Select.Indicator>
                                                                        </Select.Trigger>
                                                                    </Select.Control>
                                                                    <Portal>
                                                                        <Select.Positioner>
                                                                            <Select.Content>
                                                                                <Select.ItemGroup>
                                                                                    {otherContacts.items.map(
                                                                                        (
                                                                                            item
                                                                                        ) => (
                                                                                            <Select.Item
                                                                                                key={
                                                                                                    item.value
                                                                                                }
                                                                                                item={
                                                                                                    item
                                                                                                }
                                                                                            >
                                                                                                <Select.ItemText>
                                                                                                    {
                                                                                                        item.label
                                                                                                    }
                                                                                                </Select.ItemText>
                                                                                                <Select.ItemIndicator>
                                                                                                    <CheckIcon />
                                                                                                </Select.ItemIndicator>
                                                                                            </Select.Item>
                                                                                        )
                                                                                    )}
                                                                                </Select.ItemGroup>
                                                                            </Select.Content>
                                                                        </Select.Positioner>
                                                                    </Portal>
                                                                    <Select.HiddenSelect />
                                                                </Select.Root>
                                                            )}
                                                        />

                                                        <Field.Root
                                                            className="col-span-3"
                                                            invalid={
                                                                !!errors[
                                                                    `contacts.${index}.handle`
                                                                ]
                                                            }
                                                        >
                                                            <Field.Input
                                                                {...register(
                                                                    `contacts.${index}.handle` as const
                                                                )}
                                                            />
                                                            <Field.ErrorText>
                                                                {
                                                                    errors[
                                                                        `contacts.${index}.handle`
                                                                    ]
                                                                }
                                                            </Field.ErrorText>
                                                        </Field.Root>
                                                    </div>

                                                    <Button.Root
                                                        isIcon
                                                        variant="ghost"
                                                        color="var(--color-error)"
                                                        className="absolute top-0 left-[calc(100%+var(--spacing)*1)]"
                                                        type="button"
                                                        onClick={() =>
                                                            remove(index)
                                                        }
                                                    >
                                                        <XIcon
                                                            weight="bold"
                                                            size={20}
                                                        />
                                                    </Button.Root>
                                                </div>
                                            ))}

                                            <Button.Root
                                                onClick={() =>
                                                    append({
                                                        type: "telegram",
                                                        handle: "",
                                                    })
                                                }
                                                variant="outline"
                                                type="button"
                                            >
                                                Add Contact
                                            </Button.Root>
                                        </div>
                                    </Fieldset.Root>
                                </div>

                                <div className="col-span-4 col-start-5 flex flex-col gap-8">
                                    <Field.Root
                                        required
                                        invalid={!!errors["ref_sheets[]"]}
                                    >
                                        <FileUpload.RootProvider
                                            value={fileUploadContext}
                                        >
                                            <FileUpload.Label>
                                                Reference Sheet
                                                <Field.RequiredIndicator>
                                                    *
                                                </Field.RequiredIndicator>
                                            </FileUpload.Label>

                                            <FileUpload.Dropzone
                                                data-invalid={
                                                    !!errors["ref_sheets[]"]
                                                        ? ""
                                                        : null
                                                }
                                            >
                                                <div className="flex flex-col items-center gap-2 select-none">
                                                    <span>
                                                        <UploadSimpleIcon
                                                            size={24}
                                                        />
                                                    </span>
                                                    <span>
                                                        Drag and drop files here
                                                    </span>
                                                    <span className="text-black-subtle text-sm">
                                                        .png, .jpg, .webp, .avif
                                                        up to 5MB
                                                    </span>
                                                </div>
                                            </FileUpload.Dropzone>

                                            <Field.ErrorText>
                                                {errors["ref_sheets[]"]}
                                            </Field.ErrorText>

                                            <FileUpload.ItemGroup asChild>
                                                <FileUpload.Context>
                                                    {({ acceptedFiles }) => (
                                                        <>
                                                            {acceptedFiles.length >
                                                                0 && (
                                                                <ul className="mt-4 flex gap-4">
                                                                    {acceptedFiles.map(
                                                                        (
                                                                            file
                                                                        ) => (
                                                                            <FileUpload.Item
                                                                                key={
                                                                                    file.name
                                                                                }
                                                                                file={
                                                                                    file
                                                                                }
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
                                            <FileUpload.HiddenInput
                                                {...register("ref_sheets[]", {
                                                    required:
                                                        "Please upload at least one reference sheet",
                                                })}
                                            />
                                        </FileUpload.RootProvider>
                                    </Field.Root>

                                    <Field.Root
                                        required
                                        invalid={!!errors.idea}
                                    >
                                        <Field.Label>
                                            Commission Idea
                                        </Field.Label>
                                        <Field.Textarea
                                            autoresize
                                            {...register("idea", {
                                                required:
                                                    "Please provide the commission idea",
                                            })}
                                        />
                                        <Field.ErrorText>
                                            {errors.idea}
                                        </Field.ErrorText>
                                    </Field.Root>

                                    <Field.Root invalid={!!errors.notes}>
                                        <Field.Label>
                                            Additional Notes
                                        </Field.Label>
                                        <Field.Textarea
                                            autoresize
                                            {...register("notes")}
                                        />
                                        <Field.ErrorText>
                                            {errors.notes}
                                        </Field.ErrorText>
                                    </Field.Root>
                                </div>
                            </div>

                            <hr className="my-8" />

                            <div className="grid grid-cols-5 gap-8">
                                <div className="col-span-3 flex flex-col gap-8">
                                    <Field.Root
                                        required
                                        invalid={!!errors.tos_agreement}
                                    >
                                        <Checkbox.Root>
                                            <Checkbox.Control>
                                                <Checkbox.Indicator>
                                                    <CheckIcon />
                                                </Checkbox.Indicator>
                                            </Checkbox.Control>
                                            <Checkbox.Label>
                                                I have read and agreed to the
                                                Terms of Service{" "}
                                                <Field.RequiredIndicator>
                                                    *
                                                </Field.RequiredIndicator>
                                            </Checkbox.Label>
                                            <Checkbox.HiddenInput
                                                {...register("tos_agreement", {
                                                    required:
                                                        "Please agree to the Terms of Service",
                                                })}
                                            />
                                            <Field.ErrorText>
                                                {errors.tos_agreement}
                                            </Field.ErrorText>
                                        </Checkbox.Root>
                                    </Field.Root>

                                    <Field.Root
                                        required
                                        invalid={!!errors.no_reserve_agreement}
                                    >
                                        <Checkbox.Root>
                                            <Checkbox.Control>
                                                <Checkbox.Indicator>
                                                    <CheckIcon />
                                                </Checkbox.Indicator>
                                            </Checkbox.Control>
                                            <Checkbox.Label>
                                                I agree that this form is not a
                                                way to reserve commission slot,
                                                and the artist has all rights to
                                                accept or decline it at their
                                                discretion{" "}
                                                <Field.RequiredIndicator>
                                                    *
                                                </Field.RequiredIndicator>
                                            </Checkbox.Label>
                                            <Checkbox.HiddenInput
                                                {...register(
                                                    "no_reserve_agreement",
                                                    {
                                                        required:
                                                            "Please agree to this term",
                                                    }
                                                )}
                                            />
                                            <Field.ErrorText>
                                                {errors.no_reserve_agreement}
                                            </Field.ErrorText>
                                        </Checkbox.Root>
                                    </Field.Root>
                                </div>
                            </div>
                            <Button.Root
                                className="mt-8"
                                type="submit"
                                disabled={processing || !isValid}
                            >
                                {processing ? "Sending..." : "Send"}
                            </Button.Root>
                        </>
                    )}
                </Form>
            </Surface>
        </>
    )
}
