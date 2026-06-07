import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react"
import "./styles.css"

import { Portal } from "@ark-ui/react/portal"
import { Select as ArkSelect, createListCollection } from "@ark-ui/react/select"

type ShorthandList = ArkSelect.ListCollection<{ label: string; value: string }>

type ShorthandProps = {
    collection: ShorthandList
    placeholder?: string
}
const Shorthand = ({ collection, placeholder }: ShorthandProps) => {
    return (
        <ArkSelect.Root collection={collection}>
            <ArkSelect.Control>
                <ArkSelect.Trigger>
                    <ArkSelect.ValueText placeholder={placeholder} />
                    <ArkSelect.Indicator>
                        <CaretUpDownIcon />
                    </ArkSelect.Indicator>
                </ArkSelect.Trigger>
            </ArkSelect.Control>
            <Portal>
                <ArkSelect.Positioner>
                    <ArkSelect.Content>
                        <ArkSelect.ItemGroup>
                            {collection.items.map((item) => (
                                <ArkSelect.Item key={item.value} item={item}>
                                    <ArkSelect.ItemText>
                                        {item.label}
                                    </ArkSelect.ItemText>
                                    <ArkSelect.ItemIndicator>
                                        <CheckIcon />
                                    </ArkSelect.ItemIndicator>
                                </ArkSelect.Item>
                            ))}
                        </ArkSelect.ItemGroup>
                    </ArkSelect.Content>
                </ArkSelect.Positioner>
            </Portal>
            <ArkSelect.HiddenSelect />
        </ArkSelect.Root>
    )
}

export const Select = {
    ...ArkSelect,
    Shorthand,
    createListCollection,
}
