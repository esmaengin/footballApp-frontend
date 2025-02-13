import { Button, Input, Stack, Fieldset } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function LoginPage() {
  return (
    <Fieldset.Root>
      <Stack>
        <Fieldset.Legend>Giriş Yap</Fieldset.Legend>
        <Fieldset.HelperText textStyle="lg">
          Hesabınız yok mu? <Button variant="plain">Kayıt ol</Button>
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="Name">
          <Input name="name" />
        </Field>

        <Field label="Email address">
          <Input name="email" type="email" />
        </Field>
      </Fieldset.Content>

      <Button type="button" alignSelf="flex-start" colorPalette="red">
        Giriş Yap
      </Button>
    </Fieldset.Root>
  );
}
