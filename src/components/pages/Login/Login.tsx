import { Button, Input, Stack, Box, Text, Heading } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { LuArrowRight } from "react-icons/lu";

export default function LoginPage() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="#d7e3d3"
    >
      <Box
        maxWidth="400px"
        width="100%"
        py="18px"
        px="40px"
        border="2px solid #64905a"
        borderRadius="4px"
        background="#fff"
        transition="all 0.3s ease"
        justifyContent="center"
      >
        <Heading size="4xl" fontWeight="bold" textAlign="center">
          Giriş Yap
        </Heading>
        <Stack direction="row" justify="center">
          <Text mb="3" fontSize="md" color="fg.muted" textAlign="center">
            Hesabınız yok mu?
          </Text>
          <Button
            type="button"
            variant="outline"
            borderRadius="4px"
            backgroundColor="#b0c7a9"
            size="sm"
          >
            Hesap oluştur <LuArrowRight />
          </Button>
        </Stack>
        <Stack justifyContent="center" alignItems="center" >
          <Field label="Kullanıcı adı">
            <br></br>
            <Input
              name="name"
              marginBottom="12px"
              borderRadius="4px"
              height="24px"
              width="full"
              textAlign="center"
            />
          </Field>
          <Field label="E-posta adresi">
            <br></br>
            <Input
              name="email"
              type="email"
              height="24px"
              width="full"
              marginBottom="12px"
              borderRadius="4px"
            />
          </Field>
          <Button
            type="button"
            size="md"
            backgroundColor="#008000"
            variant="outline"
            borderRadius="4px"
            _hover={{
              backgroundColor: "#2C7A7B",
            }}
          >
            Giriş Yap
          </Button>
        </Stack>
        
      </Box>
    </Box>
  );
}
