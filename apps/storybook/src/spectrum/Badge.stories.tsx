import { EditIcon } from "@continuum-ui/icons/workflow/18";
import { Badge } from "@continuum-ui/spectrum/components/badge";
import type { Meta, StoryObj } from "@storybook/react";

import { options } from "../utils";

const meta = {
    title: "Spectrum/Badge",
    component: Badge,
    argTypes: {
        variant: {
            options: [...options.standard, ...options.nonSemantic],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl"],
            control: { type: "select" },
        },
    },
    args: {
        variant: "neutral",
        size: "md",
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: <span>Badge</span>,
    },
};

export const IconAndLabel: Story = {
    render: () => (
        <Badge className="inline-flex items-center">
            <EditIcon />
            <span>Badge</span>
        </Badge>
    ),
};

export const IconOnly: Story = {
    render: () => (
            <Badge size="sm">
                <EditIcon size="md" />
            </Badge>
    ),
};

export const Icon: Story = {
    render: () => <EditIcon size="xl" />,
};
