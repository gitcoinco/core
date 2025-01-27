import { StoryObj, Meta } from "@storybook/react";

import { Button } from "@/primitives/Button";

import { MetricCard } from "./MetricCard";

export default {
  title: "Features/Retrofunding/Components/MetricCard/MetricCard",
  component: MetricCard,
} as Meta<typeof MetricCard>;

type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  render: () => (
    <MetricCard
      title="Metric here"
      identifier="metric-1"
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off"
      variant="metric"
      onClick={() => alert("Button clicked!")}
      onReadMore={() => alert("Read more clicked!")}
    />
  ),
};

const variants: { variant: "metric" | "ballot"; isAdded: boolean }[] = [
  {
    variant: "metric",
    isAdded: false,
  },
  {
    variant: "metric",
    isAdded: true,
  },
  {
    variant: "ballot",
    isAdded: false,
  },
  {
    variant: "ballot",
    isAdded: true,
  },
];

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {variants.map(({ variant, isAdded }) => (
        <MetricCard
          title={`Variant: '${variant}', isAdded: ${isAdded}`}
          identifier={`metric-${variant}-${isAdded}`}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off"
          variant={variant}
          isAdded={isAdded}
          onClick={() => alert("Button clicked!")}
          onReadMore={() => alert("Read more clicked!")}
        />
      ))}
    </div>
  ),
};

export const HideButton: Story = {
  render: () => (
    <MetricCard
      title="Metric here"
      identifier="metric-1"
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, eos et accusamus et iusto odio praesentium voluptat iusto odio estamos praesentium voluptat iusto odio estamos, praesentium and this should be cut off"
      onClick={() => alert("Button clicked!")}
      onReadMore={() => alert("Read more clicked!")}
      hideButton
    />
  ),
};

export const WithCustomButton: Story = {
  render: () => (
    <MetricCard
      title="Metric here"
      identifier="metric-1"
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptat iusto odio estamos, praesentium voluptat iusto odio estamos and this should be cut off"
      variant="metric"
      onClick={() => alert("Custom button clicked!")}
      onReadMore={() => alert("Read more clicked!")}
      customButton={
        <Button
          variant="error"
          value="Custom Button"
          onClick={() => alert("Custom button variant")}
        />
      }
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <MetricCard
      title=""
      identifier=""
      description=""
      onClick={() => alert("")}
      onReadMore={() => alert("")}
      isLoading
    />
  ),
};
