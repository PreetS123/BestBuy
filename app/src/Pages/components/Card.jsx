import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { nanoid } from 'nanoid'
import { FaRegObjectGroup, FaTruck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
  export const Card=()=> {
    return (
      <Center py={10}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '70%' }}
          height={{ sm: '476px', md: '30rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} >
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483649_sd.jpg;maxHeight=640;maxWidth=550'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"        
            p={1}
            pt={2}>
                <Text>Sponsered</Text>
                
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              desc : Samsung-Galaxy S22 Ultra 128GB(Unlocked)-Phantom Black
            </Text>
            <Flex
            justifyContent={'space-around'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
             <Box><span>Model: </span> SM-S908UZKAXAA</Box>
             <Box><span>SKU: </span> {nanoid()}</Box>
            </Flex>
            <Stack direction={'column'} mt={6}>
              <Heading fontSize={'20px'} color='green.700'>Ge it today</Heading>
              <Box>
               <Text display={'flex'}   alignItems={'center'}><Text fontSize='2xl' marginRight={'5px'}> <FaRegObjectGroup/>  </Text><Heading fontSize={'16px'}>Pickup:</Heading> Ready in 1 hour att Aiea</Text>
                <Text color={'gray.400'}>Act Fast - Only few left at your store!</Text>
                <NavLink to='#'>See all pickup locations</NavLink>
              </Box>
              <Box>
              <Text display={'flex'}   alignItems={'center'}><Text fontSize='2xl' marginRight={'5px'}><FaTruck /></Text><Heading fontSize={'16px'}>Shipping: </Heading> Unavailable in your area</Text>
                <Text color={'gray.400'}>This item is only available in certain markets.</Text>
                <NavLink  to='#'>Estimate for 969339</NavLink>
              </Box>
            </Stack>
            
          </Stack>
          <Stack
          flex={1}
          flexDirection="column"        
          p={1}
          pt={2}>
            <Heading>$999.99</Heading>
            <Text>with activation today</Text>
            <Text display={'flex'}><Button h={'30px'} bg={'maroon'} color='white' fontWeight={500}>Save $200</Button> <Text>Was $1,999.99</Text></Text>
            <Button w='80%' bg={'blue'} color='white'> See Details</Button>
          </Stack>
        </Stack>
      </Center>
    );
  }