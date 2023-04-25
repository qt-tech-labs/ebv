import { useRouteError } from "react-router-dom";
import { FlexCol } from "../components";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <FlexCol className={`items-center justify-center`}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </FlexCol>
  );
}
