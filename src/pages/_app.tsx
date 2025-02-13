import LoginPage from "@/components/pages/Login/Login";
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
      tokens: {
        colors: {},
      },
    },
  })
  
  const system = createSystem(config)
  
  export default function FootballApp() {
    return (
      <ChakraProvider value={system}>
        <LoginPage />
      </ChakraProvider>
    )
  }

