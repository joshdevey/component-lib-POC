import React from 'react';

import { QuickLinks } from "../components/QuickLinks";

export default {
  title: 'Components/QuickLinks',
  component: QuickLinks
}

const Template = (args) => <QuickLinks {...args} />;

export const Default = Template.bind({});

Default.args = {
  quickLinks: [
    {
      fields: {
        title: "Brand Assets",
      }
    },
    {
      fields: {
        title: "Imagery",
      }
    },
    {
      fields: {
        title: "Tone of Voice",
      }
    },
    {
      fields: {
        title: "Accessibility",
      }
    },
  ],
}

// import React from 'react'
// import { storiesOf } from "@storybook/react";
//
// import {QuickLinks} from "../components/QuickLinks";
// const stories = storiesOf('App Test', module);
//
// stories.add('QuickLinks', () => {
//   return( <QuickLinks />);
// })