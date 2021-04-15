import { Flex, Image, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from 'next/link';

export function Header () {
  const { asPath } = useRouter();

  return (
    <Flex
      as="header"
      h="20"
      w="100%"
      maxWidth={1480}
      align="center"
      justify="center"
      px={36}
    >
      <Link href="/">
        <a>
          <Button 
            variant="unstyled"
            visibility={asPath === "/" ? 'hidden' : 'visible'}
          >
            <img src="/icons/back.svg" alt="Voltar" />
          </Button>
        </a>
      </Link>

      <Flex flex="1" justify="center">
        <Image
          src="/icons/logo.svg" 
          alt="Logo"
        />
      </Flex>
    </Flex>
  )
}