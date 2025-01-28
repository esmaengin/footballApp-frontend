import styles from "./page.module.css";
import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <HStack>
    <Button>Click me</Button>
    <Button>Click me</Button>
  </HStack>
  );
}
