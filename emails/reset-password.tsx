import {
  Container,
  Tailwind,
  Preview,
  Section,
  Body,
  Head,
  Html,
  Link,
  Text,
  Hr,
} from "@react-email/components";
import { APPLICATION_NAME, CURRENT_YEAR } from "@/constants";

export default function ForgotPasswordEmail({ url }: { url: string }) {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body className="m-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="my-[32px] text-center">
              <Text className="mb-8 text-[14px] font-medium leading-[24px] text-black">
                Reset your password
              </Text>

              <Text className="text-[14px] font-medium leading-[24px] text-black">
                <Link
                  className="text-[#2754C5] underline"
                  target="_blank"
                  href={url}
                >
                  Click here to reset your password
                </Link>
              </Text>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            <Text className="flex items-center justify-center text-[12px] leading-[24px] text-[#666666]">
              © {CURRENT_YEAR} {APPLICATION_NAME}. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
