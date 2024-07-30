import { Button, HStack, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useRef } from "react";

// interface Props {
//   onSearch: (query: string) => void;
// }

const InputBox = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current && ref.current.value !== "") {
          if (ref.current) console.log(ref.current.value);
          ref.current!.value = "";
          console.log(ref.current.value);
        }
      }}
    >
      <HStack width="100%" paddingX="5" border="7px">
        <Input ref={ref} placeholder="Search an image " />
        <Button type="submit">
          <Search2Icon />
        </Button>
      </HStack>
    </form>
  );
};

export default InputBox;
