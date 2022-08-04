import dynamic from "next/dynamic";
import React from "react";

const NoSsr = (props) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});

/* Lo vas a implementar de la siguiente manera
Contact me at <NoSsr>email@example.com</NoSsr> */
