import { SSRComponent } from "@gitcoin/types";

import { RadioGroup, RadioGroupItem } from "@/primitives/RadioGroup/RadioGroup";

const radioGroupSSR: SSRComponent<React.ComponentProps<typeof RadioGroup>> = {
  component: RadioGroup,
  cases: [
    {
      label: "Default",
      props: {
        buttonsPerRow: 3,
        children: (
          <>
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
            <RadioGroupItem value="option3" label="Option 3" />
          </>
        ),
      },
    },
    {
      label: "Single Row",
      props: {
        buttonsPerRow: 1,
        children: (
          <>
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
            <RadioGroupItem value="option3" label="Option 3" />
          </>
        ),
      },
    },
    {
      label: "Two Per Row",
      props: {
        buttonsPerRow: 2,
        children: (
          <>
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
            <RadioGroupItem value="option3" label="Option 3" />
          </>
        ),
      },
    },
    {
      label: "Custom Styles",
      props: {
        buttonsPerRow: 2,
        children: (
          <>
            <RadioGroupItem value="option1" label="Option 1" className="font-bold text-red-700" />
            <RadioGroupItem value="option2" label="Option 2" className="font-bold text-green-700" />
            <RadioGroupItem
              value="option3"
              label="Option 3"
              className="font-bold text-yellow-700"
            />
            <RadioGroupItem value="option4" label="Option 4" className="font-bold text-black" />
          </>
        ),
      },
    },
    {
      label: "With Heading",
      props: {
        buttonsPerRow: 3,
        heading: <h2 className="text-xl font-extrabold text-blue-500">Select an Option</h2>,
        children: (
          <>
            <RadioGroupItem value="option1" label="Yes" />
            <RadioGroupItem value="option2" label="No" />
            <RadioGroupItem value="option3" label="Uncertain" />
          </>
        ),
      },
    },
    {
      label: "With Custom Heading",
      props: {
        buttonsPerRow: 2,
        heading: (
          <h2 className="text-xl font-extrabold text-blue-500">This is an H2: Select an Option</h2>
        ),
        children: (
          <>
            <RadioGroupItem value="option1" label="Option 1" />
            <RadioGroupItem value="option2" label="Option 2" />
            <RadioGroupItem value="option3" label="Option 3" />
          </>
        ),
      },
    },
  ],
};

export default radioGroupSSR;
