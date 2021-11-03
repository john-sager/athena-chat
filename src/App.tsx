import Form from "@athena/forge/Form";
import Root from "@athena/forge/Root";
import Textarea from "@athena/forge/Textarea";
import FormField from "@athena/forge/FormField";

import "@athena/forge/dist/forge.css";

const App = () => {
  return (
    <Root>
      <h1>Chat</h1>
      <Form buttonText="Send">
        <FormField id="message" labelText="Message" inputAs={Textarea} />
      </Form>
    </Root>
  );
};

export default App;
